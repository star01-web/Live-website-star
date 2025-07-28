import React from "react";
import { Helmet } from "react-helmet-async";

const ProductListingSeo = () => {
  return (
    <>
    <Helmet>
      {/* Meta and Open Graph tags here (same as earlier) */}
 <title>Aquaculture Equipment & Fish Farming Cages | Star Multiventure</title>
      <meta
        name="description"
        content="Browse our range of aquaculture equipment including HDPE fish farming cages, floating docks, and accessories. OEM-certified, durable, and backed by expert service."
      />
      {/* <link rel="canonical" href="https://starsupplierss.com/products" /> */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat"/>

      {/* Open Graph */}
      <meta property="og:title" content="Aquaculture Equipment | Star Multiventure" />
      <meta property="og:description" content="Explore HDPE cages, floating docks, and water lifting systems for aquaculture." />
      <meta property="og:url" content="https://starsupplierss.com/products" />
      <meta property="og:image" content="https://starsupplierss.com/images/products-banner.jpg" />
      {/* Schema Markup */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Aquaculture Equipment",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": "https://starsupplierss.com/products/hdpe-fish-cage"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": "https://starsupplierss.com/products/floating-jetty"
            }
          ]
        }
        `}
      </script>

      {/* Featured Product 1 */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "HDPE Fish Farming Cage",
          "image": [
            "https://starsupplierss.com/images/hdpe-cage.jpg"
          ],
          "description": "High-buoyancy HDPE cage system designed for marine and freshwater fish farming. UV-protected, easy to maintain, and customizable.",
          "sku": "SM-CAGE-HDPE-01",
          "brand": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "15000.00",
            "availability": "https://schema.org/InStock",
            "url": "https://starsupplierss.com/products/hdpe-fish-cage"
          }
        }
        `}
      </script>

      {/* Featured Product 2 */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "HDPE Floating Jetty",
          "image": [
            "https://starsupplierss.com/images/floating-jetty.jpg"
          ],
          "description": "Modular HDPE floating dock system ideal for aquasports, fish farming, and water tourism. UV-resistant pontoons with 5-year warranty.",
          "sku": "SM-JETTY-HDPE-02",
          "brand": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "30000.00",
            "availability": "https://schema.org/InStock",
            "url": "https://starsupplierss.com/products/floating-jetty"
          }
        }
        `}
      </script>
    </Helmet>
    </>
  );
};

export default ProductListingSeo;
