import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/utils/analytics';

const getPageName = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Ana Sayfa';
    case '/about':
      return 'Hakkımda';
    case '/experience':
      return 'Deneyimler';
    case '/projects':
      return 'Projeler';
    case '/blog':
      return 'Blog';
    case '/contact':
      return 'İletişim';
    default:
      if (pathname.startsWith('/blog/')) {
        return 'Blog Post';
      }
      return 'Bilinmeyen Sayfa';
  }
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = getPageName(location.pathname);
    
    // Track page view
    analytics.page(pageName, {
      path: location.pathname,
      search: location.search,
      hash: location.hash,
    });

    // Track performance metrics
    if ('performance' in window) {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          analytics.track('performance_metrics', {
            page: pageName,
            loadTime: perfData.loadEventEnd - perfData.fetchStart,
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
            firstContentfulPaint: perfData.responseEnd - perfData.fetchStart,
          });
        }
      }, 1000);
    }
  }, [location]);
};