const { i18n } = require("./next-i18next.config");

module.exports = {
  env: {
    BUCKET_NAME: process.env.BUCKET_NAME,
    REGION: process.env.REGION,
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    WEBSITE_URL: process.env.WEBSITE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  i18n,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "martin-choutka.s3.eu-central-1.amazonaws.com",
    ],
  },
};
