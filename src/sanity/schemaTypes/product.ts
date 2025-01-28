export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        
      },
      {
        name: 'imagePath',
        title: 'Image Path',
        type: 'url',
        
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
          name: 'slug',
           title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 16,          
           },
          validation: (Rule: { required: () => any; }) => Rule.required(),
          }
    ],
  }
      // New fields
    //   {
    //     name: 'brand',
    //     title: 'Brand',
    //     type: 'string',
    //   },
    //   {
    //     name: 'dimensions',
    //     title: 'Dimensions',
    //     type: 'string',
    //   },
    //   {
    //     name: 'weight',
    //     title: 'Weight',
    //     type: 'string',
    //   },
    //   {
    //     name: 'color',
    //     title: 'Color',
    //     type: 'string',
    //   },
    //   {
    //     name: 'ratings',
    //     title: 'Ratings',
    //     type: 'number',
    //   },
    //   {
    //     name: 'reviews',
    //     title: 'Reviews',
    //     type: 'array',
    //     of: [{ type: 'string' }],
    //   },
    //   {
    //     name: 'tags',
    //     title: 'Tags',
    //     type: 'array',
    //     of: [{ type: 'string' }],
    //   },
    //   {
    //     name: 'material',
    //     title: 'Material',
    //     type: 'string',
    //   },
  //   ],
  // };
  
  




  
//   import { defineType, defineField } from 'sanity';
  
//   export default defineType({
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       defineField({
//         name: 'title',
//         title: 'Title',
//         type: 'string',
//         description: 'Name of the product',
//       }),
//       defineField({
//         name: 'description',
//         title: 'Description',
//         type: 'string',
//         description: 'A short description of the product',
//       }),
//       defineField({
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         description: 'Current price of the product',
//       }),
//       defineField({
//         name: 'images',
//         title: 'Images',
//         type: 'image',
//         description: 'Upload an image of the product.',
//         options: {
//           hotspot: true,
//         },
//       }),
//       defineField({
        
//           name: "rating",
//           type: "number",
//           title: "Product Rating",
//           description: "Average rating of the product (e.g., 4.5)",
        
//       }),
//       defineField({
//           name: 'slug',
//           title: 'Slug',
//           type: 'slug',
//           options: {
//             source: 'title',
//             maxLength: 16,
//           },
//           validation: (Rule) => Rule.required(),
//         }),
//     ],
//   });
  