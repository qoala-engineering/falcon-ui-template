import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/qoala-logo.svg" alt="Qoala" width={100} height={100} />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/docs" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Docs
            </Link>
            <Link
              href="/docs/components"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/docs/components")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Components
            </Link>
            <Link
              href="/themes"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/themes")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Themes
            </Link>
            <Link
              href="/examples"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/examples")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Examples
            </Link>
            <Link
              href={"https://github.com/qoala-engineering"}
              className={cn(
                "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
              )}
            >
              GitHub
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
