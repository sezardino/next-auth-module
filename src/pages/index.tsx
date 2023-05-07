import { Button } from "@/components/ui/Button/Button";
import { Seo } from "@/components/ui/Seo";
import { Typography } from "@/components/ui/Typography/Typography";
import { ProjectUrl } from "@/const/project-url";
import { CustomPage } from "@/types/page";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const buttons = [
  {
    label: "Settings",
    href: ProjectUrl.Settings,
    after: "admin | sub-admin | user",
  },
  {
    label: "Users",
    href: ProjectUrl.Users,
    after: "sub-admin | admin",
  },
  {
    label: "Sub-admins",
    href: ProjectUrl.SubAdmins,
    after: "admin",
  },
];

const HomePage: CustomPage = () => {
  return (
    <>
      <Seo title="Home" />
      <main className="container mx-auto">
        <Typography as="h1" styling="h1" text="Home" />

        <ul className="grid gap-10 mt-5">
          {buttons.map((button, index) => (
            <li key={index} className="flex gap-5 items-center">
              <Button href={button.href} text={button.label}>
                {button.label}
              </Button>

              <Typography as="span" text={button.after} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
