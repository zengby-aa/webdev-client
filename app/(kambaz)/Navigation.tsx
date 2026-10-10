"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBook, FaRegCalendarAlt, FaInbox, FaFlask, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { href: "/account", id: "wd-account-link", label: "Account", Icon: FaRegCircleUser },
    { href: "/dashboard", id: "wd-dashboard-link", label: "Dashboard", Icon: AiOutlineDashboard },
    { href: "/dashboard", match: "/courses", id: "wd-course-link", label: "Courses", Icon: FaBook },
    { href: "/calendar", id: "wd-calendar-link", label: "Calendar", Icon: FaRegCalendarAlt },
    { href: "/inbox", id: "wd-inbox-link", label: "Inbox", Icon: FaInbox },
    { href: "/labs", id: "wd-labs-link", label: "Labs", Icon: FaFlask },
    { href: "/labs", id: "wd-ai-nav-help", label: "Help", Icon: FaQuestionCircle },
  ];
  return (
    <nav
      id="wd-kambaz-navigation"
      aria-label="Kambaz navigation"
      className="fixed bottom-0 left-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      {links.map(({ href, match, id, label, Icon }) => {
        const route = match ?? href;
        const active = id !== "wd-ai-nav-help" && (pathname === route || pathname.startsWith(`${route}/`));
        return (
          <Link key={id} href={href} id={id} aria-current={active ? "page" : undefined} className={`wd-nav-tile${active ? " wd-nav-active" : ""}`}>
            <Icon aria-hidden="true" className={`wd-nav-icon${id === "wd-account-link" ? " wd-account-icon" : ""}`} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
