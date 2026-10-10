"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <nav id="wd-account-navigation" aria-label="Account navigation" className="wd list-group rounded-none text-lg">
      {[{ path: "signin", label: "Sign in" }, { path: "signup", label: "Sign up" }, { path: "profile", label: "Profile" }].map(({ path, label }) => {
        const href = `/account/${path}`;
        const active = pathname === href;
        return <Link key={path} href={href} aria-current={active ? "page" : undefined} className={active ? "list-group-item active border-0" : "list-group-item border-0 text-red-600"}>{label}</Link>;
      })}
    </nav>
  );
}
