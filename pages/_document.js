import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="author" content="Martin Choutka" />
          <meta
            name="description"
            content="Blog a portfolio, na kterém jsou publikována zajímavá témata o programování."
          />
          <meta property="og:title" content="Martin Choutka" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.martinchoutka.cz/" />
          <meta
            property="og:image"
            content="https://www.martinchoutka.cz/avatar.jpg"
          />
          <meta
            name="google-site-verification"
            content="3GnJooLIfOWP8xVyjmTF_00SCM2F7raJyHcON5d2v10"
          />
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
