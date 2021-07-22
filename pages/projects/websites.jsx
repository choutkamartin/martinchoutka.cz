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
        <title>{process.env.WEBSITE_NAME} - Úvod</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="md:flex md:items-start">
          <div className="md:w-6/12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Blog martinchoutka.cz
            </h1>
            <p className="text-md md:text-lg lg:text-xl font-extrabold text-gray-500 mb-8">
              Můj osobní blog napsaný v Next.js
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">
              Technologie
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 mb-6">
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/html5-brands.svg"
                  layout="fill"
                  alt="Logo HTML5"
                />
              </div>
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/css3-brands.svg"
                  layout="fill"
                  alt="Logo CSS3"
                />
              </div>
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/js-brands.svg"
                  layout="fill"
                  alt="Logo JavaScript"
                />
              </div>
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/nextjs.svg"
                  layout="fill"
                  alt="Logo Next.js"
                />
              </div>
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/mongodb.svg"
                  layout="fill"
                  alt="Logo MongoDB"
                />
              </div>
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/tailwind-css.svg"
                  layout="fill"
                  alt="Logo Tailwind CSS"
                />
              </div>
              <div className="relative h-10 mr-4">
                <Image
                  src="/icons/amazons3.svg"
                  layout="fill"
                  alt="Logo Amazon S3"
                />
              </div>
            </div>
            <p className="text-medium font-base text-gray-500 mb-8">
              Webová stránka a blog napsaný pomocí NextJS. Design vytvořený s
              pomocí Tailwind CSS. Databáze MongoDB a Mongoose pro objektové
              modelování. Manipulaci s autorizací zajišťuje Next Auth,
              manipulaci s daty date-fns, úložiště souborů díky Amazon S3.
            </p>
            <a
              href="https://github.com/choutkamartin/my-website"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Zdrojový kód
            </a>
          </div>
          <div className="hidden md:block relative w-6/12">
            <Image
              src="/web-showcase.png"
              height="500"
              width="500"
              layout="responsive"
              alt="Monitor s webovou stránkou"
            />
          </div>
        </div>
      </main>
    </>
  );
}
