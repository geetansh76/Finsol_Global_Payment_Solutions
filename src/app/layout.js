// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import Providers from "./providers";

import InitialPaintPreloader from "@/components/InitialPaintPreloader";
import RouteChangeLoader from "@/components/RouteChangeLoader";
import { Suspense } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.finsol.group"),
  title: { default: "Finsol", template: "%s" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/icons/favicon11.png" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) — in <head> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QF3FJN5PER"
          strategy="beforeInteractive"
        />
        <Script id="ga-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-QF3FJN5PER');
          `}
        </Script>
      </head>
      <body className={dmSans.className} suppressHydrationWarning>
        {/* Shows immediately on first paint, before hydration */}
        <InitialPaintPreloader />

        {/* ✅ wrap the component that uses useSearchParams in Suspense */}
        <Suspense fallback={null}>
          <RouteChangeLoader minDuration={500} showOnFirstLoad />
        </Suspense>


        

        {/* Hide image-based preloader if JS is disabled */}
        <noscript>
          <style>{`#preloader{display:none!important}`}</style>
        </noscript>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
