import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState, Fragment } from "react";
import Image from "next/image";

export const Step2 = ({
  register,
  errors,
  handleSubmit,
  coverImage,
  setCoverImage,
  english,
  watch,
  submitArticle,
}) => {
  const router = useRouter();

  const back = () => {
    router.push(
      {
        query: "page=1",
      },
      undefined,
      { scroll: false }
    );
  };

  const onSubmit = () => {
    submitArticle();
  };

  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/s3/file-upload?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (upload.ok) {
      console.log("Uploaded successfully!");
    } else {
      console.error("Upload failed.");
    }
  };

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/s3/list-uploads")
      .then((response) => response.json())
      .then((data) => setImages(data.Contents));
  }, []);

  return (
    <>
      <div className="flex mb-9">
        <article className="lg:w-6/12 mr-12">
          <h2 className="text-xl font-extrabold text-gray-500 mb-4">Obsah</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                HTML{" "}
              </label>
              <textarea
                {...register("contentCs", { required: true })}
                placeholder="Martin"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                rows={3}
              />
              {errors.contentCs && (
                <p className="text-red-400 font-bold text-sm">
                  Pole je povinné
                </p>
              )}
            </div>
            {english == true && (
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  HTML (EN)
                </label>
                <textarea
                  {...register("contentEn", { required: true })}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Martin"
                  rows={3}
                />
                {errors.contentEn && (
                  <p className="text-red-400 font-medium text-sm">
                    Pole je povinné
                  </p>
                )}
              </div>
            )}
          </form>
        </article>
      </div>
      <div>
        <h2 className="text-xl font-extrabold text-gray-500 mb-2">Galerie</h2>
        <p className="text-sm text-gray-500 mb-4">
          Do galerie můžeš nahrát nové obrázky. Obrázky můžeš přetáhnout do
          obsahu, či obrázek kliknutím nastavit jako titulní.
        </p>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md mb-9">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
              >
                <span>Nahrajte soubor</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={uploadPhoto}
                  accept="image/png, image/jpeg"
                />
              </label>
              <p className="pl-1">nebo ho přetáhněte</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG s maximální velikostí 1 MB
            </p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-6">
          {images.map((image) => (
            <div key={image.Key}>
              <div
                className={`h-32 relative ${
                  image.Key == coverImage
                    ? "ring-2 ring-offset-2 ring-blue-500"
                    : ""
                } rounded-lg overflow-hidden cursor-pointer mb-3 shadow-md`}
                tabIndex={0}
                onFocus={() => setCoverImage(image.Key)}
                onClick={() => setOpen(true)}
              >
                <Image
                  src={`https://${process.env.BUCKET_NAME}.s3.${process.env.REGION}.amazonaws.com/${image.Key}`}
                  layout="fill"
                  unoptimized={true}
                  objectFit="cover"
                  alt="Obrázek"
                />
              </div>
              <h2 className="text-sm font-medium text-gray-500">{image.Key}</h2>
              <p className="text-xs font-medium uppercase text-gray-400">
                {image.Size} B
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={back}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
      >
        Zpět
      </button>
      <button
        type="button"
        onClick={submitArticle}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Dále
      </button>
    </>
  );
};
