import { DefaultLayout } from "@/components/layouts/Default/DefaultLayout";
import { Button } from "@/components/ui/Button/Button";
import { Seo } from "@/components/ui/Seo";
import { Typography } from "@/components/ui/Typography/Typography";
import { ProjectUrl } from "@/const/project-url";

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

const Home = () => {
  return (
    <>
      <Seo title="Home" />
      <DefaultLayout>
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
      </DefaultLayout>
    </>
  );
};

export default Home;
