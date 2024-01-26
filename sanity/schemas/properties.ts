import { defineField, defineType } from "sanity";

export default defineType({
  name: "properties",
  title: "Properties",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "developer",
      title: "Developer",
      type: "reference",
      to: { type: "developer" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "Apartment" },
          { title: "Villa", value: "Villa" },
          { title: "Duplex", value: "Duplex" },
          { title: "Labour", value: "Labour" },
          { title: "Land", value: "Land" },
          { title: "Industrial", value: "Industrial" },
          { title: "Hotel Appartment", value: "Hotel Apartment" },
          { title: "Land Residential", value: "Land Residential" },
          { title: "Residential Building", value: "Residential Building" },
          { title: "Townhouse", value: "Townhouse" },
          { title: "Multiple Sale Units", value: "Multiple Sale Units" },
          { title: "Loft Apartment", value: "Loft Apartment" },
          { title: "Land Mixed Use", value: "Land Mixed Use" },
          { title: "Compound", value: "Compound" },
          { title: "Half Floor", value: "Half Floor" },
          { title: "Full Floor", value: "Full Floor" },
          { title: "Bungalow", value: "Bungalow" },
          { title: "Staff Accomodation", value: "Staff Accomodation" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "beds",
      title: "Beds",
      type: "studio",
    }),
    defineField({
      name: "bath",
      title: "Bath",
      type: "number",
    }),
    defineField({
      name: "furnishingPreferences",
      title: "Furnishing Preferences",
      type: "string",
      options: {
        list: [
          { title: "Furnished", value: "Furnished" },
          { title: "Partially Furnished", value: "Partially Furnished" },
          { title: "Non-Furnished", value: "Non-Furnished" },
        ],
      },
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [{ name: "amenity", title: "Amenity", type: "string" }],
        },
      ],
    }),

    defineField({
      name: "area",
      title: "Area",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "isOffPlan",
      title: "Off Plan",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
});
