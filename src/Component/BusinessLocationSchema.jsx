import React from "react";
import { Helmet } from "react-helmet-async";

const BusinessLocationSchema = () => {
  return (
    <>
    <Helmet>
      <title>Contact Us | Star Multiventure Pvt. Ltd.</title>
      <meta name="description" content="Contact Star Multiventure Pvt. Ltd. for aquaculture equipment, floating jetties, and fish cage solutions across India. Call, email, or visit us." />
      <meta name="robots" content="index, follow" />
            {/* Canonical URL handled by CanonicalHelmet.jsx */}
                  <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat"/>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Star Multiventure Pvt. Ltd.",
          "image": "https://starmultiventure.in/logo.png",
          "url": "https://starmultiventure.in",
          "telephone": "+91-9876543210", // ✅ Replace with your actual number
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A-12, Industrial Estate",
            "addressLocality": "Raipur",
            "addressRegion": "Chhattisgarh",
            "postalCode": "492001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.2514,  // ✅ Replace with your actual lat/lng
            "longitude": 81.6296
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/starmultiventure",
            "https://www.instagram.com/starmultiventure",
            "https://www.linkedin.com/company/star-multiventure"
          ]
        })}
      </script>
    </Helmet>
   </>
  );
};

export default BusinessLocationSchema;
