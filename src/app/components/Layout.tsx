"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "../hooks/useTheme";
import Header from "./Header";

import MaintenancePage from "./routes/dev/MaintenancePage";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme();

  const location = usePathname();

  const hideHeader =
    location === "/login" ||
    location.startsWith("/login") ||
    location.startsWith("/dashboard") ||
    location.startsWith("/account");

  return (
    <div>
      {!hideHeader && <Header theme={theme} toggle={toggle} />}
      {children}
    </div>
  );
}
