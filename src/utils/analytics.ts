// Simple analytics implementation
class Analytics {
  private events: Array<{
    name: string;
    properties: Record<string, any>;
    timestamp: Date;
  }> = [];

  track(eventName: string, properties: Record<string, any> = {}) {
    const event = {
      name: eventName,
      properties: {
        ...properties,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      },
      timestamp: new Date(),
    };

    this.events.push(event);
    
    // In production, you would send this to your analytics service
    console.log('📊 Analytics Event:', event);
    
    // Store in localStorage for demo purposes
    this.storeLocally(event);
  }

  page(pageName: string, properties: Record<string, any> = {}) {
    this.track('page_view', {
      page: pageName,
      ...properties,
    });
  }

  identify(userId: string, traits: Record<string, any> = {}) {
    this.track('user_identify', {
      userId,
      traits,
    });
  }

  private storeLocally(event: any) {
    try {
      const stored = localStorage.getItem('portfolio_analytics') || '[]';
      const events = JSON.parse(stored);
      events.push(event);
      
      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0, events.length - 100);
      }
      
      localStorage.setItem('portfolio_analytics', JSON.stringify(events));
    } catch (error) {
      console.error('Failed to store analytics event:', error);
    }
  }

  getEvents() {
    try {
      const stored = localStorage.getItem('portfolio_analytics') || '[]';
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to retrieve analytics events:', error);
      return [];
    }
  }

  getPageViews() {
    const events = this.getEvents();
    return events.filter((event: any) => event.name === 'page_view');
  }

  getMostVisitedPages() {
    const pageViews = this.getPageViews();
    const pageCounts: Record<string, number> = {};
    
    pageViews.forEach((event: any) => {
      const page = event.properties.page || 'unknown';
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });
    
    return Object.entries(pageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  }
}

export const analytics = new Analytics();

// Auto-track page views
export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    analytics.track(eventName, properties);
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    analytics.page(pageName, properties);
  };

  return { trackEvent, trackPageView };
};