import type { Metadata } from "next";
import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: "Хаёт Истамов — учёный, преподаватель, инженер",
  description: "Научная работа, преподавание и достижения Хаёта Истамова в химической технологии.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
