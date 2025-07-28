import React, { useEffect } from 'react';
import AboutUsSchema from "./AboutUsSchema"
function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <><AboutUsSchema />
    <div className="mt-2 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 text-justify text-gray-800">
      {/* About Us */}
      <section className="mb-10">
        <h1 className="mt-32 text-3xl sm:text-4xl font-extrabold underline underline-offset-8 text-center text-black mb-6">
          About Us
        </h1>
        <div className="space-y-2 text-lg leading-relaxed">
          <p>
            At <strong className="text-black">Star Multiventure Pvt. Ltd.</strong> we&apos;re more than just a supplier — we&apos;re a partner in your fish farming journey. With a strong focus on fish cage farming, we&apos;re here to help fish farmers grow sustainably and profitably.
          </p>
          <p>
            We combine modern technology with tried-and-tested methods to bring you practical solutions that work in real-world conditions. From high-quality fish feed to reliable farming tools and durable cages, everything we offer is designed to make your work easier and more rewarding.
          </p>
          <p>
            We also help you make the most of <a href='https://pmmsy.dof.gov.in/'>government subsidies</a> from the fisheries department, so that adopting sustainable and efficient practices becomes more affordable and accessible.
          </p>
          <p>
            Whether you&apos;re just starting or scaling up, you can count on Multiventure to provide the right tools, expert support, and quality products you need to succeed in today&apos;s aquaculture industry.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="mb-16">
        <h2 className="mt-0 text-2xl sm:text-3xl font-bold underline underline-offset-8 text-center text-black mb-6">
          Our journey &ndash; From a Modest Start to a Nationwide Presence
        </h2>
        <div className="space-y-2 text-lg leading-relaxed">
          <p>
            Our story began in 2016, with Star Suppliers operating from a small, home&ndash;based setup under a proprietorship model. What started as a humble venture was driven by a clear vision &ndash; to uplift and support India&apos;s aquaculture and fisheries sectors with quality products and dependable service.
          </p>
          <p>
            Through hard work, persistence, and the trust of our customers, we steadily grew. By 2022, we had evolved into <strong>Star Multiventure Pvt. Ltd.</strong>, a corporate entity with operations spanning across India. Today, Star Multiventure proudly functions as a holding company, guiding and managing three dynamic sister concerns, each playing a vital role in strengthening the aquaculture value chain:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Star Suppliers &ndash;</strong> A name trusted by thousands, Star Suppliers delivers high-quality aquaculture equipment, fish farming tools, and fisheries supplies essential for both rural and commercial operations.
            </li>
            <li>
              <strong>Star Fisheries &ndash;</strong> Focused on the lifeblood of aquaculture &ndash; fish seed and live fish sales &ndash; Star Fisheries ensures that farmers get access to healthy, fast-growing stock, contributing directly to sustainable and profitable farming.
            </li>
            <li>
              <strong>Star Feeds &ndash;</strong> Feeding growth, quite literally &ndash; Star Feeds formulates and supplies nutrient-rich fish feed tailored for different stages of fish farming.
            </li>
          </ul>
          <p>
            From a single room to a pan&ndash;India presence, our journey reflects our commitment to quality, innovation, and the empowerment of fish farmers across the country. And we&apos;re just getting started.
          </p>
        </div>
      </section>

      {/* What We Offer */}
<section className="mb-9">
  <h2 className="text-2xl sm:text-3xl font-bold underline underline-offset-8 text-center text-black mb-12">
    What We Offer &ndash; Built for the Water, Backed by Trust
  </h2>

  <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-800">
    <div>
      <p className="mb-2">
        At <strong>Star Multiventure Pvt. Ltd.</strong>, we don't just deliver products &ndash; we provide complete water-based infrastructure solutions designed for today's aquaculture, marine recreation, and waterfront development needs. From inland rivers to coastal shores, our offerings are tailored for fish farmers, tourism entrepreneurs, <a href='https://pmmkssy.dof.gov.in/pmmkssy/#/' target='_blank' className='decoration-none'>government bodies</a>, and waterfront developers across India.
      </p>

      <div className="mb-3">
        <h3 className="font-semibold text-xl mb-2">HDPE Floating Dock Systems Durable. Versatile. Long&ndash;Lasting.</h3>
        <p>Our floating docks and pontoons are made from premium HDPE materials that are UV&ndash;resistant, lightweight, and exceptionally durable. These modular docks are designed to withstand the rigours of marine and freshwater environments &ndash;whether it's a calm pond or a rough sea. We also provide all essential dock accessories, including:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Dock edge floats</li>
          <li>Center pins & locking systems</li>
          <li>HDPE bolts, nuts, and washers</li>
        </ul>
        <p>Our floating platforms are easy to install, expand, and maintain, making them ideal for fish farms, boat landings, tourism setups, or recreational activities.</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-2">HDPE Fish Cages &ndash; Engineered for Results</h3>
        <p><strong>Strong Cages. Healthy Fish. Better Returns</strong>. Our HDPE aquaculture cages are designed to meet the demands of fish farmers across India. We use <strong>Garware Technical Fibres nets</strong>, known for durability, biofouling resistance, and excellent water flow. <strong>Why choose our cages:</strong></p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Compatible with our floating docks</li>
          <li>Custom sizes for Pangasius, Tilapia, IMCs, seabass & more</li>
          <li>Proven success across Chhattisgarh, Maharashtra, Odisha, Gujarat, and coastal states</li>
          <li>Designed for both inland and marine culture</li>
        </ul>
        <p>These cages help improve growth rates, survival, and ease of management in cage farming.</p>
      </div>
      <h3 className="font-semibold text-xl mb-2">Custom Docking Solutions & Made to Fit Your Vision</h3>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Floating dock for a river</li>
          <li>Boat platform</li>
          <li>Portable dock for remote sites</li>
        </ul>
    </div>
    
    <div>
      <div className="mb-2">
        
        <p>Our team designs and supplies cost-effective, tailor-made solutions that are built to last. We also offer heavy-duty float drums and dock barrels, engineered for stability and durability in diverse aquatic environments.</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-2">Circular Mariculture Cages &ndash; For Coastal & Deep-Water Farming Built for the Sea. Trusted by Coastal Farmers.</h3>
        <p>We offer circular HDPE cages in 16m, 18m, and 20m diameters, with depths ranging from 5m to 9m, suited for offshore and tidal waters. Perfect for:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Sea bass, cobia, pompano, and other marine species</li>
          <li>Offshore farms, government projects, and coastal entrepreneurs</li>
          <li>Integration with floating marinas, ramps, and anchoring systems</li>
        </ul>
        <p>These cages are stable, low&ndash;maintenance, and designed to perform in high&ndash;wave and current zones.</p>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-2"><strong>Floating Accessories & Dock Systems for Commercial & Recreational Use</strong></h3>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Jet Dock systems</li>
          <li>Inflatable floating docks & work platforms</li>
          <li>PWC floating docks (Jet Ski/Sea-Doo)</li>
          <li>Double jet ski docks</li>
          <li>Wave Armor SLX6 docks</li>
          <li>Floating ramps and boat lifts</li>
        </ul>
        <p>Whether you're building a personal dock, a fisheries inspection platform, or a marina facility, we offer both economical and premium options, backed by technical support and warranty.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Floating restaurants, cafes & reception lounges</li>
          <li>Walkways & view decks</li>
          <li>Floating huts, eco-lodges, and homestays</li>
          <li>Jetty setups for ferry terminals and rural tourism</li>
          <li>Riverfront experiences integrated with cage farms</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="mb-20">
  <h2 className="text-2xl sm:text-3xl font-bold underline underline-offset-8 text-center text-black mb-12">
    Aqua Tourism &ndash; Creating Experiences on Water
  </h2>
  <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-800">
    <div>
      <p className="mb-2"><strong>Floating Getaways. Eco Experiences. Riverfront Dining</strong>. Star Multiventure brings water to life with floating structures designed for eco-tourism, cultural tourism, and sustainable hospitality. We help design and deploy:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Floating restaurants, cafes & reception lounges</li>
        <li>Walkways & view decks</li>
        <li>Floating huts, eco-lodges, and homestays</li>
        <li>Jetty setups for ferry terminals and rural tourism</li>
        <li>Riverfront experiences integrated with cage farms</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Aqua Sports &ndash; Adventure Meets Innovation</h3>
      <p className="mb-2">Aqua Sports &ndash; Adventure Meets Innovation Recreational Water Platforms for All Ages. We support recreational and adventure tourism by offering floating systems for:</p>
      <ul className="list-disc pl-5">
        <li>Jet ski launching</li>
        <li>Kayaking & paddle boarding platforms</li>
        <li>Floating yoga/meditation decks</li>
        <li>Swimming enclosures and safety docks</li>
        <li>Event platforms and race tracks for water sports</li>
      </ul>
      <p className="mb-6">Perfect for water sport centers, resorts, government tourism parks, and village-level enterprises, our systems are safe, adaptable, and designed for easy handling.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">From Start to Finish &ndash; We&apos;re with You</h3>
      <p className="mb-2">Our work doesn't stop at delivery. We provide full project support:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Site visits and technical assessment</li>
        <li>Design layout and planning</li>
        <li>Material supply and transport</li>
        <li>Maintenance, warranty, and training.</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Why Choose Star Multiventure?</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Decade-long experience in water infrastructure</li>
        <li>NFDB&ndash;approved aquaculture components</li>
        <li>Strong footprint across India&apos;s aquaculture zones</li>
        <li>Focus on sustainability, profitability, and innovation</li>
        <li>Prompt service and custom solutions</li>
      </ul>
      <h4 className="text-xl font-bold mb-2">Let&apos;s build something that floats — and creates value.</h4>
      <p className="mb-6">Whether you&apos;re a fish farmer, resort owner, or tourism developer, <strong>Star Multiventure Pvt. Ltd.</strong> has the expertise and products to help you succeed, above and below the waterline.</p>
    </div>
  </div>
</section>

    </div></>
  );
}

export default AboutUs;
