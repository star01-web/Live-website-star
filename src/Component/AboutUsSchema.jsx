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
      <meta name="keywords" content="Star Multiventure, aquaculture company India, HDPE fish cages, floating jetty manufacturers, aqua tourism solutions, fish farming equipment, cage culture technology, floating docks India" />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    {/* 🧱 Main Content */}
    </>
  );
};

export default AboutUsSchema;
