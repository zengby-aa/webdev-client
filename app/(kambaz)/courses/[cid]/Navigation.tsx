"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const assignments = `/courses/${cid}/assignments`;
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link
        href={home}
        id="wd-course-home-link"
        className={
          pathname === home
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={
          pathname === assignments || pathname.startsWith(assignments + "/")
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>
      {[
        { path: "modules", label: "Modules" },
        { path: "piazza", label: "Piazza" },
        { path: "zoom", label: "Zoom" },
        { path: "quizzes", label: "Quizzes" },
        { path: "grades", label: "Grades" },
        { path: "people", label: "People", destination: "people/table" },
      ].map(({ path, label, destination }) => {
        const route = `/courses/${cid}/${path}`;
        const active = pathname === route || pathname.startsWith(route + "/");
        return (
          <Link
            key={path}
            href={`/courses/${cid}/${destination ?? path}`}
            id={`wd-course-${path}-link`}
            aria-current={active ? "page" : undefined}
            className={active ? "list-group-item active border-0" : "list-group-item border-0 text-red-600"}
          >
            {label}
          </Link>
        );
      })}
      <Link href={home} id="wd-course-ai-link" className="list-group-item border-0 text-red-600">
        Sample
      </Link>
    </div>
  );
}
