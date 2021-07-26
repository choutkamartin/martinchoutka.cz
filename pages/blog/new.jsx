import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Step1 } from "../../components/Form/Step1";
import { Step2 } from "../../components/Form/Step2";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Head from "next/head";
import AccessDenied from "../../components/AccessDenied";

export async function getStaticProps({ locale }) {
  return {
    props: {
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

function NewArticle() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [english, setEnglish] = useState(false);
  const [coverImage, setCoverImage] = useState("");
  const [session, loading] = useSession();
  if (!session) {
    return <AccessDenied />;
  }

  if (router.query.page == null) {
    router.query.page = "1";
    router.push(router);
  }

  const submitArticle = async (data) => {
    var obj = {};
    obj.formData = getValues();
    obj.coverImage = coverImage;
    const res = await fetch(`/api/articles/new`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };

  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Nový článek</title>
        <meta name="description" content="Test" />
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28 dark:text-gray-200">
        <section>
          <h2 className="text-5xl font-extrabold mb-4">Nový článek</h2>
          {router.query.page == "1" && (
            <Step1
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              english={english}
              setEnglish={setEnglish}
            />
          )}
          {router.query.page == "2" && (
            <Step2
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              english={english}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              watch={watch}
              submitArticle={submitArticle}
            />
          )}
        </section>
      </main>
    </>
  );
}
export default NewArticle;
