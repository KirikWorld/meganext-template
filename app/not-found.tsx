import { Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="dark h-screen flex items-center justify-center text-foreground bg-background flex-col">
      <h1 className="text-3xl font-bold text-center">404</h1>
      <br />
      <Link href="/" className="dark text-xl font-bold text-center text-foreground bg-background">
        <Home />
      </Link>
    </main>
  );
}
