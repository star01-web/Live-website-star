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
      <meta name="keywords" content="aquaculture services India, fish cage installation, floating jetty setup, technical support aquaculture, HDPE cage warranty, 24/7 customer support" />

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
