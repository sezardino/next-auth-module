import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback } from "react";

import { AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { AuthLayout } from "@/components/layouts/Auth/AuthLayout";
import { AuthTemplate } from "@/components/templates/Auth/AuthTemplate";

const SignInPage = () => {
  const onSignIn = useCallback(async (values: AuthFormValues) => {
    console.log(values);
  }, []);

  return (
    <AuthLayout>
      <AuthTemplate type="sign-in" onAuthFormSubmit={onSignIn} />
    </AuthLayout>
  );
};

export default SignInPage;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
