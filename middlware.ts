// import { NextRequest, NextResponse } from 'next/server';
//
// const PUBLIC_FILE = /\.(.*)$/;
//
// export async function middleware(req: NextRequest) {
//   if (
//     req.nextUrl.pathname.startsWith('/_next') ||
//     req.nextUrl.pathname.includes('/api/') ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return;
//   }
//
//   if (req.nextUrl.locale === 'ru') {
//     return NextResponse.redirect(new URL(`?lang=ru${req.nextUrl.pathname}`, req.url));
//   }
//
//   if (req.nextUrl.locale === 'kg') {
//     return NextResponse.redirect(new URL(`?lang=kg${req.nextUrl.pathname}`, req.url));
//   }
//
//   if (req.nextUrl.locale === 'en') {
//     return NextResponse.redirect(new URL(`?lang=en${req.nextUrl.pathname}`, req.url));
//   }
//
//   if (req.nextUrl.locale === 'tr') {
//     return NextResponse.redirect(new URL(`?lang=tr${req.nextUrl.pathname}`, req.url));
//   }
// }
