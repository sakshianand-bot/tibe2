export const ROUTES = {
  PUBLIC: {
    HOME: '/',
    HOW_IT_WORKS: '/how-it-works',
    SERVICES: '/services',
    WHY_CHOOSE_US: '/why-choose-us',
    FAQ: '/faq',
    TESTIMONIALS: '/testimonials',
    RESOURCES: '/resources',
    CONTACT: '/contact'
  }
  // Add AUTH and PROTECTED routes when needed
};

export const PUBLIC_ROUTES = Object.values(ROUTES.PUBLIC);
// Export other route groups when added
