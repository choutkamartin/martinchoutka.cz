import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { signIn, signOut, useSession } from "next-auth/client";
import { LockClosedIcon } from "@heroicons/react/solid";
import Comment from "../../components/Article/Comment";
import absoluteUrl from "next-absolute-url";

export async function getServerSideProps({ req, query, locale }) {
  const slug = query.slug;
  const page = query.page || 1;
  const { protocol, host } = absoluteUrl(req, "localhost:3000");
  const res = await fetch(
    `${protocol}//${host}/api/articles/${slug}?page=${page}`
  );
  const data = await res.json();
  return {
    props: {
      slug,
      data,
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
        "websites",
      ])),
    },
  };
}

function Article({ data, router }) {
  const [session, loading] = useSession();
  const [otherArticles, setOtherArticles] = useState([]);

  const refreshData = () => {
    router.replace(router.asPath, undefined, { scroll: false });
  };

  const deleteComment = async (id) => {
    await fetch(`/api/comments/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    refreshData();
  };

  useEffect(() => {
    fetch(`/api/articles`)
      .then((res) => res.json())
      .then(
        (result) => {
          setOtherArticles(result.articles);
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
  }, []);

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
      <div className="p-4 rounded-lg border-2 border-gray-100 mb-3">
        <div className="animate-pulse flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-700"></div>
          <div className="ml-3 w-full">
            <h3 className="h-4 bg-blue-700 w-2/12 rounded mb-3"></h3>
            <p className="h-4 bg-blue-700 w-1/12 rounded mb-3"></p>
            <p className="h-4 bg-blue-700 w-2/12 rounded"></p>
          </div>
        </div>
      </div>
    );
  else {
    content = data.comments.content.map((comment) => {
      return (
        <Comment
          comment={comment}
          deleteComment={deleteComment}
          key={comment._id}
        />
      );
    });
  }
  console.log(otherArticles);

  let otherArticlesContent = null;
  if (isLoading)
    otherArticlesContent = (
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
    otherArticlesContent = otherArticles.map((article) => {
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

  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Článek</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28 dark:text-gray-200">
        {/* Either with or without background - without probably preferable */}
        <div className="mb-8 p-4 lg:p-10 bg-cover bg-center bg-gradient-to-r from-blue-700 text-white rounded-lg">
          <div className="mb-4">
            <h1 className="text-xl lg:text-5xl font-extrabold mb-4">
              {data.article.title}
            </h1>
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
                <p className="text-md text-gray-100">
                  {format(new Date(data.article.date), "dd/MM/yyyy")} • 5 min.
                  čtení
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mb-6"
          dangerouslySetInnerHTML={{ __html: data.article.textCs }}
        ></div>
        <div className="py-6">
          <h2 className="text-3xl font-extrabold mb-3">Komentáře</h2>
          <div className="border-2 border-gray-100 rounded-lg mb-3">
            {!session && (
              <div className="p-6">
                <h3 className="text-md font-semibold">
                  Pro přidání komentáře se musíš přihlásit.
                </h3>
                <div className="flex mt-3">
                  <button
                    className="group relative w-44 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
                    onClick={() =>
                      signIn("facebook", {
                        callbackUrl: `${process.env.WEBSITE_URL}${router.asPath}`,
                      })
                    }
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                        aria-hidden="true"
                      />
                    </span>
                    Facebook
                  </button>
                  <button
                    className="group relative w-44 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => signIn("google")}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                        aria-hidden="true"
                      />
                    </span>
                    Google
                  </button>
                </div>
              </div>
            )}
            {session && (
              <div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Image
                      src={session.user.image}
                      height="40"
                      width="40"
                      className="rounded-full"
                      alt="Fotografie autora příspěvku"
                    />
                    <div className="ml-3">
                      <h3 className="text-md font-semibold">
                        {session.user.name}
                      </h3>
                      <a
                        className="text-md text-gray-400 cursor-pointer"
                        onClick={() => signOut({ redirect: false })}
                      >
                        Odhlásit
                      </a>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Vaše zpráva
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="text"
                        name="text"
                        rows={3}
                        className="focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-2 border-gray-100 rounded-md"
                        placeholder="Ahoj, tohle je moje první zpráva!"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Vaše zpráva. Okénko můžete libovolně roztáhnout.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Odeslat
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="py-3">{content}</div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            containerClassName={"flex justify-center text-white font-bold"}
            subContainerClassName={"bg-black"}
            pageClassName={"bg-gray-500 rounded-full w-10 h-10 shadow-sm mr-3"}
            activeClassName={"bg-blue-600"}
            pageLinkClassName={
              "text-white font-bold flex justify-center items-center h-full"
            }
            previousClassName={
              "bg-gray-500 rounded-full w-10 h-10 shadow-sm mr-3"
            }
            previousLinkClassName={
              "text-white font-bold flex justify-center items-center h-full"
            }
            nextClassName={"bg-gray-500 rounded-full w-10 h-10 shadow-sm"}
            nextLinkClassName={
              "text-white font-bold flex justify-center items-center h-full"
            }
            initialPage={data.comments.pagination.currentPage - 1}
            pageCount={data.comments.pagination.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={paginationHandler}
          />
        </div>
        <section className="mt-4 mb-8">
          <h2 className="text-3xl font-extrabold mb-3">Jiné články</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {otherArticlesContent}
          </div>
        </section>
      </main>
    </>
  );
}

export default withRouter(Article);
