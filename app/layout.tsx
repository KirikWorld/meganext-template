import "./globals.css";

export const metadata = {
  title: "MUR",
  description: "Moskau Unter Rave"
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
