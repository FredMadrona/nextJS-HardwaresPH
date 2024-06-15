import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Hardware PH",
  description: "Hardware Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any head elements here */}
      </head>
      <body>
        <AuthProvider>
          <Providers>
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
