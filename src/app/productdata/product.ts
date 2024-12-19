const products = [
    {
      id: "1",
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/item1.png",
      smallImages: ["/sm1_1.png", "/sm1_2.png", "/sm1_3.png", "/sm1_4.png"],
      rating: 4.5,
      customerReview: "Great quality and comfort. Highly recommend!",
      description: "This is a modular sofa designed to offer the perfect blend of comfort and style for any modern living room.",
      size: ["S", "M", "L"],
      color: ["bg-red-500", "bg-yellow-500", "bg-blue-500"],
      SKU: "ADF566",
      category: "Furniture",
      tags: ["Sofa", "Living Room", "Modular", "Comfortable"],
      share: ["Facebook", "Twitter", "Instagram"],
      details: {
        description: "This sofa is made with premium quality fabric and high-density foam for long-lasting comfort.",
        additionalInfo: "Made with eco-friendly materials, the sofa frame is crafted from sustainable wood."
      },
      reviews: [
        { rating: 5, text: "Comfortable and stylish!" },
        { rating: 4, text: "Good quality, but delivery was slow." }
      ],
      images: ["/item1_large1.png", "/item1_large2.png"],
      relatedProducts: [
        { id: "2", image: "/item2.png" },
        { id: "3", image: "/item3.png" },
        { id: "4", image: "/item4.png" },
        { id: "5", image: "/item5.png" }
      ]
    },
    {
      id: "2",
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/item2.png",
      smallImages: ["/sm2_1.png", "/sm2_2.png", "/sm2_3.png", "/sm2_4.png"],
      rating: 4,
      customerReview: "Beautiful design but the finish could be improved.",
      description: "This granite dining table is paired with matching chairs for a perfect dining experience.",
      size: ["M", "L"],
      color: ["bg-gray-500", "bg-brown-500"],
      SKU: "ADF567",
      category: "Furniture",
      tags: ["Dining", "Table", "Chairs", "Granite"],
      share: ["Facebook", "Twitter", "Pinterest"],
      details: {
        description: "This dining set features a sturdy granite table with matching chairs for durability and elegance.",
        additionalInfo: "Perfect for modern homes and available in multiple sizes."
      },
      reviews: [
        { rating: 5, text: "Perfect for my dining room!" },
        { rating: 3, text: "A bit heavy, but good quality." }
      ],
      images: ["/item2_large1.png", "/item2_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "4", image: "/item4.png" },
        { id: "6", image: "/item6.png" },
        { id: "8", image: "/item8.png" }
      ]
    },
    {
      id: "3",
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/item3.png",
      smallImages: ["/sm3_1.png", "/sm3_2.png", "/sm3_3.png", "/sm3_4.png"],
      rating: 5,
      customerReview: "Perfect for my patio! Looks great and sturdy.",
      description: "An outdoor bar table set with stools, perfect for enjoying drinks outside in style.",
      size: ["M"],
      color: ["bg-black", "bg-white"],
      SKU: "ADF568",
      category: "Outdoor Furniture",
      tags: ["Outdoor", "Bar Table", "Stool", "Patio"],
      share: ["Facebook", "Twitter", "LinkedIn"],
      details: {
        description: "This bar set is crafted from weather-resistant materials to withstand the outdoors.",
        additionalInfo: "Available in different colors to match your outdoor decor."
      },
      reviews: [
        { rating: 5, text: "Exactly what I was looking for!" },
        { rating: 4, text: "Good quality, but could use more color options." }
      ],
      images: ["/item3_large1.png", "/item3_large2.png"],
      relatedProducts: [
        { id: "2", image: "/item2.png" },
        { id: "5", image: "/item5.png" },
        { id: "7", image: "/item7.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "4",
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/item4.png",
      smallImages: ["/sm4_1.png", "/sm4_2.png", "/sm4_3.png", "/sm4_4.png"],
      rating: 4.8,
      customerReview: "Elegant and timeless design.",
      description: "A minimalist console table with a teak frame and a large mirror, perfect for entryways.",
      size: ["S", "M"],
      color: ["bg-teak", "bg-wood"],
      SKU: "ADF569",
      category: "Furniture",
      tags: ["Console", "Mirror", "Teak", "Entryway"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "Crafted with a teak frame, this console table adds a touch of sophistication to any entryway.",
        additionalInfo: "A versatile piece that can also be used as a vanity table in your bedroom."
      },
      reviews: [
        { rating: 5, text: "Absolutely stunning piece." },
        { rating: 4, text: "Perfect addition to my hallway." }
      ],
      images: ["/item4_large1.png", "/item4_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "3", image: "/item3.png" },
        { id: "8", image: "/item8.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "5",
      name: "Grain coffee table",
      price: "Rs. 15,000.00",
      image: "/item5.png",
      smallImages: ["/sm5_1.png", "/sm5_2.png", "/sm5_3.png", "/sm5_4.png"],
      rating: 4.2,
      customerReview: "Perfect size for my living room.",
      description: "A sleek, modern coffee table that complements contemporary interiors.",
      size: ["M", "L"],
      color: ["bg-brown-500", "bg-gray-500"],
      SKU: "ADF570",
      category: "Furniture",
      tags: ["Coffee Table", "Living Room", "Modern"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "Made from high-quality wood with a smooth finish, this coffee table is both functional and stylish.",
        additionalInfo: "Easy to assemble and clean."
      },
      reviews: [
        { rating: 5, text: "Looks great in my living room!" },
        { rating: 3, text: "It’s a bit smaller than expected." }
      ],
      images: ["/item5_large1.png", "/item5_large2.png"],
      relatedProducts: [
        { id: "2", image: "/item2.png" },
        { id: "6", image: "/item6.png" },
        { id: "8", image: "/item8.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "6",
      name: "Kent coffee table",
      price: "Rs. 225,000.00",
      image: "/item6.png",
      smallImages: ["/sm6_1.png", "/sm6_2.png", "/sm6_3.png", "/sm6_4.png"],
      rating: 4.7,
      customerReview: "Stunning design and high-quality craftsmanship.",
      description: "A luxurious coffee table with a sleek, modern design and fine detailing.",
      size: ["M"],
      color: ["bg-black", "bg-gray-500"],
      SKU: "ADF571",
      category: "Furniture",
      tags: ["Coffee Table", "Luxury", "Modern"],
      share: ["Facebook", "Twitter", "Pinterest"],
      details: {
        description: "This coffee table is made with premium materials and is a true statement piece for any living room.",
        additionalInfo: "Durable and easy to maintain."
      },
      reviews: [
        { rating: 5, text: "Incredible quality. Worth the price!" },
        { rating: 4, text: "Great design, but too expensive." }
      ],
      images: ["/item6_large1.png", "/item6_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "2", image: "/item2.png" },
        { id: "3", image: "/item3.png" },
        { id: "5", image: "/item5.png" }
      ]
    },
    {
      id: "7",
      name: "Round coffee table_color 2",
      price: "Rs. 251,000.00",
      image: "/item7.png",
      smallImages: ["/sm7_1.png", "/sm7_2.png", "/sm7_3.png", "/sm7_4.png"],
      rating: 4.3,
      customerReview: "Beautiful round design, but difficult to assemble.",
      description: "A modern round coffee table that adds a stylish touch to any room.",
      size: ["S", "M"],
      color: ["bg-black", "bg-white"],
      SKU: "ADF572",
      category: "Furniture",
      tags: ["Coffee Table", "Round", "Modern"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "This coffee table is made from high-quality wood with a smooth, glossy finish.",
        additionalInfo: "Available in two color options, perfect for a modern interior."
      },
      reviews: [
        { rating: 5, text: "Looks amazing in my living room." },
        { rating: 3, text: "Assembly was a bit tricky, but worth it." }
      ],
      images: ["/item7_large1.png", "/item7_large2.png"],
      relatedProducts: [
        { id: "2", image: "/item2.png" },
        { id: "5", image: "/item5.png" },
        { id: "8", image: "/item8.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "8",
      name: "Reclaimed teak coffee table",
      price: "Rs. 25,200.00",
      image: "/item8.png",
      smallImages: ["/sm8_1.png", "/sm8_2.png", "/sm8_3.png", "/sm8_4.png"],
      rating: 4.8,
      customerReview: "Lovely and sturdy table. Great for any living room.",
      description: "A reclaimed teak coffee table with a rustic design that adds charm to any room.",
      size: ["M", "L"],
      color: ["bg-brown-600", "bg-gray-500"],
      SKU: "ADF573",
      category: "Furniture",
      tags: ["Coffee Table", "Teak", "Reclaimed"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "This coffee table is made from reclaimed teak, which adds a unique rustic look.",
        additionalInfo: "Perfect for environmentally conscious consumers."
      },
      reviews: [
        { rating: 5, text: "Beautiful table, I love the rustic look!" },
        { rating: 4, text: "Good quality, but a little larger than expected." }
      ],
      images: ["/item8_large1.png", "/item8_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "3", image: "/item3.png" },
        { id: "6", image: "/item6.png" },
        { id: "7", image: "/item7.png" }
      ]
    },
    {
      id: "9",
      name: "Plain console",
      price: "Rs. 258,200.00",
      image: "/item9.png",
      smallImages: ["/sm9_1.png", "/sm9_2.png", "/sm9_3.png", "/sm9_4.png"],
      rating: 4.4,
      customerReview: "Simple and elegant, fits well in my hallway.",
      description: "A plain console table that offers both functionality and style.",
      size: ["S", "M"],
      color: ["bg-black", "bg-brown"],
      SKU: "ADF574",
      category: "Furniture",
      tags: ["Console", "Entryway", "Modern"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "This table is ideal for a minimalist decor, with a clean design that fits in any entryway.",
        additionalInfo: "Crafted from premium quality materials for durability."
      },
      reviews: [
        { rating: 5, text: "Perfect for my entrance!" },
        { rating: 4, text: "Nice, but could use more storage." }
      ],
      images: ["/item9_large1.png", "/item9_large2.png"],
      relatedProducts: [
        { id: "2", image: "/item2.png" },
        { id: "5", image: "/item5.png" },
        { id: "8", image: "/item8.png" },
        { id: "7", image: "/item7.png" }
      ]
    },
    {
      id: "10",
      name: "Reclaimed teak Sideboard",
      price: "Rs. 200,000.00",
      image: "/item10.png",
      smallImages: ["/sm10_1.png", "/sm10_2.png", "/sm10_3.png", "/sm10_4.png"],
      rating: 4.9,
      customerReview: "A stunning addition to my dining room.",
      description: "This reclaimed teak sideboard combines functionality with style, perfect for any modern dining room.",
      size: ["M"],
      color: ["bg-teak", "bg-dark-brown"],
      SKU: "ADF575",
      category: "Furniture",
      tags: ["Sideboard", "Teak", "Dining Room"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "This sideboard offers ample storage while maintaining a sleek and modern look.",
        additionalInfo: "Made from 100% reclaimed teak wood, adding a unique touch to your home."
      },
      reviews: [
        { rating: 5, text: "Absolutely beautiful! Perfect for my dining area." },
        { rating: 4, text: "The quality is excellent, but it’s quite heavy." }
      ],
      images: ["/item10_large1.png", "/item10_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "4", image: "/item4.png" },
        { id: "7", image: "/item7.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "11",
      name: "SJP_0825",
      price: "Rs. 20,000.00",
      image: "/item11.png",
      smallImages: ["/sm11_1.png", "/sm11_2.png", "/sm11_3.png", "/sm11_4.png"],
      rating: 4.3,
      customerReview: "Stylish design and good quality.",
      description: "A versatile piece that can work in many different rooms, including the living room and office.",
      size: ["M"],
      color: ["bg-black", "bg-gray-500"],
      SKU: "ADF576",
      category: "Furniture",
      tags: ["Furniture", "Versatile", "Stylish"],
      share: ["Facebook", "Instagram", "LinkedIn"],
      details: {
        description: "Perfect for modern living spaces, offering great design with functional use.",
        additionalInfo: "Available in a neutral color palette."
      },
      reviews: [
        { rating: 5, text: "Fits perfectly in my living room!" },
        { rating: 4, text: "Great quality, though assembly took time." }
      ],
      images: ["/item11_large1.png", "/item11_large2.png"],
      relatedProducts: [
        { id: "2", image: "/item2.png" },
        { id: "5", image: "/item5.png" },
        { id: "6", image: "/item6.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "12",
      name: "Bella chair and table",
      price: "Rs. 10,000.00",
      image: "/item12.png",
      smallImages: ["/sm12_1.png", "/sm12_2.png", "/sm12_3.png", "/sm12_4.png"],
      rating: 4.1,
      customerReview: "Great set for small spaces.",
      description: "A stylish chair and table set that’s perfect for small spaces or office areas.",
      size: ["S"],
      color: ["bg-light-gray", "bg-dark-gray"],
      SKU: "ADF577",
      category: "Furniture",
      tags: ["Chair", "Table", "Small Space"],
      share: ["Facebook", "Twitter", "LinkedIn"],
      details: {
        description: "This chair and table set offers a minimalist design while maximizing comfort and space.",
        additionalInfo: "Perfect for apartments or small offices."
      },
      reviews: [
        { rating: 5, text: "Perfect for my office!" },
        { rating: 3, text: "A bit small for my taste." }
      ],
      images: ["/item12_large1.png", "/item12_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "3", image: "/item3.png" },
        { id: "5", image: "/item5.png" },
        { id: "9", image: "/item9.png" }
      ]
    },
    {
      id: "13",
      name: "Modern armchair with table",
      price: "Rs. 23,000.00",
      image: "/item13.png",
      smallImages: ["/sm13_1.png", "/sm13_2.png", "/sm13_3.png", "/sm13_4.png"],
      rating: 4.6,
      customerReview: "Comfortable and stylish, great for my reading nook.",
      description: "A modern armchair with a small side table, perfect for reading or relaxing.",
      size: ["M"],
      color: ["bg-gray-500", "bg-dark-gray"],
      SKU: "ADF578",
      category: "Furniture",
      tags: ["Armchair", "Modern", "Relaxation"],
      share: ["Facebook", "Instagram", "LinkedIn"],
      details: {
        description: "This armchair is designed for comfort, with a soft seat and sturdy construction.",
        additionalInfo: "Includes a side table for convenience."
      },
      reviews: [
        { rating: 5, text: "Love this chair, it's so comfortable!" },
        { rating: 4, text: "Looks great, but a bit too firm for my liking." }
      ],
      images: ["/item13_large1.png", "/item13_large2.png"],
      relatedProducts: [
        { id: "6", image: "/item6.png" },
        { id: "8", image: "/item8.png" },
        { id: "11", image: "/item11.png" },
        { id: "12", image: "/item12.png" }
      ]
    },
    {
      id: "14",
      name: "Elegant Lounge chair",
      price: "Rs. 35,000.00",
      image: "/item14.png",
      smallImages: ["/sm14_1.png", "/sm14_2.png", "/sm14_3.png", "/sm14_4.png"],
      rating: 4.9,
      customerReview: "Excellent chair for lounging and relaxing.",
      description: "An elegant lounge chair designed for maximum comfort and style.",
      size: ["L"],
      color: ["bg-beige", "bg-dark-brown"],
      SKU: "ADF579",
      category: "Furniture",
      tags: ["Lounge Chair", "Comfort", "Elegant"],
      share: ["Facebook", "Instagram", "Pinterest"],
      details: {
        description: "This lounge chair features high-quality upholstery and a comfortable, ergonomic design.",
        additionalInfo: "Perfect for living rooms or reading corners."
      },
      reviews: [
        { rating: 5, text: "Best purchase I've made this year!" },
        { rating: 5, text: "So comfortable, I never want to leave it!" }
      ],
      images: ["/item14_large1.png", "/item14_large2.png"],
      relatedProducts: [
        { id: "7", image: "/item7.png" },
        { id: "8", image: "/item8.png" },
        { id: "12", image: "/item12.png" },
        { id: "10", image: "/item10.png" }
      ]
    },
    {
      id: "15",
      name: "Cushion Seat",
      price: "Rs. 4,500.00",
      image: "/item15.png",
      smallImages: ["/sm15_1.png", "/sm15_2.png", "/sm15_3.png", "/sm15_4.png"],
      rating: 4.6,
      customerReview: "Very comfortable and soft cushion.",
      description: "A high-quality cushion that adds comfort and style to any chair or sofa.",
      size: ["M", "L"],
      color: ["bg-light-gray", "bg-dark-brown"],
      SKU: "ADF580",
      category: "Accessories",
      tags: ["Cushion", "Comfort", "Soft"],
      share: ["Facebook", "Twitter", "Instagram"],
      details: {
        description: "Made from soft, breathable fabric, this cushion is perfect for added comfort.",
        additionalInfo: "Available in different colors to match your existing decor."
      },
      reviews: [
        { rating: 5, text: "So soft and comfortable!" },
        { rating: 4, text: "It’s a bit firm for my preference." }
      ],
      images: ["/item15_large1.png", "/item15_large2.png"],
      relatedProducts: [
        { id: "11", image: "/item11.png" },
        { id: "13", image: "/item13.png" },
        { id: "14", image: "/item14.png" }
      ]
    },
    {
      id: "16",
      name: "Mysterious sofa",
      price: "Rs. 45,000.00",
      image: "/item16.png",
      smallImages: ["/sm16_1.png", "/sm16_2.png", "/sm16_3.png", "/sm16_4.png"],
      rating: 4.9,
      customerReview: "Absolutely love the look and comfort of this sofa.",
      description: "A mysterious sofa that combines luxury, comfort, and modern design in one.",
      size: ["L", "XL"],
      color: ["bg-gray-700", "bg-black"],
      SKU: "ADF581",
      category: "Furniture",
      tags: ["Sofa", "Luxury", "Modern"],
      share: ["Facebook", "Twitter", "LinkedIn"],
      details: {
        description: "This sofa features luxurious upholstery and high-density foam for ultimate comfort.",
        additionalInfo: "Perfect for larger living spaces."
      },
      reviews: [
        { rating: 5, text: "So comfortable and stylish!" },
        { rating: 4, text: "A bit expensive but totally worth it." }
      ],
      images: ["/item16_large1.png", "/item16_large2.png"],
      relatedProducts: [
        { id: "1", image: "/item1.png" },
        { id: "5", image: "/item5.png" },
        { id: "9", image: "/item9.png" },
        { id: "11", image: "/item11.png" }
      ]
    }
  ]
  