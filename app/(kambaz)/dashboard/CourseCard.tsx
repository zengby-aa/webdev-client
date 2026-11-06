"use client";

import Link from "next/link";
import Image from "next/image";
import { canManageCourses, useAccountContext } from "../account/AccountContext";
import { useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export default function CourseCard({ course, onEdit }: { course: Course; onEdit: () => void }) {
  const { currentUser } = useAccountContext();
  const canManage = canManageCourses(currentUser?.role);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const isEnrolled = Boolean(currentUser && enrollments.some(
    (item) => item.user === currentUser._id && item.course === course._id,
  ));
  const href = `/courses/${course._id}/home`;
  const content = (
    <>
      <Image src={course.image} width={300} height={160} alt={course.name} className="h-40 w-full object-cover" />
      <div className="px-4 pt-4">
        <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold" title={course.name}>{course.name}</h5>
        <p className="wd-dashboard-course-description m-0 h-[100px] overflow-hidden text-sm text-neutral-600">{course.description}</p>
      </div>
    </>
  );

  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      {isEnrolled ? (
        <Link href={href} className="wd-dashboard-course-link block text-neutral-900 no-underline">{content}</Link>
      ) : <div>{content}</div>}
      <div className="flex flex-wrap items-center gap-2 p-4">
        {isEnrolled ? (
          <Link href={href} aria-label={`Open ${course.name}`} className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white no-underline">Go</Link>
        ) : (
          <button type="button" disabled title="Enroll to open this course" className="rounded bg-neutral-200 px-3 py-1.5 text-sm text-neutral-500">Go</button>
        )}
        {currentUser && (
          <button
            type="button"
            aria-label={`${isEnrolled ? "Unenroll from" : "Enroll in"} ${course.name}`}
            onClick={() => {
              if (isEnrolled) unenroll(currentUser._id, course._id);
              else enroll(currentUser._id, course._id);
            }}
            className={`rounded px-3 py-1.5 text-sm font-medium text-white ${isEnrolled ? "bg-red-600" : "bg-green-700"}`}
          >
            {isEnrolled ? "Unenroll" : "Enroll"}
          </button>
        )}
        {canManage && (
          <>
            <button type="button" id="wd-edit-course-click" onClick={onEdit} className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium">Edit</button>
            <button type="button" id="wd-delete-course-click" onClick={() => deleteCourse(course._id)} className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
