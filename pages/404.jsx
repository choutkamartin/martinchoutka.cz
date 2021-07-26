import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - 404</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700">
          404 Error
        </h1>
        <h2 className="text-3xl font-extrabold mb-8">
          Stránka nenalezena / Page not found
        </h2>
        <Link href="/">
          <a className="text-blue-700 font-medium">
            ← Zpět domů / Back to homepage
          </a>
        </Link>
      </main>
    </>
  );
}
