/**
 * Optimized Animation Utilities
 * Selective imports from Framer Motion to reduce bundle size
 */

// Only import the specific Framer Motion features we actually use
import { 
  motion, 
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform
} from 'framer-motion';

/**
 * Common animation variants to avoid duplicating motion objects
 */
export const commonVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeOut" }
  },

  // Scale animations (for cards and hover effects)
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  },

  // Slide animations
  slideInLeft: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  },

  // Stagger animation for lists
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
};

/**
 * Optimized hover animations for cards
 * Uses transform for GPU acceleration
 */
export const cardHoverVariants = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

/**
 * Lightweight intersection observer animation
 * Alternative to useInView for simple fade-ins
 */
export class OptimizedInView {
  constructor(callback, options = {}) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );
  }

  observe(element) {
    this.observer.observe(element);
  }

  disconnect() {
    this.observer.disconnect();
  }
}

/**
 * CSS-based animations for better performance
 * Use these instead of Framer Motion for simple animations
 */
export const cssAnimations = {
  // Add these classes to your CSS
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleIn: 'animate-scale-in',
  
  // Corresponding CSS (add to your stylesheet)
  styles: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    
    .animate-slide-up {
      animation: slideUp 0.4s ease-out forwards;
    }
    
    .animate-scale-in {
      animation: scaleIn 0.3s ease-out forwards;
    }
    
    .animate-delay-100 { animation-delay: 0.1s; }
    .animate-delay-200 { animation-delay: 0.2s; }
    .animate-delay-300 { animation-delay: 0.3s; }
  `
};

/**
 * Reduced motion preferences
 * Respects user's motion preferences for accessibility
 */
export const getReducedMotionVariants = (variants) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.1 }
    };
  }
  
  return variants;
};

// Export only what we need
export { 
  motion, 
  AnimatePresence,
  useAnimation,
  useInView,
  useScroll,
  useTransform 
};
