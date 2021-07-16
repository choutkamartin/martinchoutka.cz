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

export default function Translations() {
  return (
    <>
      <Head>
        <title>Martin Choutka - Úvod</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="mb-48">
          <h1 className="text-5xl font-extrabold mb-4">Překlady</h1>
          <p className="text-xl font-extrabold text-gray-500 mb-8">
            Překlady aplikací a programů do českého jazyka z angličtiny
          </p>
          <div className="mb-12">
            <span className="mr-8">
              <Image
                src="/icons/bitwarden.svg"
                width="50"
                height="50"
                alt="Logo knihovny React"
              />
            </span>
            <span className="mr-8">
              <Image
                src="/icons/bitwarden.svg"
                width="50"
                height="50"
                alt="Logo knihovny React"
              />
            </span>
            <span>
              <Image
                src="/icons/bitwarden.svg"
                width="50"
                height="50"
                alt="Logo knihovny React"
              />
            </span>
          </div>
          <a
            href="#selected-projects"
            className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Vybrané projekty
          </a>
        </div>
        <div id="selected-projects">
          <div className="border-l-2">
            <div className="flex items-center mb-64">
              <div className="bg-gray-500 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white mr-12">
                1
              </div>
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
                  Správce hesel, dostupný na drtivé většině zařízení
                </p>
                <p className="text-md font-medium text-gray-500">
                  Projekt překládám průběžně od června 2019. Za tu dobu jsem se
                  podílel na překladu 350+ řetězců spolu s ostatními
                  překladateli.
                </p>
                <p className="text-md font-medium text-gray-500 mb-6">
                  Působení: červen 2019 - doteď
                </p>
                <a
                  href="#"
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Stránka projektu
                </a>
              </div>
            </div>
            <div className="flex items-center mb-64">
              <div className="bg-gray-500 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white mr-12">
                2
              </div>
              <div className="mr-16">
                <Image
                  src="/icons/bitwarden.svg"
                  width="96"
                  height="96"
                  alt="Logo knihovny React"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Bouncer</h2>
                <p className="text-lg font-bold text-gray-500 mb-2">
                  Aplikace ke správě či mazání oprávnění na Android
                </p>
                <p className="text-md font-medium text-gray-500">
                  Aplikaci jsou přeložil celou, některé překlady vývojář v
                  aplikaci ještě neaktualizoval.
                </p>
                <p className="text-md font-medium text-gray-500 mb-6">
                  Působení: červen 2019 - doteď
                </p>
                <a
                  href="#"
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Stránka projektu
                </a>
              </div>
            </div>
            <div className="flex items-center mb-64">
              <div className="bg-gray-500 rounded-full w-12 h-12 relative right-6 flex justify-center items-center font-bold text-white mr-12">
                3
              </div>
              <div className="mr-16">
                <Image
                  src="/icons/bitwarden.svg"
                  width="96"
                  height="96"
                  alt="Logo knihovny React"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">ShareX</h2>
                <p className="text-lg font-bold text-gray-500 mb-2">
                  Správce hesel, dostupný na drtivé většině zařízení
                </p>
                <p className="text-md font-medium text-gray-500">
                  Projekt překládám průběžně od června 2019. Za tu dobu jsem se
                  podílel na překladu 350+ řetězců spolu s ostatními
                  překladateli.
                </p>
                <p className="text-md font-medium text-gray-500 mb-6">
                  Působení: červen 2019 - doteď
                </p>
                <a
                  href="#"
                  className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Stránka projektu
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
