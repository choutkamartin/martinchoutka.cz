import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { withRouter } from "next/router";
import { XCircleIcon } from "@heroicons/react/outline";
import Modal from "../../components/Modal";
import { useState } from "react";

export async function getServerSideProps({ query, locale }) {
  const slug = "article";
  const page = query.page || 1;
  const res = await fetch(
    `http://localhost:3000/api/articles/${slug}?page=${page}`
  );
  const data = await res.json();
  return {
    props: {
      slug,
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Article({ data, router }) {
  const [modalOpen, setModal] = useState(false);

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

  return (
    <>
      <Head>
        <title>Martin Choutka - Článek</title>
      </Head>
      <Modal
        modalOpen={modalOpen}
        setModal={setModal}
        title="Smazání komentáře"
        description="Opravdu chcete smazat tento komentář?"
      />
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28 dark:text-gray-200">
        {/* Either with or without background - without probably preferable */}
        <div className="mb-8 p-10 bg-cover bg-center bg-gradient-to-r from-indigo-700 text-white rounded-lg">
          <div className="mb-4">
            <h1 className="text-5xl font-extrabold mb-4">Název článku</h1>
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
                  2. 4. 2021 • 5 min. čtení
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <p className="mb-4">
            Our vision is to develop a football club in the most popular part of
            Manchester which will promote and develop the sport in the local
            area. The club will also continue to develop it&apos;s professional
            amateur team and develop further the club&apos;s business. The club
            will also be actively involved in the local community, to share with
            the local community an idea that exists, that the Premier League
            have a football club. We are the only sports club that offers our
            members the opportunity of a lifetime to play in the Premier League.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>První odrážka</li>
            <li>Druhá odrážka</li>
            <li>Třetí odrážka</li>
          </ul>
          <p className="mb-4">
            We are a team of young people who love to play football. We have
            experience in coaching and we are ready to be the best club in the
            world. Our dream is to bring together like-minded people to create a
            unique experience. We want to create a new social football
            community, and in our travels we have found that there is something
            very special about football. Our goals are to build a new club from
            the inside out, to build a team of young footballers that can
            develop them as a community. Our vision is to develop a new football
            culture that will have many positive effects on the lives of people.
          </p>
          <ol className="list-decimal list-inside mb-3">
            <li>První odrážka</li>
            <li>Druhá odrážka</li>
            <li>Třetí odrážka</li>
          </ol>
          <figure className="mb-3">
            <Image src="/car.jpg" alt="Fotografie auta na silnici" />
            <figcaption className="font-medium text-gray-400">
              Auto s krajinou
            </figcaption>
          </figure>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            impedit eos nostrum magni sequi libero temporibus aliquam explicabo?
            Ullam nostrum quis dicta fuga magni officia saepe omnis possimus sed
            vero.
          </p>
        </div>
        <div className="py-6">
          <h2 className="text-3xl font-extrabold mb-3">Komentáře</h2>
          <div className="border-2 border-gray-100 rounded-lg mb-3">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Image
                  src="/avatar.jpg"
                  height="40"
                  width="40"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
                <div className="ml-3">
                  <h3 className="text-md font-semibold">Martin Choutka</h3>
                  <p className="text-md text-gray-400">Odhlásit</p>
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
                    className="focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-2 border-gray-100 rounded-md"
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
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Odeslat
              </button>
            </div>
          </div>
          <div className="py-3">
            <div className="p-4 rounded-lg border-2 border-gray-100 flex items-center mb-3">
              <div className="w-1/12">
                <Image
                  src="/avatar.jpg"
                  height="60"
                  width="60"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                />
              </div>
              <div className="ml-3 w-full">
                <h3 className="text-md font-semibold">Martin Choutka</h3>
                <p className="text-md text-gray-400">2. 4. 2021</p>
                <p>Parádní návod, díky za něj!</p>
              </div>
              <XCircleIcon
                className="text-red-500 ml-2 h-6 w-6 hover:text-red-400"
                onClick={() => setModal(true)}
              />
            </div>
            <div className="p-4 rounded-lg border-2 border-gray-100 flex items-center mb-3 ml-6">
              <div className="w-1/12">
                <Image
                  src="/avatar-unsplash-1.jpg"
                  height="60"
                  width="60"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                  objectFit="cover"
                />
              </div>
              <div className="ml-3 w-full">
                <h3 className="text-md font-semibold">Petra Nová</h3>
                <p className="text-md text-gray-400">2. 4. 2021</p>
                <p>
                  Taky souhlasím, ale jediná věc, kterou jsem tam nepochopila
                  bylo to, jak se vůbec React znovu vykresluje, může mi to někdo
                  vysvětlit?
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg border-2 border-gray-100 flex items-center mb-3">
              <div className="w-1/12">
                <Image
                  src="/avatar-unsplash-2.jpg"
                  height="60"
                  width="60"
                  className="rounded-full"
                  alt="Fotografie autora příspěvku"
                  objectFit="cover"
                />
              </div>
              <div className="ml-3 w-full">
                <h3 className="text-md font-semibold">Anežka Harantová</h3>
                <p className="text-md text-gray-400">2. 4. 2021</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  expedita accusamus quasi cum hic tempora rerum veritatis
                  laborum dolorem, autem ducimus distinctio rem cumque,
                  voluptate qui ut? Eveniet, veniam fuga!
                </p>
              </div>
            </div>
          </div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            activeClassName={"bg-indigo-600"}
            containerClassName={"flex justify-center text-white font-bold"}
            subContainerClassName={"bg-black"}
            pageClassName={"bg-gray-500 rounded-full w-10 h-10 shadow-sm mr-3"}
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
          <div className="grid grid-cols-3 gap-10">
            <article className="shadow-md rounded-lg overflow-hidden">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi optio soluta, quis explicabo corrupti voluptates sunt
                    eum animi doloremque aspernatur itaque inventore! Quis
                    similique architecto itaque molestias unde hic corrupti.
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
            <article className="shadow-md rounded-lg overflow-hidden">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi optio soluta, quis explicabo corrupti voluptates sunt
                    eum animi doloremque aspernatur itaque inventore! Quis
                    similique architecto itaque molestias unde hic corrupti.
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
            <article className="shadow-md rounded-lg overflow-hidden">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi optio soluta, quis explicabo corrupti voluptates sunt
                    eum animi doloremque aspernatur itaque inventore! Quis
                    similique architecto itaque molestias unde hic corrupti.
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
          </div>
        </section>
      </main>
    </>
  );
}

export default withRouter(Article);
