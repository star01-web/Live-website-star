import React from "react";
import { Helmet } from "react-helmet-async";

const ContactPageSchema = () => {
  return (
    <>
    <Helmet>
      {/* SEO Meta */}
      <title>Contact Us | Star Multiventure Pvt. Ltd.</title>
      <meta
        name="description"
        content="Reach out to Star Multiventure Pvt. Ltd. for aquaculture equipment, floating jetties, and fish cage solutions across India. Call, email, or visit us."
      />
      <meta name="robots" content="index, follow" />
      {/* Canonical URL handled by CanonicalHelmet.jsx */}
          <meta name="keywords" content="contact Star Multiventure, aquaculture equipment enquiry, HDPE fish cage quote, floating jetty contact, fish farming consultation, cage culture support" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Star Multiventure",
          "url": "https://starmultiventure.in/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd.",
            "url": "https://starmultiventure.in",
            "logo": "https://starmultiventure.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210", // 🔁 Replace with your real number
              "contactType": "Customer Support",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "A-12, Industrial Estate",
              "addressLocality": "Raipur",
              "addressRegion": "Chhattisgarh",
              "postalCode": "492001",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/starmultiventure",
              "https://www.instagram.com/starmultiventure",
              "https://www.linkedin.com/company/star-multiventure"
            ]
          }
        })}
      </script>
    </Helmet>
    </>
  );
};

export default ContactPageSchema;
