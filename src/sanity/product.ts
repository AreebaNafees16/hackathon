// import { title } from "process";
// import { defineType, defineField } from 'sanity';
// export const product = {
//     name: "product",
//     type: "document",
//     title: "Product",
//     fields: [
//         {
//             name: "title",
//             title: "Title",
//             type: "string",
//             description: 'Name of the product',
//         },
//         {
//             name: 'price',
//             title: 'Price',
//             type: 'number',
//             description: 'Price of the product.',

//         },
//         {
//             name: 'description',
//             title: 'Description',
//             type: 'string',
//             description: 'Short description of the product.',
//         },
// {name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: {
//           source: 'title',
//           maxLength: 16,
//         },
//         validation: (Rule) => Rule.required(),
//},
//         {
//             name: 'images',
//             title: 'Images',
//             type: 'image',
//             description: 'Upload an image of the product.',
//       options: {
//         hotspot: true, // Enable image cropping
//       }
//         }
//     ]

// }

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the product',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'A short description of the product',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Current price of the product',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'image',
      description: 'Upload an image of the product.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      
        name: "rating",
        type: "number",
        title: "Product Rating",
        description: "Average rating of the product (e.g., 4.5)",
      
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 16,
        },
        validation: (Rule) => Rule.required(),
      }),
  ],
});


