/**
 * Optimized Slider Utilities
 * Reduces bundle size by importing only necessary slider functionality
 */

// Only import the specific Swiper modules we actually use
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import only the CSS we need
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

/**
 * Lightweight slider configuration for product galleries
 */
export const productSliderConfig = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

/**
 * Minimal slider configuration for hero sections
 */
export const heroSliderConfig = {
  modules: [Autoplay, EffectFade],
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
};

/**
 * Optimized React Slick configuration (for existing components)
 * Only loads when actually needed
 */
export const loadReactSlick = async () => {
  try {
    // Dynamic import to avoid including React Slick in main bundle
      const [Slider] = await Promise.all([
        import('react-slick'),
        import('slick-carousel/slick/slick.css'),
        import('slick-carousel/slick/slick-theme.css')
      ]);
    
      return Slider.default;
  } catch (error) {
    console.warn('Failed to load React Slick:', error);
    return null;
  }
};

/**
 * Lightweight slider settings for testimonials
 */
export const testimonialSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
      }
    }
  ]
};

// Export core components for optimized imports
export { Swiper, SwiperSlide };
