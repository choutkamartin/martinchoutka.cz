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
        "translations",
      ])),
    },
  };
}

export default function Translations() {
  const { t } = useTranslation("translations");

  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Úvod</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="mb-48">
          <h1 className="text-5xl font-extrabold mb-4">{t("translations")}</h1>
          <p className="text-xl font-extrabold text-gray-500 mb-8">
            {t("translations-description")}
          </p>
          <div className="mb-12">
            <span className="mr-8">
              <Image
                src="/icons/bitwarden-shield.svg"
                width="50"
                height="50"
                alt="Logo knihovny React"
              />
            </span>
            <span className="mr-8">
              <Image
                src="/icons/bouncer.svg"
                width="50"
                height="50"
                alt="Logo knihovny React"
              />
            </span>
            <span>
              <Image
                src="/icons/sharex.svg"
                width="50"
                height="50"
                alt="Logo knihovny React"
              />
            </span>
          </div>
          <a
            href="#selected-projects"
            className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {t("selected-translations")}
          </a>
        </div>
        <div id="selected-projects" className="p-4">
          <div className="border-l-2 box-border">
            <div className="flex items-center mb-64">
              <div className="bg-gray-500 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white mr-4 flex-none">
                1
              </div>
              <div className="ml-4 lg:flex items-center">
                <div className="mr-16">
                  <Image
                    src="/icons/bitwarden.svg"
                    width="96"
                    height="96"
                    alt="Logo knihovny React"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Bitwarden</h2>
                  <p className="text-lg font-bold text-gray-500 mb-2">
                    {t("bitwarden-subheading")}
                  </p>
                  <p className="text-md font-medium text-gray-500">
                    {t("bitwarden-description")}
                  </p>
                  <p className="text-md font-medium text-gray-500 mb-6">
                    {t("bitwarden-timespan")}
                  </p>
                  <a
                    href="https://bitwarden.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t("translation-website")}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-64">
              <div className="bg-gray-500 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white mr-4 flex-none">
                2
              </div>
              <div className="ml-4 lg:flex items-center">
                <div className="mr-16">
                  <Image
                    src="/icons/bouncer.svg"
                    width="72"
                    height="72"
                    alt="Logo knihovny React"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Bouncer</h2>
                  <p className="text-lg font-bold text-gray-500 mb-2">
                    {t("bouncer-subheading")}
                  </p>
                  <p className="text-md font-medium text-gray-500">
                    {t("bouncer-description")}
                  </p>
                  <p className="text-md font-medium text-gray-500 mb-6">
                    {t("bouncer-timespan")}
                  </p>
                  <a
                    href="https://samruston.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t("translation-website")}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-64">
              <div className="bg-gray-500 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white mr-4 flex-none">
                3
              </div>
              <div className="ml-4 lg:flex items-center">
                <div className="mr-16">
                  <Image
                    src="/icons/sharex.svg"
                    width="72"
                    height="72"
                    alt="Logo knihovny React"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">ShareX</h2>
                  <p className="text-lg font-bold text-gray-500 mb-2">
                    {t("sharex-subheading")}
                  </p>
                  <p className="text-md font-medium text-gray-500">
                    {t("sharex-description")}
                  </p>
                  <p className="text-md font-medium text-gray-500 mb-6">
                    {t("sharex-timespan")}
                  </p>
                  <a
                    href="https://getsharex.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t("translation-website")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
