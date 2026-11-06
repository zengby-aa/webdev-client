"use client";

import { ReactNode, useState } from "react";
import { redirect, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const pathname = usePathname();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const course = courses.find((c) => c._id === courseId);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const isCourseDemo = !currentUser && (
    pathname === `/courses/${courseId}/home` || pathname === `/courses/${courseId}/modules`
  );

  if (!course) redirect("/dashboard");

  if (!currentUser && !isCourseDemo) {
    redirect(`/account/signin?next=${encodeURIComponent(pathname)}`);
  }

  if (currentUser && !enrollments.some((item) => item.user === currentUser._id && item.course === courseId)) {
    redirect("/dashboard");
  }

  return (
    <div id="wd-courses">
      {isCourseDemo && (
        <p className="mb-3 text-sm text-neutral-600">
          Course demo. <Link href={`/account/signin?next=${encodeURIComponent(pathname)}`} className="text-blue-600 underline">Sign in</Link> to manage your enrollments.
        </p>
      )}
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
