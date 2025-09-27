// SeoData: plain data module — no React imports required

const pages = [
  { name: "Home", url: "https://www.starsupplierss.com/",
    title: "Star Suppliers - Leading Aquaculture Solutions Provider in India" ,
    MetaDescription: "Star Suppliers is a premier aquaculture solutions provider in India, specializing in HDPE pontoons, floating jetties, fish cages, and more. Explore our innovative products and services to enhance your aquaculture projects."
  },
  { name: "About Us", url: "https://www.starsupplierss.com/about-us",
    title: "About Star Suppliers - Pioneers in Aquaculture Solutions",
    MetaDescription: "Learn about Star Suppliers, a leading aquaculture solutions provider in India. Discover our mission, vision, and the innovative products and services we offer to support sustainable aquaculture practices."
   },
  { name: "Contact", url: "https://www.starsupplierss.com/contact",
    title: "Contact Star Suppliers - Your Aquaculture Solutions Partner",
    MetaDescription: "Get in touch with Star Suppliers, a top aquaculture solutions provider in India. Contact us for inquiries about our HDPE pontoons, floating jetties, fish cages, and other innovative aquaculture products and services."
   },
  { name: "Products", url: "https://www.starsupplierss.com/products",
    title: "Aquaculture Products - HDPE Pontoons, Floating Jetties & More | Star Suppliers",
    MetaDescription: "Explore Star Suppliers' range of aquaculture products, including HDPE pontoons, floating jetties, fish cages, and more. Discover innovative solutions to enhance your aquaculture projects in India."
   },
  { name: "Projects", url: "https://www.starsupplierss.com/projects",
    title: "Aquaculture Projects - Innovative Solutions by Star Suppliers",
    MetaDescription: "Discover Star Suppliers' aquaculture projects showcasing our innovative solutions, including HDPE pontoons, floating jetties, and fish cages. Learn how we support sustainable aquaculture practices in India."
   },
  { name: "Blogs", url: "https://www.starsupplierss.com/blogs",
    title: "Aquaculture Blogs - Insights & Tips by Star Suppliers",
    MetaDescription: "Read Star Suppliers' aquaculture blogs for insights, tips, and industry trends. Stay informed about HDPE pontoons, floating jetties, fish cages, and more to enhance your aquaculture knowledge."
   },
  { name: "Services", url: "https://www.starsupplierss.com/services",
    title: "Aquaculture Services - Expert Solutions by Star Suppliers",
    MetaDescription: "Explore Star Suppliers' aquaculture services, offering expert solutions for HDPE pontoons, floating jetties, fish cages, and more. Partner with us for innovative aquaculture support in India."
   },
  { name: "Gallery", url: "https://www.starsupplierss.com/gallery",
    title: "Aquaculture Gallery - Projects & Products by Star Suppliers",
    MetaDescription: "View Star Suppliers' aquaculture gallery showcasing our projects and products, including HDPE pontoons, floating jetties, and fish cages. See how we contribute to sustainable aquaculture in India."
   },
  { name: "Success Stories", url: "https://www.starsupplierss.com/success-story",
    title: "Aquaculture Success Stories - Star Suppliers' Impact",
    MetaDescription: "Read Star Suppliers' aquaculture success stories highlighting our impact through innovative solutions like HDPE pontoons, floating jetties, and fish cages. Learn how we support sustainable aquaculture in India."
   }
];

// Products (add all your products here)
const products = [
  {
    name: "HDPE Pontoon Rectangle Cage 6x4x4",
    url: "https://www.starsupplierss.com/products/hdpe-pontoon-rectangle-cage-6x4x4",
    description: "High-quality HDPE cage for aquaculture projects.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Pontoon Rectangle Cage 7.5x4x4",
    url: "https://www.starsupplierss.com/products/hdpe-pontoon-rectangle-cage-7.5x4x4",
    title: "HDPE Pontoon Rectangle Cage 7.5x4x4 - Star Suppliers",
    MetaDescription: "Discover the HDPE Pontoon Rectangle Cage 7.5x4x4 from Star Suppliers, a leading aquaculture solutions provider in India. This durable and efficient cage is perfect for fish farming projects. Order now!",
    description: "Durable HDPE cage for efficient fish farming.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Pontoon Rectangle Cage 20x20x45",
    url: "https://www.starsupplierss.com/products/hdpe-pontoon-rectangle-cage-20x20x45",
      title: "HDPE Pontoon Rectangle Cage 20x20x45 - Star Suppliers",
    MetaDescription: "Explore the HDPE Pontoon Rectangle Cage 20x20x45 from Star Suppliers, a top aquaculture solutions provider in India. This large cage is ideal for commercial fish farming. Get yours today!",
    description: "Large HDPE cage suitable for commercial aquaculture.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Floating Jetty",
    url: "https://www.starsupplierss.com/products/hdpe-floating-jetty",
    title: "HDPE Floating Jetty - Star Suppliers",
    MetaDescription: "Check out the HDPE Floating Jetty from Star Suppliers, a premier aquaculture solutions provider in India. This sturdy jetty is perfect for aquaculture farms and recreational use. Buy now!",
    description: "Sturdy floating jetty for aquaculture farms.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "Floating Restaurant",
    url: "https://www.starsupplierss.com/products/floating-restaurant",
    title: "Floating Restaurant - Star Suppliers",
    MetaDescription: "Discover the Floating Restaurant from Star Suppliers, a leading aquaculture solutions provider in India. This innovative solution is perfect for lakes and reservoirs. Contact us for more details!",
    description: "Floating restaurant solution for lakes and reservoirs.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "Dewatering System",
    url: "https://www.starsupplierss.com/products/dewatering-system",
    title: "Dewatering System - Star Suppliers",
    MetaDescription: "Explore the Dewatering System from Star Suppliers, a top aquaculture solutions provider in India. This efficient system is ideal for aquaculture projects. Learn more and get a quote today!",
    description: "Efficient dewatering system for aquaculture projects.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Double Floating Pontoon",
    url: "https://www.starsupplierss.com/products/hdpe-double-floating-pontoon",
    title: "HDPE Double Floating Pontoon - Star Suppliers",
    MetaDescription: "Check out the HDPE Double Floating Pontoon from Star Suppliers, a premier aquaculture solutions provider in India. This stable pontoon is perfect for floating platforms. Order now!",
    description: "Double pontoon for stable floating platforms.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "Hexagonal Single Pontoon",
    url: "https://www.starsupplierss.com/products/hexagonal-single-pontoon",
    title: "Hexagonal Single Pontoon - Star Suppliers",
    MetaDescription: "Discover the Hexagonal Single Pontoon from Star Suppliers, a leading aquaculture solutions provider in India. This versatile pontoon is ideal for various floating structures. Buy now!",
    description: "Hexagonal pontoon for flexible floating structures.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Anti Skid Single Pontoon",
    url: "https://www.starsupplierss.com/products/hdpe-anti-skid-single-pontoon",
    title: "HDPE Anti Skid Single Pontoon - Star Suppliers",
    MetaDescription: "Explore the HDPE Anti Skid Single Pontoon from Star Suppliers, a top aquaculture solutions provider in India. This pontoon features an anti-skid surface for safety. Get yours today!",
    description: "Anti-skid pontoon for safety.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Top Cover Single Pontoon",
    url: "https://www.starsupplierss.com/products/hdpe-top-cover-single-pontoon",
    title: "HDPE Top Cover Single Pontoon - Star Suppliers",
    MetaDescription: "Check out the HDPE Top Cover Single Pontoon from Star Suppliers, a premier aquaculture solutions provider in India. This pontoon includes a top cover for added protection. Order now!",
    description: "Top cover pontoon for protection.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "Nursery Net 6x4x4",
    url: "https://www.starsupplierss.com/products/nursery-net-6x4x4",
    title: "Nursery Net 6x4x4 - Star Suppliers",
    MetaDescription: "Discover the Nursery Net 6x4x4 from Star Suppliers, a leading aquaculture solutions provider in India. This net is perfect for young fish in aquaculture projects. Buy now!",
    description: "Nursery net for young fish.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "Nursery Net 7.5x4x4",
    url: "https://www.starsupplierss.com/products/nursery-net-7.5x4x4",
    title: "Nursery Net 7.5x4x4 - Star Suppliers",
    MetaDescription: "Explore the Nursery Net 7.5x4x4 from Star Suppliers, a top aquaculture solutions provider in India. This larger net is ideal for growing fish. Get yours today!",
    description: "Larger nursery net for aquaculture.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Grow Out Net 6x4x4",
    url: "https://www.starsupplierss.com/products/hdpe-grow-out-net-6x4x4",
    title: "HDPE Grow Out Net 6x4x4 - Star Suppliers",
    MetaDescription: "Check out the HDPE Grow Out Net 6x4x4 from Star Suppliers, a premier aquaculture solutions provider in India. This net is perfect for fish growth in aquaculture projects. Order now!",
    description: "Grow-out net for fish growth.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Grow Out Net 7.5x4x4",
    url: "https://www.starsupplierss.com/products/hdpe-grow-out-net-7.5x4x4",
    title: "HDPE Grow Out Net 7.5x4x4 - Star Suppliers",
    MetaDescription: "Discover the HDPE Grow Out Net 7.5x4x4 from Star Suppliers, a leading aquaculture solutions provider in India. This larger net is ideal for fish growth. Buy now!",
    description: "Larger grow-out net.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Grow Out Net 20x20x45",
    url: "https://www.starsupplierss.com/products/hdpe-grow-out-net-20x20x45",
    title: "HDPE Grow Out Net 20x20x45 - Star Suppliers",
    MetaDescription: "Explore the HDPE Grow Out Net 20x20x45 from Star Suppliers, a top aquaculture solutions provider in India. This large net is perfect for commercial fish growth. Get yours today!",
    description: "Commercial size grow-out net.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Bird Net 6x4x4",
    url: "https://www.starsupplierss.com/products/hdpe-bird-net-6x4x4",
    title: "HDPE Bird Net 6x4x4 - Star Suppliers",
    MetaDescription: "Check out the HDPE Bird Net 6x4x4 from Star Suppliers, a premier aquaculture solutions provider in India. This bird net is essential for protecting fish cages. Order now!",
    description: "Bird protection net for cages.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Bird Net 7.5x4x4",
    url: "https://www.starsupplierss.com/products/hdpe-bird-net-7.5x4x4",
    title: "HDPE Bird Net 7.5x4x4 - Star Suppliers",
    MetaDescription: "Discover the HDPE Bird Net 7.5x4x4 from Star Suppliers, a leading aquaculture solutions provider in India. This larger bird net is perfect for protecting fish cages. Buy now!",
    description: "Larger bird net for aquaculture.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Bird Net 20x20x5",
    url: "https://www.starsupplierss.com/products/hdpe-bird-net-20x20x5",
    title: "HDPE Bird Net 20x20x5 - Star Suppliers",
    MetaDescription: "Explore the HDPE Bird Net 20x20x5 from Star Suppliers, a top aquaculture solutions provider in India. This commercial bird net is ideal for large cages. Get yours today!",
    description: "Commercial bird net for large cages.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Nut and Bolt",
    url: "https://www.starsupplierss.com/products/hdpe-nut-and-bolt",
    title: "HDPE Nut and Bolt - Star Suppliers",
    MetaDescription: "Check out the HDPE Nut and Bolt from Star Suppliers, a premier aquaculture solutions provider in India. These accessories are essential for cage assembly. Order now!",
    description: "HDPE nut and bolt accessories.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Center Pin",
    url: "https://www.starsupplierss.com/products/hdpe-center-pin",
    title: "HDPE Center Pin - Star Suppliers",
    MetaDescription: "Discover the HDPE Center Pin from Star Suppliers, a leading aquaculture solutions provider in India. This pin is perfect for cage assembly. Buy now!",
    description: "HDPE center pin for cage assembly.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "HDPE Railings",
    url: "https://www.starsupplierss.com/products/hdpe-railings",
    title: "HDPE Railings - Star Suppliers",
    MetaDescription: "Explore the HDPE Railings from Star Suppliers, a top aquaculture solutions provider in India. These railings are ideal for floating platforms. Get yours today!",
    description: "HDPE railings for floating platforms.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  },
  {
    name: "Stainless Steel Railings",
    url: "https://www.starsupplierss.com/products/stainless-steel-railings",
    title: "Stainless Steel Railings - Star Suppliers",
    MetaDescription: "Check out the Stainless Steel Railings from Star Suppliers, a premier aquaculture solutions provider in India. These durable railings are perfect for floating platforms. Order now!",
    description: "Durable stainless steel railings.",
    price: "₹15,000",
    sku: "HDPE-CAGE-644"
  }
];


// Blogs (add all your blogs here)
const blogs = [
  { name: "What is Cage Culture in Aquaculture?",
    title: "What is Cage Culture in Aquaculture? - Star Suppliers",
    MetaDescription: "Learn about cage culture in aquaculture with Star Suppliers, a leading aquaculture solutions provider in India. Discover the benefits and applications of cage culture for fish farming.",
     url: "https://www.starsupplierss.com/blogs/what-is-cage-culture-in-aquaculture-complete-beginners-guide",
      description: "Complete beginner's guide to cage culture." 
    },
  { name: "Top 10 Benefits of Floating Jetties in India", 
    url: "https://www.starsupplierss.com/blogs/top-10-benefits-of-floating-jetties-in-india",
    title: "Top 10 Benefits of Floating Jetties in India - Star Suppliers",
    MetaDescription: "Discover the top 10 benefits of floating jetties in India with Star Suppliers, a premier aquaculture solutions provider. Learn how floating jetties can enhance your aquaculture projects.",
    description: "Advantages of floating jetties." 
  },
  { name: "Importance of HDPE Pontoons in Aqua Projects", 
    url: "https://www.starsupplierss.com/blogs/importance-of-hdpe-pontoons-in-aqua-projects", 
    title: "Importance of HDPE Pontoons in Aqua Projects - Star Suppliers",
    MetaDescription: "Explore the importance of HDPE pontoons in aqua projects with Star Suppliers, a leading aquaculture solutions provider in India. Understand why HDPE pontoons are essential for successful aquaculture.",
    description: "Why HDPE pontoons are essential." 
  },
  { name: "How to Start Fish Farming in Chhattisgarh",
     url: "https://www.starsupplierss.com/blogs/how-to-start-fish-farming-in-chhattisgarh",
      title: "How to Start Fish Farming in Chhattisgarh - Star Suppliers",
      MetaDescription: "Learn how to start fish farming in Chhattisgarh with Star Suppliers, a top aquaculture solutions provider in India. Get step-by-step guidance to launch your fish farming business successfully.",  
     description: "Step by step guide to fish farming." },
  { name: "Best Fish Feed Options for Fast Growth", 
    url: "https://www.starsupplierss.com/blogs/best-fish-feed-options-for-fast-growth",
    title: "Best Fish Feed Options for Fast Growth - Star Suppliers",
    MetaDescription: "Discover the best fish feed options for fast growth with Star Suppliers, a leading aquaculture solutions provider in India. Learn about nutritious and effective fish feed choices to boost your aquaculture success.", 
    description: "Tips for fast fish growth." 
  },
  { name: "How Floating Cages Are Changing Aquaculture in India",
     url: "https://www.starsupplierss.com/blogs/how-floating-cages-are-changing-aquaculture-in-india",
      title: "How Floating Cages Are Changing Aquaculture in India - Star Suppliers",
      MetaDescription: "Explore how floating cages are revolutionizing aquaculture in India with Star Suppliers, a premier aquaculture solutions provider. Learn about the benefits and applications of floating cages in modern fish farming.",
     description: "Floating cages and their impact." },
  { name: "Fish Farming Business Plan Complete Guide", 
    url: "https://www.starsupplierss.com/blogs/fish-farming-business-plan-complete-guide", 
    title: "Fish Farming Business Plan Complete Guide - Star Suppliers",
    MetaDescription: "Get a complete guide to creating a fish farming business plan with Star Suppliers, a top aquaculture solutions provider in India. Learn how to plan and launch a successful fish farming venture.",
    description: "Business plan for fish farming." },
  { name: "Benefits of Aquaculture for Rural Development",
     url: "https://www.starsupplierss.com/blogs/benefits-of-aquaculture-for-rural-development", 
     title: "Benefits of Aquaculture for Rural Development - Star Suppliers",
     MetaDescription: "Discover the benefits of aquaculture for rural development with Star Suppliers, a leading aquaculture solutions provider in India. Learn how aquaculture can boost rural economies and livelihoods.",
     description: "How aquaculture helps rural economy." },
  { name: "Aquaculture vs Traditional Fishing",
     url: "https://www.starsupplierss.com/blogs/aquaculture-vs-traditional-fishing",
      title: "Aquaculture vs Traditional Fishing - Star Suppliers",
      MetaDescription: "Compare aquaculture and traditional fishing methods with Star Suppliers, a premier aquaculture solutions provider in India. Understand the advantages and challenges of both approaches in fish production.",
     description: "Comparison of aquaculture and traditional fishing." },
  { name: "Why Choose HDPE Pontoons for Fish Farming", 
    url: "https://www.starsupplierss.com/blogs/why-choose-hdpe-pontoons-for-fish-farming",
    title: "Why Choose HDPE Pontoons for Fish Farming - Star Suppliers",
    MetaDescription: "Learn why HDPE pontoons are the preferred choice for fish farming with Star Suppliers, a leading aquaculture solutions provider in India. Discover the benefits and features of HDPE pontoons for successful aquaculture projects.",
    description: "Benefits of HDPE pontoons." },
  { name: "Role of Floating Jetties in Tourism", 
    url: "https://www.starsupplierss.com/blogs/role-of-floating-jetties-in-tourism", 
    title: "Role of Floating Jetties in Tourism - Star Suppliers",
    MetaDescription: "Explore the role of floating jetties in tourism with Star Suppliers, a top aquaculture solutions provider in India. Learn how floating jetties enhance waterfront experiences and support tourism development.",
    description: "Floating jetties and tourism development." },
  { name: "How to Get Government Subsidy for Fish Farming",
     url: "https://www.starsupplierss.com/blogs/how-to-get-government-subsidy-for-fish-farming",
      title: "How to Get Government Subsidy for Fish Farming - Star Suppliers",
      MetaDescription: "Find out how to get government subsidy for fish farming with Star Suppliers, a premier aquaculture solutions provider in India. Learn about eligibility criteria and application processes to benefit from subsidies.",
     description: "Guide to government subsidies." },
  { name: "Top 5 Aquaculture Business Ideas", 
    url: "https://www.starsupplierss.com/blogs/top-5-aquaculture-business-ideas", 
    title: "Top 5 Aquaculture Business Ideas - Star Suppliers",
    MetaDescription: "Discover the top 5 aquaculture business ideas with Star Suppliers, a leading aquaculture solutions provider in India. Explore profitable ventures in fish farming and related industries to kickstart your aquaculture business.",    description: "Profitable aquaculture business ideas." },
  { name: "How to Choose Right Fish Feed for Your Farm", 
    url: "https://www.starsupplierss.com/blogs/how-to-choose-right-fish-feed-for-your-farm",
    title: "How to Choose Right Fish Feed for Your Farm - Star Suppliers",
    MetaDescription: "Learn how to choose the right fish feed for your farm with Star Suppliers, a top aquaculture solutions provider in India. Get tips on selecting nutritious and cost-effective fish feed options to enhance your aquaculture success.",
    description: "Tips for selecting fish feed." },
  { name: "Importance of Water Quality in Aquaculture",
     url: "https://www.starsupplierss.com/blogs/importance-of-water-quality-in-aquaculture", 
      title: "Importance of Water Quality in Aquaculture - Star Suppliers",
      MetaDescription: "Understand the importance of water quality in aquaculture with Star Suppliers, a premier aquaculture solutions provider in India. Learn how to maintain optimal water conditions for healthy fish growth and successful aquaculture projects.",
     description: "Maintain water quality for healthy fish." },
  { name: "How to Maintain Fish Cages in Rivers", 
    url: "https://www.starsupplierss.com/blogs/how-to-maintain-fish-cages-in-rivers", 
    title: "How to Maintain Fish Cages in Rivers - Star Suppliers",
    MetaDescription: "Get tips on how to maintain fish cages in rivers with Star Suppliers, a leading aquaculture solutions provider in India. Learn best practices for cage maintenance to ensure healthy fish and successful aquaculture operations.",
    description: "Tips for cage maintenance." },
  { name: "Aquaculture and Sustainability in India",
     url: "https://www.starsupplierss.com/blogs/aquaculture-and-sustainability-in-india", 
      title: "Aquaculture and Sustainability in India - Star Suppliers",
      MetaDescription: "Explore the relationship between aquaculture and sustainability in India with Star Suppliers, a top aquaculture solutions provider. Learn how sustainable practices can enhance aquaculture productivity and environmental health.",
     description: "Sustainable aquaculture practices." }
];


export  {pages, products, blogs};
