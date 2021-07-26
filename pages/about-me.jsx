import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
        "about-me",
      ])),
    },
  };
}

export default function AboutMe() {
  const { t } = useTranslation("about-me");

  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - O mně</title>
      </Head>
      <main
        className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28 bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url("/about-me.svg")' }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Martin Choutka</h1>
        <h2 className="text-xl font-extrabold text-gray-500 mb-24">
          {t("subheading")}
        </h2>
        <div className="lg:w-6/12 mb-24">
          <h3 className="border-b-4 inline-block text-2xl border-blue-700 font-extrabold mb-4 pb-2">
            {t("studies")}
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            {t("studies-description")}
          </p>
          <Image src="/icons/czu.svg" width="250" height="100" alt="Logo ČZU" />
        </div>
        <div className="lg:w-6/12 mb-24">
          <h3 className="border-b-4 inline-block text-2xl border-blue-700 font-extrabold mb-4 pb-2">
            {t("work")}
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            {t("work-description")}
          </p>
          <Image
            src="/icons/csob.svg"
            width="200"
            height="200"
            alt="Logo ČSOB"
          />
        </div>
        <div className="lg:w-6/12">
          <h3 className="border-b-4 inline-block text-2xl border-blue-700 font-extrabold mb-4 pb-2">
            {t("technology")}
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            {t("technology-description")}
          </p>
          <div className="mb-8">
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
          <p className="text-medium font-base text-gray-500 mb-8">
            {t("technology-websites")}
          </p>
          <p className="text-medium font-base text-gray-500 mb-8">
            {t("technology-other")}
          </p>
        </div>
      </main>
    </>
  );
}
