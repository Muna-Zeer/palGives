import createMiddleware from 'next-intl/middleware';

const proxy = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: false,
});

export default proxy;

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};