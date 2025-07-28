import React from "react";
import { Helmet } from "react-helmet-async";

const SuccessStorySchema = ({ story }) => {
  if (!story) return null;

  const {
    title,
    description,
    image,
    client,
    date,
    id
  } = story;

  const url = `https://starsupplierss.com/success-stories/${id}`;

  return (
    <>
    <Helmet>
      {/* SEO Meta Tags */}
      <title>{title} | Client Success Story – Star Multiventure</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {/* <link rel="canonical" href={url} /> */}
      <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat"/>


      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://starsupplierss.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Star Multiventure" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://starsupplierss.com${image}`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "image": `https://starsupplierss.com${image}`,
          "author": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "publisher": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://starsupplierss.com/logo.png"
            }
          },
          "datePublished": date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          }
        })}
      </script>
    </Helmet>
    </>
  );
};

export default SuccessStorySchema;
