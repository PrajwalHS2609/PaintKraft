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
      </head>
      <body className={montserrat.className}>
        <LpPaintNavbar />
        {children}
        <LpPaintFooter />
      </body>
    </html>
  );
}
