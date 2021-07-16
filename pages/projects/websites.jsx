import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Websites() {
  return (
    <>
      <Head>
        <title>Martin Choutka - Úvod</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="flex">
          <div className="w-6/12">
            <h1 className="text-5xl font-extrabold mb-4">
              Blog martinchoutka.cz
            </h1>
            <p className="text-xl font-extrabold text-gray-500 mb-8">
              Můj osobní blog napsaný v Next.js
            </p>
            <h2 className="text-2xl font-extrabold mb-4">Technologie</h2>
            <div className="mb-6">
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
                  alt="Logo HTML5"
                />
              </span>
              <span className="mr-4">
                <Image
                  src="/icons/nextjs.svg"
                  width="50"
                  height="50"
                  alt="Logo HTML5"
                />
              </span>
            </div>
            <p className="text-medium font-base text-gray-500 mb-8">
              Webová stránka a blog napsaný pomocí NextJS. Design vytvořený s
              pomocí Tailwind CSS. Databáze MongoDB a Mongoose pro objektové
              modelování. Manipulaci s autorizací zajišťuje Next Auth,
              manipulaci s daty date-fns.
            </p>
            <a
              href="#selected-projects"
              className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Zdrojový kód
            </a>
          </div>
          <div>
            <Image src="/web-showcase.png" height="800" width="800" />
          </div>
        </div>
      </main>
    </>
  );
}
