import ThemeToggleButton from "./ThemeToggle";
import AuthButton from "./auth/AuthButton";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/pricing", label: "Pricing" },
  { to: "/overview", label: "Overview" },
  { to: "/about", label: "About" },
];

export default function Header({
  theme,
  toggle,
}: {
  theme: "light" | "dark";
  toggle: () => void;
}) {
  const { user } = useAuth();

  return (
    <header className="z-50 absolute top-0 w-full flex transition-all duration-300 backdrop-blur-md border-b bg-bg-elevated border-divider shadow-lg">
      <nav className="w-full relative flex h-14 items-center px-6">
        <div className="flex-1 flex">
          <Link
            href="/"
            className="text-2xl text-slate-600 dark:text-white font-space-grotesk font-medium"
          >
            Lumio
            <span className="font-serif">
              <sup>©™</sup>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex justify-center items-center gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex-1 hidden md:flex justify-end items-center gap-3 whitespace-nowrap">
          <ThemeToggleButton theme={theme} toggle={toggle} />
          <AuthButton />

          {/* Only show if logged out */}
          {!user && (
            <a
              href="pricing"
              className="text-sm text-text-primary font-medium bg-indigo border-b-3 border-indigo-700 transition-colors px-4 py-2 rounded-lg cursor-pointer"
            >
              Get started free
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
