import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton({
  theme,
  toggle,
}: {
  theme: "light" | "dark";
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors"
    >
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
