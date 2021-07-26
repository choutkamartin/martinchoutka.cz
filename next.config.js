module.exports = {
  env: {
    BUCKET_NAME: process.env.BUCKET_NAME,
    REGION: process.env.REGION,
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    WEBSITE_URL: process.env.WEBSITE_URL
  },
  i18n: {
    defaultLocale: "cs",
    locales: ["cs", "en"],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "martin-choutka.s3.eu-central-1.amazonaws.com",
    ],
  },
};
