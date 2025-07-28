import React from "react";
import { Helmet } from "react-helmet-async";

const ServicesSchema = () => {
  return (
    <>
    <Helmet>
      {/* Meta Tags */}
      <title>Aquaculture Equipment Services & Support | Star Multiventure</title>
      <meta
        name="description"
        content="Explore expert services for aquaculture cage installation, HDPE jetty setup, and on-site technical support by Star Multiventure. Backed by 5-year warranty and 4x7 assistance."
      />
      {/* <link rel="canonical" href="https://starsupplierss.com/services" /> */}
      <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat"/>

      {/* Open Graph */}
      <meta property="og:title" content="Aquaculture Equipment Services | Star Multiventure" />
      <meta property="og:description" content="Professional services for fish cage installation, floating jetty setup, and aquaculture maintenance." />
      <meta property="og:url" content="https://starsupplierss.com/services" />
      <meta property="og:image" content="https://starsupplierss.com/images/Logo02.svg" />

      {/* Service Schema Markup */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Aquaculture Equipment Support & Installation",
          "provider": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd.",
            "url": "https://starsupplierss.com/",
            "logo": "https://starsupplierss.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919039023820,21,22,26",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "description": "We provide complete support for aquaculture cage installation, floating jetty setup, mooring systems, and on-site technical training. Backed by expert engineers and a 5-year warranty."
        }
        `}
      </script>
    </Helmet>
    
    </>
  );
};

export default ServicesSchema;
