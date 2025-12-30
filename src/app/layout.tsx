import { Montserrat } from "next/font/google";
import "./globals.css";
import LpPaintNavbar from "./../components/PaintLandingPage/LpPaintNavbar/LpPaintNavbar";
import LpPaintFooter from "./../components/PaintLandingPage/LpPaintFooter/LpPaintFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  // variable: "--font-primary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <Script
          id="gtag-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
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
        />
        {/* <!-- Google Tag Manager --> */}
        {/* Google Ads Conversion */}
        <Script
          id="gtag-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof url !== 'undefined') {
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
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={montserrat.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV4SSRH7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <LpPaintNavbar />
        {children}
        <LpPaintFooter />
      </body>
    </html>
  );
}
