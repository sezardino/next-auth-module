import type { FC } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
const DEFAULT_OG_IMAGE = "/og.png";

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  isIndexed?: boolean;
}

export const Seo: FC<SeoProps> = (props) => {
  const {
    isIndexed = false,
    title = "Authentication module for Next.js with NestJS",
    description = "Authentication module for Next.js with NestJS",
    image = DEFAULT_OG_IMAGE,
    imageAlt = "Authentication module for Next.js with NestJS",
  } = props;
  const { asPath } = useRouter();

  const siteName = "Realo";
  const canonical = DOMAIN + asPath;

  return (
    <Head>
      {isIndexed && <meta name="robots" content="index,follow" />}

      <title key="title">{`${title} – ${siteName}`}</title>
      <meta name="description" content={description} />

      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />

      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content={image} />
      <meta key="og_image:alt" property="og:image:alt" content={imageAlt} />
      <meta key="og_image:width" property="og:image:width" content="600" />
      <meta key="og_image:height" property="og:image:height" content="600" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical} />
    </Head>
  );
};
