import type { Metadata } from "next";
import "./bird.css";
export const metadata: Metadata = { title: "Fugle · På opdagelse", description: "Find fugle i det fri, saml arter og vis dine fund frem.", manifest: "/manifest.webmanifest", appleWebApp: { capable: true, title: "Fugle", statusBarStyle: "default" }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="da"><body>{children}</body></html>; }
