import React from "react";
import { Helmet } from "react-helmet-async";

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const BlogSchema = ({ blog }) => {
  if (!blog) return null;

  const {
    title = "Blog Post",
    description = "",
    image = "/default.jpg",
    writer = "Star Multiventure",
    date = new Date().toISOString(),
    slug 
  } = blog;

  const finalSlug = slug || generateSlug(title);
  const blogUrl = `https://starsupplierss.com/blog/${finalSlug}`;

  return (
    <>
    <Helmet>
      {/* Meta Tags */}
      <title>{title} | Star Multiventure Blog</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="fish cage, fish feed, fish farming equipment, fish cage net, fish feed price, aerator for fish farming, floating fish feed, aquaculture tank for sale, buy tilapia, buy tilapia fish, aquaculture water pump, fishery aerator, buy tilapia fish online, aerator for fish pond price, buy tilapia online, online aquaculture courses, fish farming net price, net for fish farming, aquaculture equipment suppliers, fish cages for sale, fish breeding net, fish farm tank, fish watch, fish products, aquaculture supplies Australia, fish farm feed, aquaculture technology companies, fish pond plastic tank, candock cubes, buy pontoon boat, ramp dock, pond floats, boating toys, boat boxes, amazon boats, catamaran floating dock, boat fenders on sale, floating inflatable, floating pool boat, lake boat toys, engine boat price, dock supplies near me, drive on floating dock, boat dock supplies, modular dock systems, dock manufacturers, cheapest way to build a floating dock, boat dock supplies near me, floating boat lift systems, candock price, floating pontoon jetty, buy a dock, floating dock companies near me, floating pontoon cubes, commercial floating dock systems, floating pontoon price, best dock systems, floating jetty manufacturers in India, floating swimming platform, floating boat dock prices, boat items, floating dock river, dock flotation near me, boat and dock supplies, modular pontoon system, plastic floating boat, boat ramp lift, dock & marine construction, dock and marine, submersible pump floating pontoon, marina boats near me, boat to boat,fish farming, fish farming fish farming, fish farming agriculture, fish farming industry, farming fishing, fish as food, food of fish, aqua culture, fish farming business, fisheries prices, fish feed, fishing feed, fish fisheries, fisheries department, fishing the fish, fish farms near me, fish farming at home, fish farming near me, aqua farming at home, fish india, fish culture, fish business, culture fishery, pond fisheries, pradhan mantri matsya sampada yojana, over fishing, fish production, fish seed, composite fish culture, tilapia fish farming, fishing farming in india, fish farming in india, pmmsy scheme, tilapia fish price, fish farming in pond, fish pond agriculture, fishing in india, pangasius fish farming, dept of fisheries, fish factories, aquaculture system, fish palan, fish project, our fish, fishing project, cage culture, fish feed price, fisheries company, matsya sampada yojana, tilapia fishery, fish come, fish farming project, fishing industry, fish products, cage culture fish farming, fish cultivation, fishery production, fish harvesting, fisheries industry, fish seed near me, fishery technology, fishing harvest, making fishery, aquaculture farming, aquaculture fish farming, fish processing, fish farming and aquaculture, farming aquaculture, fish farming in odisha, world fisheries, floating fish feed, world fishing, fishermen fishing, aquaculture and fisheries, fish aquaculture, fish agriculture, fishing agriculture, aquaculture & fisheries, food for fish in pond, ministry of fisheries, fish growth, singh fish, ministry of fishing, fish feed near me, fish farming photos, fish food farming, fishery tools, government fisheries, fish feed making process, united states fishing, fishing in the united states, feeding rate, fisheries tools, fish cage, cage fish farming, tilapia farming, aquaculture in india, fresh water aquaculture, aquaculture industry in india, fisheries industry in india, india fishing industry, fisheries sector in india, fish seed suppliers, fish seed supplier, aquatic feed, job aquaculture, fishing category, aquatic feeds, sampada yojana, sustainable aquaculture, aquatic farming, composite fish farming, fishery pond, aquaculture and sustainability, fishery scheme, fish and fisheries, tilapia fish food, tilapia fish in india, fisheries management, cage fish culture, fish cage culture, floating fish farms, pond culture, marketing of fish in india, fishing and sustainability, fisheries problems, fishing problems, fish in the pond, fish feed suppliers, fish feed manufacturer, fish feed company in india, fish farming equipment, fish farming courses, fish palan business, aquatic agriculture, fish farming subsidy, fish feed for fish farming, feed for fish farming, fish seed suppliers near me, agriculture fisheries, fish system, fish trade, indian tilapia fish, fish processing plants, fishing trade, cage farming, fish production in world, pond aquaculture, pmmsy yojana, fish seed price, fisheries department contact number, pradhan mantri sampada yojana, fishing revolution, cage culture in aquaculture, fish cultivation process, process of fish farming, fish farming management, fish farming in the us, aquaculture production, odisha fish farming, fisheries scheme in odisha, tilapia fish farming in india, tilapia farming in india, aquaculture world, aqua culture products, fish feed food, making fish feed, tilapia fish feed, fish feed company, tilapia price in india, aquaculture cage, project on aquaculture, fish farming setup, fish farming hyderabad, fish farming in chhattisgarh, aquaculture benefits, fish farming name, pond farming, fisheries of india, aquaculture company in india, fish feed price in india, fish 20, aquatic food, fish landing, sustainable fish, fish feed production, about fish farming, aquaculture feed, fish farming business in india, difference between fisheries and aquaculture, farming with fish, fish farming cost, fishery sector, pond culture fish farming, fish feed aquaculture, fishery development, cage fishing, aquaculture farms near me, tilapia aquaculture, pmmsy fisheries scheme, tilapia culture, food processing fish, pangasius fish feed, feeding tilapia, fish cage farming, aquaculture industry, cage system fish farming, aquaculture business, fish husbandry, about fish production, fish cage net, fish farming for beginners, fisheries production in india, fish seed for farming, pond making for fish farming, agriculture and fisheries, fish processing units, marketing fish, fishery problems, fishing cage net, tilapia fish farming at home, tilapia home farming, tilapia fish seed near me, aqua feed company, aquaculture fish feeder, tilapia fish seed price, number of fish, fish feed business, pond fish management, job in fisheries department, tilapia fish indian name, aquaculture equipment, aquaculture technology, aquaculture company, cage culture fish farming cost, floating cage culture, benefits of fish farming, fish farming net, fish production process, fish farming investment, problems with aquaculture, equipment in aquaculture, aquaculture tech, fish farming govt subsidy, aquaculture photos, fishery tools and equipment, fish farming pond size, aquaculture technologist, fish trading business, fish farming nets, fish food business, fish feed names, pangasius fish in india, fish control, indian pangasius fish, sustainable fish farming, fish farming technology, fish farming company, fish farming process step by step, fish farming company in india, floating cages, problems of fish farming, fresh water fish farming, aquaculture management, fish farming new technology, aquaculture production in india, water quality aquaculture, aquaculture fish and fisheries, fish farming courses in india, sustainable fisheries management, fishing sector, pmmsy subsidy, manage fish, pradhan mantri matsya sampada yojana scheme, fish processing product, aquaculture logo, tilapia fish farms near me, aquaculture products in india, machli feed price, job vacancies in fisheries department, sizes of fish, floating cage fish farming, cage culture fish farming in maharashtra, fishing and aquaculture, aquaculture farming in india, fish farming project cost, agriculture aquaculture, project on fisheries, agriculture and aquaculture, new fish farming technology, fish farming scheme, fish pond for fish farming, fish farming job, tilapia farms near me, fish feed for fishing, fish fodder, job fisheries, tilapia growth rate, trade fish, solutions to over fishing, requirements for fish farming, aquaculture netting, fish cage price, fish cage net price, aquaculture fish production, fish culture system, fish farming with agriculture, about fish farming business, culture system in aquaculture, fish farming products, aquaculture process, fish farming system, aquaculture projects for students, fish farming net price, water quality for fish farming, water quality requirements for aquaculture, fish farming yojana, aquaculture plants, aquaculture net, fisheries scheme in india, fish seed food, fish seed price in odisha, feed to fish, fish feed materials, fisheries problems and solutions, fish food in pond, pond development, tilapia pond, pangasius fish seed near me, fish feed at home, fisheries supply chain, fishing problems and solutions, fish feed rate, fish food making process, fish environment, fish feed cost, fish and fishery products, fish farming food price, tilapia seed price, fish suppliers in india, fish feed in india, floating fish feed price, tilapia sales, floating fish cage, cage fish farming cost, fishing sustainability, fish for fish farming, all about fish farming, basics of fish farming, fish production and management, fish farming project cost in india, aquaculture sector, fish farming price, development of aquaculture, fish pond cultivation, management of fish culture, pond farming aquaculture, new technology in aquaculture, application for fish farming, pond system fish farming, aquaculture production systems, fish processing in india, fisheries production in world, fish seed production technology, aquaculture at home, fish farming fish food, fish welfare, fish focus, post harvest technology in fisheries, fisheries management courses, fish products in india, fish manufacturing process, fish farming feed cost, fish processing business, fisheries post, women in fisheries, value fish, tilapia growth, fish feed size, fish feed processing, fish farming feed price, responsible fishing, floating fish feed price in india, agriculture and fisheries department, department of fisheries and agriculture, fish feed floating, pangasius fish food, tilapia fish feed price, cage india, aquaculture supplies, aquaculture equipment suppliers, fish farming courses near me, fish farming supplies, aquaculture fish cage, fish farming cage price, net cage fish farming, cage aquaculture in india, fish cage manufacturers in india, cage culture system, new technology in fish farming, net for fish farming, floating cages aquaculture, aquaculture in agriculture, production fish, aquaculture business in india, a fish farm, cons of fish farming, tilapia farming for beginners, cage pond, aquaculture materials, fish production system, fish culture management, 5 problems of aquaculture, fish farming materials, negatives of fish farming, cages for fish, aquaculture services, aquaculture food, aquaculture problems and solutions, hdpe cages, positives of fish farming, management of fish production, responsible aquaculture, ethical fish farming, technology used in aquaculture, growth of aquaculture, tools used in fish farming, aquaculture future, latest fish farming technology in india, materials needed for fish farming, aquaculture in us, fish farming business model, aquaculture value chain, tilapia fish cage farming, equipment used in aquaculture, hdpe fish cage, aquaculture experts, fish farming tools, equipment used in fish farming, fish farming tools and equipment, tilapia cage, aquaculture growth rate, aquaculture and the environment, aquaculture tools, equipment needed for fish farming, aquaculture tools and equipment, eco aquaculture, aquaculture production in world, aquaculture industry growth, fish business management, aquaculture and fisheries management, fish pond aquaculture, aquaculture pond system, tilapia cage culture, fisheries management in india, environmental benefits of aquaculture, career opportunities in fisheries and aquaculture, the aqua culture, pond system aquaculture, fishing industry in world, tilapia fish production, world fisheries and aquaculture, ministry of fisheries and aquaculture development, ethical fish, top aquaculture companies, fish supply chain in india, aquaculture standards, post harvest handling of fish, fisheries business management, fish marketing project, tilapia fish farming cost, post harvest technology of fish
" />

      {/* Canonical URL (now with slug) */}
      {/* <link rel="canonical" href={blogUrl} /> */}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:image" content={`https://starsupplierss.com${image}`} />
      <meta property="og:url" content={blogUrl} />
      <meta property="og:type" content="article" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description,
            "image": `https://starsupplierss.com${image}`,
            "author": {
              "@type": "Person",
              "name": writer,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Star Multiventure Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://starsupplierss.com/logo.png",
              },
            },
            "datePublished": date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": blogUrl, 
            },
          }),
        }}
      ></script>
    </Helmet>
    
    </>
  );
};

export default BlogSchema;
