import React from "react";
import "../styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "NewSearch | A next-generation search engine",
  description: "An open source, next generation search engine 🔥",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
};

export default RootLayout;
