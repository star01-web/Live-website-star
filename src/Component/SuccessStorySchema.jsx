import React from "react";
import { Helmet } from "react-helmet-async";

const SuccessStorySchema = ({ story }) => {
  if (!story) return null;

  const {
    title,
    description,
    image,
    client,
    date,
    id
  } = story;

  const url = `https://starsupplierss.com/success-stories/${id}`;
  // Use client to generate a safe alt text (prevents unused variable lint error)
  const clientAlt = client ? `Client: ${client}` : 'Client';

  return (
    <>
    <Helmet>
      {/* SEO Meta Tags */}
      <title>{title} | Client Success Story – Star Multiventure</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
  <meta name="author" content={clientAlt} />
      {/* <link rel="canonical" href={url} /> */}
      <meta name="keywords" content="aquaculture success stories India, fish farming case studies, HDPE cage projects, floating jetty installations, client testimonials aquaculture" />


      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://starsupplierss.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Star Multiventure" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://starsupplierss.com${image}`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "image": `https://starsupplierss.com${image}`,
          "author": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd."
          },
          "publisher": {
            "@type": "Organization",
            "name": "Star Multiventure Pvt. Ltd.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://starsupplierss.com/logo.png"
            }
          },
          "datePublished": date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          }
        })}
      </script>
    </Helmet>
    </>
  );
};

export default SuccessStorySchema;
