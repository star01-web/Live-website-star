import React from "react";
import { Helmet } from "react-helmet-async";

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const BlogSchema = ({ blog }) => {
  if (!blog) return null;

  const {
    title = "Blog Post",
    description = "",
    image = "/default.jpg",
    writer = "Star Multiventure",
    date = new Date().toISOString(),
    slug 
  } = blog;

  const finalSlug = slug || generateSlug(title);
  const blogUrl = `https://starsupplierss.com/blog/${finalSlug}`;

  return (
    <>
    <Helmet>
      {/* Meta Tags */}
      <title>{title} | Star Multiventure Blog</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat" />

      {/* Canonical URL (now with slug) */}
      {/* <link rel="canonical" href={blogUrl} /> */}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:image" content={`https://starsupplierss.com${image}`} />
      <meta property="og:url" content={blogUrl} />
      <meta property="og:type" content="article" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "image": `https://starsupplierss.com${image}`,
            "author": {
              "@type": "Person",
              "name": writer,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Star Multiventure Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://starsupplierss.com/logo.png",
              },
            },
            "datePublished": date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": blogUrl, 
            },
          }),
        }}
      ></script>
    </Helmet>
    
    </>
  );
};

export default BlogSchema;
