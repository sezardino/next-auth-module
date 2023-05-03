import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback } from "react";

import { AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { AuthLayout } from "@/components/layouts/Auth/AuthLayout";
import { AuthTemplate } from "@/components/templates/Auth/AuthTemplate";

const SignUpPage = () => {
  const onSignUp = useCallback(async (values: AuthFormValues) => {
    console.log(values);
  }, []);

  return (
    <AuthLayout>
      <AuthTemplate type="sign-up" onAuthFormSubmit={onSignUp} />
    </AuthLayout>
  );
};

export default SignUpPage;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
