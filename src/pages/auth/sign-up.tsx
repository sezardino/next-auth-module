import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback } from "react";

import { AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { AuthLayout } from "@/components/layouts/Auth/AuthLayout";
import { AuthTemplate } from "@/components/templates/Auth/AuthTemplate";
import { Seo } from "@/components/ui/Seo";
import { ProjectUrl } from "@/const/project-url";
import { useSignUpMutation } from "@/hooks/mutations/useSignUp";
import { CustomPage } from "@/types/page";
import { useRouter } from "next/router";
import SignInPage from ".";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";

const SignUpPage: CustomPage = () => {
  const { mutateAsync: signUp, isLoading: isSignUpLoading } =
    useSignUpMutation();
  const router = useRouter();

  const onSignUp = useCallback(async (values: AuthFormValues) => {
    await signUp(values);

    router.push(ProjectUrl.Home);
  }, []);

  return (
    <>
      {isSignUpLoading && <LoadingOverlay />}
      <Seo title="Sign Up" />
      <AuthLayout>
        <AuthTemplate type="sign-up" onAuthFormSubmit={onSignUp} />
      </AuthLayout>
    </>
  );
};

export default SignUpPage;

SignInPage.layout = "auth";

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
