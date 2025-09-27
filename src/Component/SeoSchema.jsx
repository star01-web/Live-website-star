// SeoSchema.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { pages, products, blogs } from "./SeoData.js";

const DEFAULT_TITLE = "Star Suppliers";
const DEFAULT_DESCRIPTION = "Star Suppliers - Leading Aquaculture Solutions Provider in India";

const SeoSchema = () => {
  const location = useLocation();
  const pathname = location?.pathname || "/";
  const allData = [...(pages || []), ...(products || []), ...(blogs || [])];

  const currentPage = allData.find((p) => {
    if (!p) return false;
    if (p.path && p.path === pathname) return true;
    if (p.url) {
      try {
        const u = new URL(p.url);
        if (u.pathname === pathname) return true;
      } catch {
        // ignore invalid URLs
      }
    }
    const slug = pathname.replace(/^\//, "").toLowerCase();
    if (slug && (p.name || p.title)) {
      const hay = (p.name || p.title).toString().toLowerCase();
      if (hay.includes(slug.split("-").join(" ")) || hay.includes(slug)) return true;
    }
    return false;
  });

  const title = currentPage?.title || currentPage?.name || DEFAULT_TITLE;
  const description = currentPage?.description || currentPage?.MetaDescription || currentPage?.MetaDesc || DEFAULT_DESCRIPTION;

  const canonicalUrl = `https://www.starsupplierss.com${pathname}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonicalUrl,
    name: title,
    description,
    publisher: {
      "@type": "Organization",
      name: "Star Suppliers",
      url: "https://www.starsupplierss.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.starsupplierss.com/logo.png",
      },
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SeoSchema;
