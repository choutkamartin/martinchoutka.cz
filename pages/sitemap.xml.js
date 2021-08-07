import globby from "globby";
import absoluteUrl from "next-absolute-url";

const Sitemap = () => {};

export const getServerSideProps = async ({ req, res }) => {
  const { protocol, host } = absoluteUrl(req, "localhost:3000");
  const data = await fetch(`${protocol}//${host}/api/articles`);
  const dynamicPages = await data.json();
  const dynamicSlug = dynamicPages.articles.map(
    (dynamicPage) => `blog/${dynamicPage.slug}`
  );
  const staticPages = await globby([
    "./",
    "!node_modules",
    "!public/",
    "!components/",
    "!api/",
  ]);
  const pages = [...staticPages, ...dynamicSlug];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages
        .map((url) => {
          const path = url
            .replace("pages/", "")
            .replace(".jsx", "")
            .replace(".js", "")
            .replace(".mdx", "")
            .replace("index", "");
          return `
            <url>
              <loc>${protocol}//${host}/${path}</loc>
              <xhtml:link
               rel="alternate"
               hreflang="en"
               href='${protocol}//${host}/en/${path}'/>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
