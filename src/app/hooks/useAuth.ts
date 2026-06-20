import type { User } from "@supabase/supabase-js";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

async function signInWithPassword(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

async function signUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
}

async function signOut() {
  await supabase.auth.signOut();
}

async function resetPassword(email: string) {
  const URL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:5173/login/forgot-password/reset-password"
      : "https://learnwithlumio.com/login/forgot-password/reset-password";

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: URL,
  });
  if (error) throw new Error(`Reset password failed: ${error.message}`);
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return { user, loading, signInWithPassword, signUp, signOut, resetPassword };
}
