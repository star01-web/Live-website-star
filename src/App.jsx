import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './Component/Navbar';
import Loader from './Loader';
import SideContactBar from './Component/SideButton';
import Footer from './Component/Footer';
import { initTracking, trackPageView } from "./Component/Analytics";
import FloatingButtons from './Component/FloatingButtons';
import CanonicalHelmet from './CanonicalHelmet';
import SeoSchema from './Component/SeoSchema';
// Lazy imports
const BlogData = lazy(() => import('./Component/blogSection'));
const Home = lazy(() => import('./Component/Home'));
const AboutUs = lazy(() => import('./Component/AboutUs'));
const Services = lazy(() => import('./Component/Services'));
const Products = lazy(() => import('./Component/Products'));
const ContactUs = lazy(() => import('./Component/ContactUs'));
const Blog = lazy(() => import('./Component/Blog'));
const Gallery = lazy(() => import('./Component/Gallery'));
const ThankYouPage = lazy(() => import('./Component/ThankYouPage'));
const NotFound = lazy(() => import('./Component/ProductPage/NotFound'));
const BlogView = lazy(() => import('./Component/BlogVeiw'));
// const OurBrochure = lazy(() => import('./Component/OurBrochure'));
const OurProject = lazy(() => import('./Component/OurProject'));
const CompanyFlowChart = lazy(() => import('./Component/CompanyFlowChart'));
const SuccessStory = lazy(() => import('./Component/SuccessStorys'));
const ProductDetailsTable = lazy(() => import('./Component/ProductPage/ProductDetailsTable'));

// Route tracker component for GA4 & FB Pixel
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    initTracking(); 
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <SeoSchema/>
      <RouteTracker /> 
      <CanonicalHelmet/>
      <Navbar />
      <SideContactBar className="pt-20" />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogView />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/our-projects" element={<OurProject />} />
          {/* <Route path="/brochure" element={<OurBrochure />} /> */}
          <Route path="/flow-chart" element={<CompanyFlowChart />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/products/:slug" element={<ProductDetailsTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingButtons />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
