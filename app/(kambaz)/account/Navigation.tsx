"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-account-navigation"
      aria-label="Account navigation"
      className="wd list-group rounded-none text-lg"
    >
      {currentUser && (
        <p id="wd-account-user" className="m-0 mb-2 break-words px-3 font-semibold">
          {currentUser.firstName} {currentUser.lastName}
        </p>
      )}
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          aria-current={pathname === `/account/${link}` ? "page" : undefined}
          className={
            pathname === `/account/${link}`
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link === "signin"
            ? "Sign in"
            : link === "signup"
              ? "Sign up"
              : "Profile"}
        </Link>
      ))}
    </nav>
  );
}
