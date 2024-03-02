import "./globals.css";
import { Providers } from "./providers";
export const metadata = {
  title: "Hardware PH",
  description: "Hardware Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
