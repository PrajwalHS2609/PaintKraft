// sanity/schemas/paintShades.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "paintShades",
  title: "Paint Shades Page",
  type: "document",
  fields: [
        defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "bannerImg",
          title: "Banner Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "categories",
      title: "Color Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "key", title: "Key", type: "string" },
            { name: "displayName", title: "Display Name", type: "string" },
            { name: "color", title: "Button Color", type: "string" },
            {
              name: "shades",
              title: "Shades",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "name", type: "string" },
                    { name: "bg", title: "Hex Color", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
