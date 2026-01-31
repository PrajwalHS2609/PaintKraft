"use client"
import { Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LpPaintNavbar from "../components/LpPaintNavbar/LpPaintNavbar";
import LpPaintFooter from "../components/PaintLandingPage/LpPaintFooter/LpPaintFooter";
import "@/components/styles.css"
import Loader from './../components/Loader/Loader';
import { useEffect, useState } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading for animation effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* ================= GOOGLE ADS BASE TAG (REQUIRED) ================= */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17441114317"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NV4SSRH7');
      `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17441114317');
            `,
          }}
        ></script>

        {/* ========== GOOGLE ADS CONVERSION FUNCTION ========== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function reportConversion() {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17441114317/niVMCNvywc4bEM2RyfxA'
                });
              }
            `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) !== 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
          'send_to': 'AW-17441114317/vVPECIDiwc4bEM2RyfxA',
          'event_callback': callback
        });
        return false;
      }
    `,
          }}
        ></script>

      </head>

      <body className={montserrat.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV4SSRH7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LpPaintNavbar />
        {loading ? <Loader /> : children}
        <LpPaintFooter />
      </body>
    </html>
  );
}
