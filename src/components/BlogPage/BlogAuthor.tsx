"use client";

import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { client } from "@/sanity/client";
import "@/components/BlogPage/BlogSidebar/Blog.css"
export const revalidate = 0;


/* ---------------- TYPES ---------------- */

type Author = {
  _id: string;
  name: string;
  designation?: string;
  bio?: PortableTextBlock[];
  instagram?: string | null;
  facebook?: string | null;
  youtube?: string | null;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
};

type BlogAuthorProps = {
  slug: string;
};

/* ---------------- COMPONENT ---------------- */

export default function BlogAuthor({ slug }: BlogAuthorProps) {
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          author->{
            _id,
            name,
            designation,
            bio,
            instagram,
            facebook,
            youtube,
            mainImage{
              asset->{url}
            }
          }
        }`,
        { slug }
      )
      .then((data) => {
        console.log("AUTHOR 👉", data?.author);
        setAuthor(data?.author ?? null);
      })
      .catch(console.error);
  }, [slug]);

  if (!author) return null;

  return (
    <div className="blogAuthorContainer">
      <div className="blogAuthorContent">
        <div className="blogAuthorImg">
          {author.mainImage?.asset?.url && (
            <img src={author.mainImage.asset.url} alt={author.name} />
          )}
        </div>

        <div className="blogAuthorName">
          {author.designation && <h4>{author.designation}</h4>}
          <h3>{author.name}</h3>
        </div>
      </div>

      {author.bio && <PortableText value={author.bio} />}

      <div className="blogAuthorSocial">
        {author.instagram && (
          <a
            href={author.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="authorSocialIcon" />
          </a>
        )}

        {author.facebook && (
          <a
            href={author.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="authorSocialIcon" />
          </a>
        )}

        {author.youtube && (
          <a
            href={author.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="authorSocialIcon" />
          </a>
        )}
      </div>
    </div>
  );
}
