

"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body><ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>{children}
      </ReactLenis>
      </body>
    </html>
  );
}
