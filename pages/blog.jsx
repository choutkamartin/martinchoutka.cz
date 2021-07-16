import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Router, { withRouter } from "next/router";
import ReactPaginate from "react-paginate";

export async function getServerSideProps({ locale, query }) {
  const page = query.page || 1;
  const res = await fetch(`http://localhost:3000/api/articles?page=${page}`);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Blog({ data, router }) {
  const [session, loading] = useSession();
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;

    router.push(
      {
        pathname: currentPath,
        query: currentQuery,
      },
      undefined,
      { scroll: false }
    );
  };

  const refreshData = () => {
    router.replace(router.asPath, undefined, { scroll: false });
  };

  return (
    <>
      <Head>
        <title>Martin Choutka - Blog</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-xl font-medium text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <section className="grid grid-cols-3 gap-10 mt-4 mb-8">
          <article className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(/background.jpg)` }}
            ></div>
            <div className="p-6">
              <div className="mb-14">
                <p className="font-bold mb-2 text-indigo-700">Programování</p>
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Nauč se programovat
                </h2>
                <p className="text-gray-500 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio soluta, quis explicabo corrupti voluptates sunt eum
                  animi doloremque aspernatur itaque inventore! Quis similique
                  architecto itaque molestias unde hic corrupti.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">
                    2. 4. 2021 • 5 min. čtení
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(/car.jpg)` }}
            ></div>
            <div className="p-6">
              <div className="mb-14">
                <p className="font-bold mb-2 text-indigo-700">Auta</p>
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Závodní auta
                </h2>
                <p className="text-gray-500 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio soluta, quis explicabo corrupti voluptates sunt eum
                  animi doloremque aspernatur itaque inventore! Quis similique
                  architecto itaque molestias unde hic corrupti.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">
                    2. 4. 2021 • 5 min. čtení
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(/nature.jpg)` }}
            ></div>
            <div className="p-6">
              <div className="mb-14">
                <p className="font-bold mb-2 text-indigo-700">Příroda</p>
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Jak být více green
                </h2>
                <p className="text-gray-500 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio soluta, quis explicabo corrupti voluptates sunt eum
                  animi doloremque aspernatur itaque inventore! Quis similique
                  architecto itaque molestias unde hic corrupti.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">
                    2. 4. 2021 • 5 min. čtení
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(/beach.jpg)` }}
            ></div>
            <div className="p-6">
              <div className="mb-14">
                <p className="font-bold mb-2 text-indigo-700">Pláž</p>
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Nejlepší pláže na světě
                </h2>
                <p className="text-gray-500 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio soluta, quis explicabo corrupti voluptates sunt eum
                  animi doloremque aspernatur itaque inventore! Quis similique
                  architecto itaque molestias unde hic corrupti.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">
                    2. 4. 2021 • 5 min. čtení
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(/evening.jpg)` }}
            ></div>
            <div className="p-6">
              <div className="mb-14">
                <p className="font-bold mb-2 text-indigo-700">Večer</p>
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Proč jsou večery úžasné
                </h2>
                <p className="text-gray-500 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio soluta, quis explicabo corrupti voluptates sunt eum
                  animi doloremque aspernatur itaque inventore! Quis similique
                  architecto itaque molestias unde hic corrupti.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">
                    2. 4. 2021 • 5 min. čtení
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(/car-repair.jpg)` }}
            ></div>
            <div className="p-6">
              <div className="mb-14">
                <p className="font-bold mb-2 text-indigo-700">Oprava aut</p>
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  Základní opravy na autě
                </h2>
                <p className="text-gray-500 tracking-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  optio soluta, quis explicabo corrupti voluptates sunt eum
                  animi doloremque aspernatur itaque inventore! Quis similique
                  architecto itaque molestias unde hic corrupti.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">
                    2. 4. 2021 • 5 min. čtení
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          activeClassName={"active"}
          containerClassName={"flex justify-center text-white font-bold"}
          subContainerClassName={"bg-black"}
          pageClassName={"bg-gray-500 rounded-full w-10 h-10 shadow-md mr-3"}
          pageLinkClassName={
            "text-white font-bold flex justify-center items-center h-full"
          }
          previousClassName={
            "bg-gray-500 rounded-full w-10 h-10 shadow-md mr-3"
          }
          previousLinkClassName={
            "text-white font-bold flex justify-center items-center h-full"
          }
          nextClassName={"bg-gray-500 rounded-full w-10 h-10 shadow-md"}
          nextLinkClassName={
            "text-white font-bold flex justify-center items-center h-full"
          }
          initialPage={data.meta.pagination.currentPage - 1}
          pageCount={data.meta.pagination.pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={paginationHandler}
        />
      </main>
    </>
  );
}

export default withRouter(Blog);
