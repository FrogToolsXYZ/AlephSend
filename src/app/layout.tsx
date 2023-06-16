import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AppProviders } from "@/app/providers";
import { Icon } from "@/components/Icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ENS Scout",
  description: "Simple ENS Bulk Registration Tool",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} data-mode="dark">
      <body className="flex min-h-screen min-w-full flex-col bg-white text-black dark:bg-[#151514] dark:text-white">
        <AppProviders>
          <header className="container mx-auto flex w-full max-w-screen-lg items-center justify-between px-4 py-5">
            <Link href="/" prefetch={false}>
              Aleph Send
            </Link>
          </header>

          <main className="container mx-auto flex w-full max-w-screen-lg grow flex-col justify-center px-4">
            <div className="flex flex-col items-center">{children}</div>
          </main>

          <footer className="flex items-center justify-center gap-x-2 py-5 font-bold text-primary">
            <a
              href="https://discord.gg/jHMDYmjVVe"
              aria-label="Join our Discord"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Icon icon={{ prefix: "fab", iconName: "discord" }} />
            </a>
            &bull;
            <a
              href="https://twitter.com/EnsScout"
              aria-label="Follow us on Twitter"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Icon icon={{ prefix: "fab", iconName: "twitter" }} />
            </a>
            &bull;
            <p>ENS Bulk Registration</p>
            &bull;
            <p>10% Fee</p>
          </footer>
        </AppProviders>
      </body>
    </html>
  );
}
