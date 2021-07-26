import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const Step1 = ({
  register,
  errors,
  handleSubmit,
  english,
  setEnglish,
}) => {
  const { t } = useTranslation(["contact-form", "common"]);
  const router = useRouter();

  const onSubmit = () => {
    router.push(
      {
        query: "page=2",
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <article>
      <h3 className="text-xl font-extrabold text-gray-500 mb-4">
        Základní data
      </h3>
      <div className="flex items-start mb-4">
        <div className="flex items-center h-5">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={english}
            value={english}
            onChange={() => setEnglish(!english)}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Anglický jazyk
          </label>
          <p className="text-gray-500">
            Zaškrtni, pokud chceš mít článek i v anglickém jazyce
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 mb-3">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Název
        </label>
        <input
          className={`mt-1 focus:ring-blue-500 ${
            errors.articleNameCs && `border-red-500`
          } focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-1`}
          type="text"
          {...register("articleNameCs", { required: true })}
          placeholder="Článek"
        />
        {errors.articleNameCs && (
          <p className="text-red-500 text-sm">Pole je povinné.</p>
        )}
      </div>
      {english == true && (
        <div className="lg:w-1/3 mb-3">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Název (EN)
          </label>
          <input
            type="text"
            className={`mt-1 focus:ring-blue-500 ${
              errors.articleNameCs && `border-red-500`
            } focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-1`}
            {...register("articleNameEn", { required: true })}
            placeholder="Article"
          />
          {errors.articleNameCs && (
            <p className="text-red-500 text-sm">Pole je povinné</p>
          )}
        </div>
      )}
      <div className="lg:w-1/3 mb-3">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Slug
        </label>
        <input
          type="text"
          className={`mt-1 focus:ring-blue-500 ${
            errors.slug && `border-red-500`
          } focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-1`}
          {...register("slug", { required: true })}
          placeholder="Slug"
        />
        {errors.slug && (
          <p className="text-red-500 text-sm">Pole je povinné.</p>
        )}
      </div>
      <div className="lg:w-1/3 mb-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Kategorie
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country"
          {...register("category")}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="Programování">Programování</option>
          <option value="Ze života">Ze života</option>
        </select>
        {errors.category && (
          <p className="text-red-400 font-medium">
            {t("common:input-required")}
          </p>
        )}
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Dále
        </button>
      </form>
    </article>
  );
};
