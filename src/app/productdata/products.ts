// types/product.ts (optional: create a separate file for types)
export interface Product {
  id: any;
  slug: string;
  name: string;
  price: string;
  image: string;
  smallImages: string[];
  rating: number;
  customerReview: string;
  description: string;
  size: string[];
  color: string[];
  SKU: string;
  category: string;
  tags: string[];
  share: string[];
  details: {
    description: string;
    additionalInfo: string;
    additionalInfo1: string;
  };
  reviews: {
    rating: number;
    text: string;
  }[];
  images: string[];
  relatedProducts: {
    id: string;
    image: string;
  }[];
}



export const products : Product[] = [
    {
      slug: "Trenton-modular-sofa-3",
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/item1.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        description: "The Trenton Modular Sofa_3 is a versatile and modern seating piece designed for maximum comfort and flexibility. It features a modular design, allowing you to configure it in various arrangements to suit your space and style. The sofa typically includes cushioned seating and backrests, crafted from high-quality materials such as soft fabric or leather upholstery. The sleek lines and contemporary silhouette make it an ideal addition to both minimalist and modern interiors. With its customizable modules, this sofa offers adaptability for living rooms, lounges, and open spaces, ensuring both functionality and aesthetic appeal.",
        additionalInfo: "The Trenton Modular Sofa_3 is a versatile and flexible seating option, offering a customizable layout that can be rearranged to suit different room sizes and preferences. It features cushioned seating and backrests made with high-density foam or plush padding for optimal comfort and support. Upholstered in high-quality materials like premium fabric, leather, or microfiber, the sofa is durable and easy to maintain. The sturdy frame, typically crafted from hardwood or metal, ensures long-term stability. Adjustable or removable armrests are available in some models, allowing for a personalized seating experience.",
        additionalInfo1: "The modular design may also include ottomans, chaise lounges, or corner pieces, enabling you to expand the seating area or create a more relaxed, lounging space. With clean lines and a minimalist silhouette, it complements contemporary interiors with its neutral tones. The sofa is easy to assemble, with sections designed for simple setup and reconfiguration. Additionally, some versions are made with eco-friendly materials, catering to those seeking sustainable options. The Trenton Modular Sofa_3 is a perfect blend of comfort, style, and functionality, making it a great addition to any modern living space."
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
      ],
      
    },
    {
      slug: "Granite-dining-table",
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/item2.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        description: "A granite dining table with matching dining chairs is a perfect blend of elegance, durability, and functionality, making it an ideal centerpiece for any dining space. The table features a sleek, polished granite surface that not only adds a touch of sophistication but is also highly resistant to scratches, heat, and stains, ensuring lasting beauty. The natural patterns and unique textures of granite create a stunning, one-of-a-kind look that enhances the room's ambiance. Paired with stylish dining chairs, the set offers both comfort and aesthetic appeal. These chairs are often crafted with sturdy frames and cushioned seats, providing a cozy dining experience for family gatherings or special occasions. Together, this dining set elevates the space, adding timeless charm and a luxurious feel to both modern and classic interiors.",
        additionalInfo: "A granite dining table with dining chairs is a premium furniture set that combines luxury, functionality, and timeless appeal. Granite, a natural stone, is known for its durability and strength, making the dining table resistant to scratches, cracks, heat, and spills. Its dense surface is also easy to clean, making it a practical choice for everyday use in homes, restaurants, or other dining spaces. The table’s weight and solid build ensure stability, preventing wobbling during meals",
        additionalInfo1: "Granite tables come in various colors and patterns, including black, white, gray, or even speckled designs, allowing homeowners to choose a style that matches their interior décor. Each slab of granite is unique, giving the table a distinctive and elegant appearance that cannot be replicated. The accompanying dining chairs are designed to complement the table’s luxurious feel. These chairs can be crafted from a variety of materials such as wood, metal, or upholstered finishes, providing both comfort and visual harmony. Upholstered chairs with cushioned seats and backrests enhance the dining experience by offering ergonomic support. The frames of the chairs are built to be sturdy and long-lasting, ensuring they can withstand regular use without compromising style."
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
      slug: "Outdoor-bar-table",
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/item3.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        description: "An outdoor bar table and stool set is a stylish and functional addition to any outdoor space, perfect for creating a casual and inviting atmosphere. The bar table typically features a high, sleek design with a durable surface that can withstand various weather conditions, making it ideal for patios, gardens, balconies, or poolside areas. Paired with matching bar stools, which often include comfortable footrests and weather-resistant materials, the set is designed to provide both comfort and practicality. These pieces come in various materials, such as wood, metal, rattan, or a combination of these, allowing them to blend seamlessly with different outdoor decor styles. Whether used for entertaining guests, enjoying a morning coffee, or sipping evening cocktails, an outdoor bar table and stool set enhances the overall ambiance of any outdoor gathering space.",
        additionalInfo: "An outdoor bar table and stool set is a stylish and functional addition to any patio, garden, or outdoor dining area. Designed to withstand various weather conditions, these sets are often crafted from durable materials such as aluminum, stainless steel, wicker, or weather-resistant wood. The elevated height of the bar table creates a casual, relaxed atmosphere, perfect for enjoying drinks, snacks, or casual meals outdoors. Bar stools typically feature comfortable seating with ergonomic designs, including backrests and footrests for added support. Many outdoor bar sets also incorporate practical features such as UV-resistant finishes, rust-proof frames, and easy-to-clean surfaces, ensuring longevity and low maintenance. Whether used for hosting outdoor gatherings, enjoying quiet moments in the sun, or enhancing the aesthetic appeal of a space, outdoor bar tables and stools combine both style and functionality to elevate any open-air setting.",
        additionalInfo1: "Outdoor bar tables and stools come in various designs to match different themes and settings, from modern minimalist styles to rustic or tropical aesthetics. These sets are ideal for creating a cozy outdoor bar area, allowing homeowners to maximize their outdoor living spaces. Many stools are designed with cushions or weatherproof upholstery to provide extra comfort during long hours of use. Additionally, bar tables often feature convenient features like built-in storage or umbrella holes to provide shade on sunny days. Their compact size makes them perfect for balconies, terraces, and poolside areas, offering a social hub for gatherings without occupying too much space. By adding an outdoor bar table and stool set, you can transform any outdoor area into an inviting and functional space for entertainment and relaxation."
      },
      reviews: [
        { rating: 4.5, text: "Exactly what I was looking for!" },
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
      slug: "Plain-console-with-teak-mirror",
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/item4.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        description: "The plain console with a teak mirror is a minimalist yet stylish addition to any outdoor space. Crafted from durable teak wood, the mirror exudes natural elegance, blending seamlessly with the console's sleek design. This combination enhances the aesthetic appeal of patios, balconies, or poolside areas, providing both functionality and sophistication. Complementing this setup is the outdoor bar table and stool set, designed for comfort and durability in various weather conditions. The table features a sturdy teak surface, perfect for serving drinks or snacks during gatherings, while the bar stools offer ergonomic support with their smooth wooden finish. Together, these pieces create a welcoming outdoor space for entertaining guests or enjoying a quiet evening outdoors.",
        additionalInfo: "Elevate your outdoor living space with a thoughtfully curated setup that combines style and functionality. The plain console table with a sleek teak mirror adds a natural touch to your décor, blending timeless elegance with practicality. Crafted from premium-quality teak wood, the mirror beautifully complements the console's minimalist design, offering a warm, rustic appeal. Paired perfectly with the outdoor bar table and stools, this ensemble creates a cozy spot for social gatherings or a relaxing retreat. The bar table, featuring a weather-resistant finish, ensures durability against the elements, while the sturdy stools provide both comfort and sophistication. Ideal for patios, gardens, or poolside areas, this setup enhances any outdoor setting with its classic charm and modern versatility.",
        additionalInfo1: "The plain console with a teak mirror serves as a versatile piece that blends practicality with natural beauty, making it a perfect addition to any outdoor bar area. The teak frame, known for its durability and weather resistance, brings warmth and character to the space while effortlessly reflecting the surroundings to create a more open and inviting atmosphere. Complementing this is the outdoor bar table and stool set, designed to offer a seamless blend of comfort and style. The bar table provides ample space for drinks and snacks, while the stools are crafted with ergonomic designs to ensure long-lasting comfort. Together, these pieces create a sophisticated yet relaxed ambiance, ideal for hosting outdoor parties or enjoying a quiet evening under the stars."
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
      slug: "Grain-coffee-table",
      name: "Grain coffee table",
      price: "Rs. 15,000.00",
      image: "/item5.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        description: "The Grain Coffee Table combines timeless elegance with a touch of rustic charm, making it a perfect centerpiece for any living space. Crafted from premium-quality wood, the table’s surface showcases a rich, natural grain pattern that enhances its organic beauty and unique character. Its sturdy construction ensures lasting durability, while the smooth finish highlights the wood's natural texture. The minimalist design makes the table versatile, seamlessly fitting into both contemporary and traditional interiors. Whether used for serving coffee, displaying décor, or simply bringing people together, the Grain Coffee Table offers a perfect balance of style and function.",
        additionalInfo: "The grain coffee table is a timeless piece of furniture that combines both functionality and elegance. Crafted from natural wood, its unique grain patterns add warmth and character to any living space, making each table truly one-of-a-kind. The table’s smooth surface and sturdy build provide a perfect balance between durability and aesthetic appeal, suitable for both modern and traditional interiors. Its minimalist design allows it to effortlessly blend with various décor styles, while the natural wood tones create a cozy and inviting atmosphere. Whether used to hold decorative items, coffee mugs, or books, a grain coffee table enhances the overall ambiance of a room, turning it into a focal point that reflects sophistication and charm.",
          additionalInfo1: "A **grain coffee table** is more than just a piece of furniture; it’s a statement of craftsmanship and style. The rich texture of the wood grain showcases nature's artistry, bringing a sense of warmth and organic beauty into any room. Its versatile design makes it ideal for various settings, from cozy homes to modern offices, offering a balance of practicality and visual appeal. These tables often come in a variety of shapes and finishes, allowing homeowners to choose one that complements their interior theme. Whether paired with a sleek sofa or rustic armchairs, a grain coffee table adds depth and character, creating a cozy gathering space that exudes charm and sophistication."
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
      slug: "Kent-coffee-table",
      name: "Kent coffee table",
      price: "Rs. 225,000.00",
      image: "/item6.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        description: "",
         additionalInfo: "",
        additionalInfo1: ""
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
      slug: "Round-coffee-table",
      name: "Round coffee table_color 2",
      price: "Rs. 251,000.00",
      image: "/item7.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Available in two color options, perfect for a modern interior.",
         additionalInfo1: ""
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
      slug: "Reclaimed-teak-coffee-table",
      name: "Reclaimed teak coffee table",
      price: "Rs. 25,200.00",
      image: "/item8.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Perfect for environmentally conscious consumers.",
         additionalInfo1: ""
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
      slug: "Plain-console",
      name: "Plain console",
      price: "Rs. 258,200.00",
      image: "/item9.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Crafted from premium quality materials for durability.",
         additionalInfo1: ""
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
      slug: "Reclaimed-teak-Sideboard",
      name: "Reclaimed teak Sideboard",
      price: "Rs. 200,000.00",
      image: "/item10.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Made from 100% reclaimed teak wood, adding a unique touch to your home.",
         additionalInfo1: ""
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
      slug: "SJP-0825",
      name: "SJP_0825",
      price: "Rs. 20,000.00",
      image: "/item11.png",
      smallImages: ["/item1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Available in a neutral color palette.",
         additionalInfo1: ""
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
      slug: "Bella-chair-and-table",
      name: "Bella chair and table",
      price: "Rs. 10,000.00",
      image: "/item12.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Perfect for apartments or small offices.",
         additionalInfo1: ""
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
      slug: "Modern-armchair-with-table",
      name: "Modern armchair with table",
      price: "Rs. 23,000.00",
      image: "/item13.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Includes a side table for convenience.",
         additionalInfo1: ""
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
      slug: "Elegant-Lounge-chair",
      name: "Elegant Lounge chair",
      price: "Rs. 35,000.00",
      image: "/item14.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Perfect for living rooms or reading corners.",
         additionalInfo1: ""
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
      slug: "Cushion-Seat",
      name: "Cushion Seat",
      price: "Rs. 4,500.00",
      image: "/item15.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Available in different colors to match your existing decor.",
         additionalInfo1: ""
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
      slug: "Mysterious-sofa",
      name: "Mysterious sofa",
      price: "Rs. 45,000.00",
      image: "/item16.png",
      smallImages: ["/sm1.png", "/sm2.png", "/sm3.png", "/sm4.png"],
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
        additionalInfo: "Perfect for larger living spaces.",
         additionalInfo1: ""
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
  