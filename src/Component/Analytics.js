import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";

const GA_MEASUREMENT_ID = "G-HGRSN08CGK";
const FB_PIXEL_ID = "2557423161095537"; 

// Initialize both trackers
export const initTracking = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactPixel.init(FB_PIXEL_ID);
  ReactPixel.pageView(); // initial load
};

// Track page view on route change
export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
  ReactPixel.pageView(); // Facebook Pixel
};
