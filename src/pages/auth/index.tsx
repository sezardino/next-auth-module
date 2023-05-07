import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback } from "react";

import { AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { AuthLayout } from "@/components/layouts/Auth/AuthLayout";
import { AuthTemplate } from "@/components/templates/Auth/AuthTemplate";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { Seo } from "@/components/ui/Seo";
import { useSignInMutation } from "@/hooks/mutations/useSignIn";

const SignInPage = () => {
  const {
    mutateAsync: signIn,
    isLoading: isSignInLoading,
    error,
  } = useSignInMutation();

  const signInHandler = useCallback(async (values: AuthFormValues) => {
    try {
      await signIn(values);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Seo title="Sign In" />

      <AuthLayout>
        {isSignInLoading && <LoadingOverlay />}

        <AuthTemplate
          type="sign-in"
          onAuthFormSubmit={signInHandler}
          errorMessage={error?.message}
        />
      </AuthLayout>
    </>
  );
};

export default SignInPage;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
