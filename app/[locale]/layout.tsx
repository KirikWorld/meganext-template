import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import Content from "@/client/components/Content";
import "../globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "MUR",
  description: "Moskau Unter Rave"
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} h-full pb-5`}>
        <NextIntlClientProvider messages={messages}>
          <main className="2xl:container 2xl:mx-auto bg-background text-foreground w-full relative">
            <Content>{children}</Content>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
