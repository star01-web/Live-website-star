// CanonicalHelmet.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const CanonicalHelmet = () => {
  const location = useLocation();
  // ✅ Fixed: Using correct domain consistently
  const canonicalUrl = `https://www.starsupplierss.com${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalHelmet;
