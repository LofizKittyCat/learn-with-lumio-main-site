import { useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setError(null);
    setMessage(null);
    setSubmitting(true);

    try {
      await resetPassword(email);
      setMessage("Password reset link sent to your email.");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#080C16]">
      <div className="w-full max-w-md">
        <div className="relative bg-white dark:bg-[#080C16] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-white dark:bg-[#080C16] dark:border-white/8">
            <h1 className="font-space-grotesk font-medium text-2xl text-slate-800 dark:text-white">
              Forgot your password?
            </h1>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Confirm your email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></input>

              {error && <p className="text-xs text-red-500">{error}</p>}
              {message && <p className="text-xs text-green-500">{message}</p>}

              <input
                type="submit"
                disabled={submitting}
                value={submitting ? "Please wait..." : "Reset Password"}
                className="mt-1 w-full px-3 py-2 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-400 text-slate-800 dark:text-white cursor-pointer"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
