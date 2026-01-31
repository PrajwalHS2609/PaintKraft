// app/[slug]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/client";

import PostContent, { PostContentType } from "@/components/SanityComponents/Post";
import BlogSidebar from './../../components/BlogPage/BlogSidebar/BlogSidebar';
import ServiceContent, { ServiceContentType } from "@/components/SanityComponents/ServiceContent";
import SanityColorShade, { PaintShadesData } from "@/components/SanityComponents/SanityColorShade";

/* =========================
   GROQ QUERY
========================= */
const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, body,
    mainImage{ asset->{url} },
    publishedAt,
    youtubeVideoUrl,
    faq[]{ question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  }
}`;


const SERVICE_CONTENT_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id, title, slug,metaTitle ,metaDescription,body1, body2,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer },
   tableOfContent[]{
      title
    },
    customTable{ title, headers, rows[]{ cells } }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  },

}`;


export const PAINT_SHADES_QUERY = `
*[_type == "paintShades" && slug.current == $slug][0]{
  hero{
    title,
    description,
    bannerImg
  },
  title,
  metaTitle,
  metaDescription,
  categories[]{
    key,
    displayName,
    color,
    shades[]{
      name,
      bg
    }
  }
}
`;

type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};
/* =========================
   ISR
========================= */

export const revalidate = 60;

/* =========================
   METADATA (SEO)
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // 1️⃣ Try POST first
  const postData = await client.fetch<{
    post: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(POST_QUERY, { slug });

  if (postData?.post) {
    return {
      title:
        postData.post.metaTitle ||
        postData.post.title ||
        "Prime Clean Blog",
      description:
        postData.post.metaDescription ||
        "Read the latest blog articles from Prime Clean.",
    };
  }

  // 2️⃣ Fallback to SERVICE
  const serviceData = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_CONTENT_QUERY, { slug });

  if (serviceData?.service) {
    return {
      title:
        serviceData.service.metaTitle ||
        serviceData.service.title ||
        "Prime Clean Services",
      description:
        serviceData.service.metaDescription ||
        "Professional services by Prime Clean.",
    };
  }
  // 3️⃣ Paint Shades
  const paintMeta = await client.fetch<{ title?: string; metaTitle?: string; metaDescription?: string } | null>(
    `*[_type == "paintShades" && slug.current == $slug][0]{ title, metaTitle, metaDescription }`,
    { slug }
  );
  if (paintMeta) {
    return {
      title: paintMeta.metaTitle || paintMeta.title || "Paint Shades",
      description: paintMeta.metaDescription || "Explore premium wall paint shades and colours.",
    };
  }

  // 3️⃣ Not found
  return {
    title: "Not Found | Prime Clean",
    description: "The page you are looking for does not exist.",
  };
}


/* =========================
   PAGE
========================= */

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1️⃣ POST
  const postData = await client.fetch<{
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <div className="blog-container">
        <PostContent
          content={{
            ...postData.post,
            carouselBlock: postData.carouselBlock ?? undefined,
          }}
        />
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      </div>
    );
  }
  // 2️⃣ SERVICE
  const serviceData = await client.fetch<{
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(SERVICE_CONTENT_QUERY, { slug });

  if (serviceData.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined,
        }}
      />
    );
  }
  // 3️⃣ Paint Shades
  const paintShadesData = await client.fetch<PaintShadesData | null>(PAINT_SHADES_QUERY, { slug });
  if (paintShadesData) {
    return <SanityColorShade data={paintShadesData} />;
  }
// ✅ FINAL FALLBACK
notFound();
}

