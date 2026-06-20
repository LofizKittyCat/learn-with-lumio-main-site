"use client";

import { useAuth } from "@/app/hooks/useAuth";
import React, { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import Image from "next/image";
import { redirect } from "next/navigation";

type Mode = "signin" | "signup";

export function GoogleLoginBtn() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  return (
    <button
      onClick={loginWithGoogle}
      className="flex items-center justify-center p-2 bg-white cursor-pointer transition-all rounded-full"
    >
      <Image
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="google_logo"
        width={32}
        height={32}
      />
    </button>
  );
}

export default function LoginContent() {
  const { signInWithPassword, signUp } = useAuth();

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setSubmitting(true);

    try {
      if (mode === "signin") {
        await signInWithPassword(email, password);
        redirect("/");
      } else {
        await signUp(email, password);
        setMessage("Account Created - Check Your Email For Confirmation.");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#080C16]">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-[#080C16] border border-slate-200 dark:border-white/8 rounded-xl p-8 shadow-2xl">
          <h1 className="text-lg font-space-grotesk font-medium text-slate-800 dark:text-white mb-6">
            {mode === "signin"
              ? "Sign in to your account"
              : "Create an account"}
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Password
                </label>
                {mode === "signin" && (
                  <a
                    href="/login/forgot-password"
                    className="text-xs text-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
              <input
                type="password"
                required
                autoComplete={
                  mode === "signin" ? "current-password" : "new-password"
                }
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}
            {message && <p className="text-xs text-green-500">{message}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 w-full py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 transition-colors rounded-lg cursor-pointer"
            >
              {submitting
                ? "Please wait…"
                : mode === "signin"
                  ? "Sign in"
                  : "Create account"}
            </button>
          </form>

          <div className="mt-8 w-full flex flex-row gap-4 items-center justify-center">
            <GoogleLoginBtn />
          </div>
        </div>

        {/* Toggle */}
        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
          {mode === "signin"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError(null);
              setMessage(null);
            }}
            className="text-indigo-500 hover:text-indigo-400 transition-colors font-medium cursor-pointer"
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
