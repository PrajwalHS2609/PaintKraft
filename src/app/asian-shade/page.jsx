import AsianPaintShadesEssentials from "../../components/AsianPaint/AsianPaintShadesEssentials";
import ServiceHeroSection from "../../components/ServiceComponents/ServiceHeroSection";
import { bannerImg } from '@/images/LpBannerImg.png';

export default function AsianShade() {
  return (
    <div>
      <ServiceHeroSection bannerImg="https://images.pexels.com/photos/5933/color-paint-palette-wall-painting.jpg" title="Asian Paints Shade Card" description="Asian Paints Shades is one of the most loved shades in the Asian Paints palette. This page helps you visualize it in real homes, compare it with similar tones, and get expert tips for ideal usage." />
      <AsianPaintShadesEssentials/>
    </div>
  );
}
