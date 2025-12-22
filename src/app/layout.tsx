import { Montserrat } from "next/font/google";
import "./globals.css"
import LpPaintNavbar from './../components/PaintLandingPage/LpPaintNavbar/LpPaintNavbar';
import LpPaintFooter from './../components/PaintLandingPage/LpPaintFooter/LpPaintFooter';
import 'bootstrap/dist/css/bootstrap.min.css';



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

      <body className={montserrat.className}>
        <LpPaintNavbar/>
        {children}
        <LpPaintFooter/>
      </body>
    </html>
  );
}
