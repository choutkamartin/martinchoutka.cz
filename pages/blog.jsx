import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import Router, { withRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import absoluteUrl from "next-absolute-url";

export async function getServerSideProps({ req, locale, query }) {
  const page = query.page || 1;
  const { protocol, host } = absoluteUrl(req, "localhost:3000");
  const res = await fetch(`${protocol}//${host}/api/articles?page=${page}`);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
      ])),
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

  let content = null;
  if (isLoading)
    content = (
      <article className="shadow-md rounded-lg overflow-hidden">
        <div className="animate-pulse">
          <div className="w-full h-40 bg-cover bg-center bg-gray-300"></div>
          <div className="p-6">
            <div className="mb-14">
              <p className="h-4 bg-gray-300 rounded mb-2 w-2/4"></p>
              <h2 className="h-4 bg-gray-300 rounded mb-2 w-3/4"></h2>
              <p className="h-4 bg-gray-300 rounded h-10"></p>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div className="ml-3 w-full">
                <h3 className="h-4 bg-gray-300 w-2/4 mb-2 rounded"></h3>
                <p className="h-4 bg-gray-300 w-2/4 rounded"></p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  else {
    content = data.articles.map((article) => {
      return (
        <article
          className="shadow-md rounded-lg overflow-hidden"
          key={article._id}
        >
          <div
            className="w-full h-40 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://${process.env.BUCKET_NAME}.s3.${process.env.REGION}.amazonaws.com/${article.coverImage})`,
            }}
          ></div>
          <div className="p-6">
            <div className="mb-14">
              <p className="font-bold mb-2 text-blue-700">{article.category}</p>
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                {article.title}
              </h2>
              <p className="text-gray-500 tracking-tight truncate ...">
                {article.textCs}
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
                  {format(new Date(article.date), "dd/MM/yyyy")} • 5 min. čtení
                </p>
              </div>
            </div>
          </div>
        </article>
      );
    });
  }

  const refreshData = () => {
    router.replace(router.asPath, undefined, { scroll: false });
  };

  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Blog</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-xl font-medium text-gray-400">
            Všechny články na jednom místě.
          </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {content}
        </section>
        <ReactPaginate
          previousLabel={"‹"}
          nextLabel={"›"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          containerClassName={"flex justify-center text-white font-bold"}
          subContainerClassName={"bg-black"}
          pageClassName={"bg-gray-400 rounded-full w-10 h-10 shadow-md mr-3"}
          activeClassName={"bg-blue-700"}
          pageLinkClassName={
            "text-white font-bold flex justify-center items-center h-full"
          }
          previousClassName={
            "bg-gray-500 rounded-full w-10 h-10 shadow-md mr-3"
          }
          previousLinkClassName={
            "text-white text-2xl flex justify-center items-baseline h-full"
          }
          nextClassName={"bg-gray-500 rounded-full w-10 h-10 shadow-md"}
          nextLinkClassName={
            "text-white text-2xl flex justify-center items-baseline h-full"
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
