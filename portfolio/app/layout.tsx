import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";


export const metadata: Metadata = {
  title: "Danny Nguyen's Portfolio",
  description: "Using popular frameworks and libraries to render a fast, secure, and pleasing user experience to promote skills, passion, and experience in website developing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
