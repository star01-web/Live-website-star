// Non-blocking Analytics Script with requestIdleCallback
(function() {
  'use strict';
  
  // Check if scripts already loaded (prevent duplicate loading)
  if (window.analyticsLoaded) return;
  window.analyticsLoaded = true;
  
  // Use requestIdleCallback to avoid blocking main thread
  function scheduleAnalytics(callback) {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout: 2000 });
    } else {
      setTimeout(callback, 100);
    }
  }
  
  // Defer Google Analytics initialization
  scheduleAnalytics(function() {
    // Google Analytics with cache optimization
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-CPEYB6NRGN', {
      'transport_type': 'beacon',
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=None;Secure'
    });
  });

  // Defer Google Tag Manager loading
  scheduleAnalytics(function() {
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.defer=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      // Add cache optimization
      j.setAttribute('data-cache', '1d');
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K6ZV8D4V');
  });

  // Defer Meta Pixel loading to reduce main thread work
  scheduleAnalytics(function() {
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;
      n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);
      t.defer=!0;
      t.async=!0;
      t.src=v;
      // Add cache optimization
      t.setAttribute('data-cache', '1d');
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    
    // Initialize FB Pixel with error handling (delayed)
    setTimeout(function() {
      try {
        if (window.fbq) {
          fbq('init', '215470194628852');
          fbq('track', 'PageView');
        }
      } catch(e) {
        console.warn('FB Pixel initialization failed:', e);
      }
    }, 1000);
  });
  
})();
