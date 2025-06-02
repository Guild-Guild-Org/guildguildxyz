import Link from "next/link";
import Hamburger from "@/components/Navigation/Hamburger";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <main className="header font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-row justify-between p-8">
        <Link href="/">
          <div className="flex flex-row gap-4 items-center">
            <Image src="/gg_logo.png" width={48}
      height={48} alt="gg logo" />
            <p>Guild Guild</p>
          </div>
        </Link>

        <div className="flex flex-row gap-4">
          <ThemeToggle />
          <Hamburger />
        </div>
      </div>
    </main>
  );
}
