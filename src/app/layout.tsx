import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import { get } from "@vercel/edge-config";
import MaintenancePage from "./components/routes/dev/MaintenancePage";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn How To Program | Learn With Lumio",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let maintenanceMode = false;

  try {
    maintenanceMode = (await get<boolean>("maintenanceMode")) ?? false;
  } catch {
    maintenanceMode = false;
  }

  if (maintenanceMode) {
    return (
      <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <MaintenancePage />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
