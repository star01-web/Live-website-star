import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUsSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Us - Star Multiventure Pvt. Ltd.",
    url: "https://starsupplierss.com/about", 
    description: "Explore Star Multiventure Pvt. Ltd., a trusted name in India for aquaculture cages, floating docks, and aqua tourism solutions with expert support and innovation.",
    mainEntity: {
      "@type": "Organization",
      name: "Star Multiventure Pvt. Ltd.",
      legalName: "Star Multiventure Private Limited",
      url: "https://starsupplierss.com/",
      foundingDate: "2016",
      founder: {
        "@type": "Person",
        name: "Star Suppliers"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN"
      },
      sameAs: [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage",
        "https://www.linkedin.com/company/yourpage"
      ],
      description: "A pan-India aquaculture infrastructure company offering fish farming cages, HDPE docks, tourism pontoons and floating experiences.",
      subOrganization: [
        {
          "@type": "Organization",
          name: "Star Suppliers",
          description: "Provider of aquaculture equipment and fish farming tools."
        },
        {
          "@type": "Organization",
          name: "Star Fisheries",
          description: "Supplier of live fish and fingerlings for aquaculture."
        },
        {
          "@type": "Organization",
          name: "Star Feeds",
          description: "Manufacturer of nutrient-rich fish feed."
        }
      ]
    },
    potentialAction: {
      "@type": "ReadAction",
      target: ["https://starsupplierss.com/about"]
    }
  };

  return (
    <>
    <Helmet>
      <title>About Us - Star Multiventure Pvt. Ltd.</title>
      <meta name="description" content="Explore Star Multiventure Pvt. Ltd., a trusted name in India for aquaculture cages, floating docks, and aqua tourism solutions with expert support and innovation." />
      {/* <link rel="canonical" href="https://starsupplierss.com/about" />   */}
      <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat"/>

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    {/* 🧱 Main Content */}
    </>
  );
};

export default AboutUsSchema;
