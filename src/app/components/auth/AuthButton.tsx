import { LayoutDashboard, LogOut, User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function AuthButton() {
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (user) {
    return (
      <div className="relative inline-block group">
        <button className="text-sm text-slate-400 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-200 transition-colors flex items-center justify-center gap-2 px-4 py-2 cursor-pointer">
          <User size={20} />
          {user.user_metadata.name}
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 top-full w-40 font-space-grotesk bg-white dark:bg-[#080C16] text-slate-500 dark:text-white border border-slate-300 dark:border-white/8 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 p-2 space-y-2">
          <a
            href="dashboard"
            className="flex flex-row gap-2 items-center px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:text-slate-800"
          >
            <LayoutDashboard size={16} /> Dashboard
          </a>
          <a
            href={"account/" + user.id}
            className="flex flex-row gap-2 items-center px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:text-slate-800"
          >
            <User size={16} /> Account
          </a>
          <hr className="border-t border-slate-300 dark:border-white/8 my-2"></hr>
          <a
            href="#"
            onClick={handleSignOut}
            className="flex flex-row gap-2 items-center px-4 py-2 rounded-lg transition-all duration-200 hover:bg-red-500 hover:text-white"
          >
            <LogOut size={16} /> Log-out
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <button className="text-sm text-slate-400 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-200 transition-colors flex items-center justify-center gap-2 px-4 py-2 cursor-pointer">
        <Link href="/login" className="justify-center items-center flex gap-2">
          <User size={16} />
          Sign in
        </Link>
      </button>
    );
  }
}
