import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
        "index",
      ])),
    },
  };
}

export default function Index() {
  const { t } = useTranslation("index");

  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Úvod</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <h1 className="text-5xl font-extrabold mb-4">{t("heading")}</h1>
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8">
          {t("subheading")}
        </h2>
        <div className="mb-12">
          <span className="mr-4">
            <Image
              src="/icons/react-brands.svg"
              width="50"
              height="50"
              alt="Logo knihovny React"
            />
          </span>
          <span className="mr-4">
            <Image
              src="/icons/html5-brands.svg"
              width="50"
              height="50"
              alt="Logo HTML5"
            />
          </span>
          <span className="mr-4">
            <Image
              src="/icons/css3-brands.svg"
              width="50"
              height="50"
              alt="Logo CSS3"
            />
          </span>
          <span className="mr-4">
            <Image
              src="/icons/node-js-brands.svg"
              width="50"
              height="50"
              alt="Logo runtime prostředí Node.js"
            />
          </span>
          <span className="mr-4">
            <Image
              src="/icons/js-brands.svg"
              width="50"
              height="50"
              alt="Logo programovacího jazyka JavaScript"
            />
          </span>
          <span className="mr-4">
            <Image
              src="/icons/git-brands.svg"
              width="50"
              height="50"
              alt="Logo verzovacího systému Git"
            />
          </span>
        </div>
        <a
          href="#"
          className="whitespace-nowrap inline-flex items-center justify-center px-6 mr-4 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          {t("about-me")}
        </a>
        <a
          href="#"
          className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-gray-200 hover:bg-gray-300"
        >
          {t("projects")}
        </a>
      </main>
    </>
  );
}
