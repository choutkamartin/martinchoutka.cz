import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "banner",
        "footer",
        "404",
      ])),
    },
  };
}

export default function NotFound() {
  const { t } = useTranslation("404");
  
  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - 404</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700">
          {t("heading")}
        </h1>
        <h2 className="text-3xl font-extrabold mb-8">{t("description")}</h2>
        <Link href="/">
          <a className="text-blue-700 font-medium">← {t("back")}</a>
        </Link>
      </main>
    </>
  );
}
