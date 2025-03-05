import Hamburger from "@/components/Navigation/Hamburger";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <main className="w-full">
      <div className="w-full flex flex-row justify-between p-8">
        <a href="/">GG</a>
        <div className="flex flex-row gap-4">
          <ThemeToggle />
          <Hamburger />
        </div>
      </div>
    </main>
  );
}
