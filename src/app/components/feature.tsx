// export default function Feature(){
//     return (
    
//       <section className="w-full sm:h-[300px] h-[350px] bg-[#FAF4F4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-16 py-12 text-left">
//         <div>
//           <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">Free Delivery</h3>
//           <p className="text-[#9F9F9F] text-sm sm:text-lg">
//             For all orders over $50, consectetur <br /> adipiscing elit.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">90 Days Return</h3>
//           <p className="text-[#9F9F9F] text-sm sm:text-lg">
//             If goods have problems, consectetur <br /> adipiscing elit.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">Secure Payment</h3>
//           <p className="text-[#9F9F9F] text-sm sm:text-lg">
//             100% secure payment, consectetur <br /> adipiscing elit.
//           </p>
//         </div>
//       </section>
//     )
// }

export default function Feature() {
  return (
    <section className="w-full sm:h-[300px] h-[350px] bg-[#FAF4F4]">
      <div className="container mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-16 py-12 text-left">
        {/* Feature 1 */}
        <div>
          <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">Free Delivery</h3>
          <p className="text-[#9F9F9F] text-sm sm:text-lg">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">90 Days Return</h3>
          <p className="text-[#9F9F9F] text-sm sm:text-lg">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <h3 className="text-2xl sm:text-4xl text-black mb-2 md:mt-12">Secure Payment</h3>
          <p className="text-[#9F9F9F] text-sm sm:text-lg">
            100% secure payment, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
