import { CreditCard, Home, Search, Settings } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import AccountPageContent from "./AccountPageContent";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";

interface AccountNavProps {
  label: string;
  icon: React.JSX.Element;
  location: string;
  onLocationChange: (location: string) => void;
}

export const NavItems = [
  {
    label: "Home",
    icon: <Home size={20} />,
    location: "#home",
  },
  {
    label: "Subscriptions",
    icon: <CreditCard size={20} />,
    location: "#subscriptions",
  },
  {
    label: "Settings",
    icon: <Settings size={20} />,
    location: "#settings",
  },
];

export function AccountNavItem({
  label,
  icon,
  location,
  onLocationChange,
}: AccountNavProps) {
  return (
    <li>
      <a
        href={location}
        onClick={() => onLocationChange(location)}
        className="w-full flex flex-row items-center gap-3 font-space-grotesk text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-4 py-2 transition-colors duration-150 rounded-2xl bg-transparent hover:bg-slate-300 dark:hover:bg-[#151c2c] border-solid border border-transparent hover:border-slate-200 dark:hover:border-white/8 hover:shadow-lg"
      >
        {icon} {label}
      </a>
    </li>
  );
}

export function AccountNavSearch({
  searchText,
  onSearchTextChange,
}: {
  searchText: string;
  onSearchTextChange: (value: string) => void;
}) {
  return (
    <div className="w-full flex flex-row items-center gap-3 font-space-grotesk text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white px-4 py-1.5 transition-colors duration-150 rounded-2xl bg-slate-300 dark:bg-[#111725] border-solid border border-slate-200 dark:border-white/8 hover:shadow-lg">
      <Search
        size={16}
        className="shrink-0 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
      />
      <input
        type="text"
        placeholder="Search..."
        className="grow focus:outline-none focus:ring-0 text-md"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
    </div>
  );
}

export function AccountNav({
  searchText,
  onSearchTextChange,
  onLocationChange,
}: {
  searchText: string;
  onSearchTextChange: (value: string) => void;
  onLocationChange: (location: string) => void;
}) {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="z-50 flex min-h-screen">
      <nav className="w-64 flex flex-col bg-white dark:bg-[#080C16] border-r border-slate-200 dark:border-white/8 justify-items items-center">
        <div className="w-full flex flex-col gap-4 p-4">
          <span className="w-full text-center">
            <h1 className="text-3xl text-slate-800 dark:text-white font-space-grotesk font-semibold">
              Lumio
            </h1>
          </span>

          <AccountNavSearch
            searchText={searchText}
            onSearchTextChange={onSearchTextChange}
          />

          <ul className="flex flex-col gap-2">
            {NavItems.map((item, index) => (
              <AccountNavItem
                key={index}
                label={item.label}
                icon={item.icon}
                location={item.location}
                onLocationChange={onLocationChange}
              />
            ))}
          </ul>
        </div>

        <div className="w-full grow p-4">
          <div className="w-full h-full flex flex-row items-end">
            <div className="grid grid-cols-2 gap-4">
              <Image
                className="w-12 h-12 rounded-full text-slate-700 dark:text-white"
                src={user?.user_metadata.avatar_url}
                alt="pfp"
              ></Image>

              <div className="w-full flex flex-col leading-0.5">
                <h1 className="text-slate-800 dark:text-white text-lg font-space-grotesk font-medium">
                  {user?.user_metadata.name}
                </h1>
                <h1 className="text-slate-500 dark:text-slate-400 text-md font-space-grotesk">
                  Pro Member
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function AccountPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("#home");

  const { user } = useAuth();

  useEffect(() => {
    console.log(user?.user_metadata);
  }, [user?.user_metadata]);

  return (
    <div className="w-full min-h-screen grid grid-cols-2 bg-white dark:bg-[#080C16]">
      <AccountNav
        searchText={searchTerm}
        onSearchTextChange={(text) => setSearchTerm(text)}
        onLocationChange={(l) => setLocation(l)}
      />

      <AccountPageContent location={location} />
    </div>
  );
}
