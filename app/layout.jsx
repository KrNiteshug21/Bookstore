import "./globals.css";
import { Inter } from "next/font/google";
import { DataProvider } from "../context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-bg-clr">
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}