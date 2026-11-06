"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.includes("/lab2") },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.includes("/lab3") },
  { href: "/labs/lab4", id: "wd-lab4-toc-link", label: "Lab 4", match: (p: string) => p === "/labs/lab4" || p.startsWith("/labs/lab4/") },
  { href: "/labs/lab5", id: "wd-lab5-toc-link", label: "Lab 5", match: (p: string) => p === "/labs/lab5" || p.startsWith("/labs/lab5/") },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "https://github.com/zengby-aa/webdev-client", id: "wd-github-toc", label: "GitHub", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <nav aria-label="Labs navigation">
    <ul className="m-0 flex min-w-[110px] list-none flex-col gap-1 p-2">
      {LINKS.map((link) => {
        const active = link.match(pathname);
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              id={link.id}
              className={`block rounded-md px-3 py-2 text-sm font-medium no-underline ${active ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50"}`}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
    </nav>
  );
}
