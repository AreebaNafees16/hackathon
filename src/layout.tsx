// // For app/layout.tsx (Next.js 13+ with app router)
// import { appWithTranslation } from 'next-i18next';

// function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

// export default appWithTranslation(RootLayout);
// app/layout.tsx
// import './globals.css';
// import { ReactNode } from 'react';
// import { appWithTranslation } from 'next-i18next';

// export default appWithTranslation(function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// });

'use client';

import { useRouter } from 'next/navigation';

export default function NavigationExample() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/new-page'); // Navigate to '/new-page'
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to New Page</button>
    </div>
  );
}
