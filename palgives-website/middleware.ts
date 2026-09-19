import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Supported locales
  locales: ['en', 'ar'],
  
  // Default fallback language
  defaultLocale: 'en',
  
  // Disable automatic browser language redirection to stop loop triggers
  localeDetection: false 
});

export const config = {
  // Matcher ignoring all static files, api routes, and Next.js internal bundles
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - Any file with an extension (e.g. .svg, .png, .jpg, .css, .js)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
  ]
};