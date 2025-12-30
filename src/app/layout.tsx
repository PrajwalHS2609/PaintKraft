import { Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LpPaintNavbar from "../components/PaintLandingPage/LpPaintNavbar/LpPaintNavbar";
import LpPaintFooter from "../components/PaintLandingPage/LpPaintFooter/LpPaintFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {children}
        <LpPaintFooter />
      </body>
    </html>
  );
}
