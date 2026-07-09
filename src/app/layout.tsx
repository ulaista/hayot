import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/header";

export const metadata = {
  title: "Hayot Istamov",
  description: "Personal portfolio, blog, and contacts for Hayot Istamov.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
