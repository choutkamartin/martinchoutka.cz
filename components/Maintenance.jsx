import Head from "next/head";
import Link from "next/link";

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Martin Choutka - Údržba</title>
      </Head>
      <h1 className="text-5xl font-extrabold mb-4 text-blue-700">Údržba</h1>
      <h2 className="text-3xl font-extrabold mb-8">
        Tato stránka nyní prochází menší rekonstrukcí.
      </h2>
      <Link href="/">
        <a className="text-blue-700 font-medium">
          ← Zpět domů / Back to homepage
        </a>
      </Link>
    </>
  );
}
