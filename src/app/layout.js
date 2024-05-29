import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import { Providers } from "./providers";
export const metadata = {
  title: "Hardware PH",
  description: "Hardware Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Providers>{children}</Providers>
        </body>
      </AuthProvider>
    </html>
  );
}
