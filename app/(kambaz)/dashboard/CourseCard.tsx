"use client";

import Link from "next/link";
import Image from "next/image";
import { canManageCourses, useAccountContext } from "../account/AccountContext";
import { useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export default function CourseCard({
  course,
  onEdit,
}: {
  course: Course;
  onEdit: () => void;
}) {
  const { currentUser } = useAccountContext();
  const canManage = !currentUser || canManageCourses(currentUser.role);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const isEnrolled = Boolean(currentUser && enrollments.some(
    (item) => item.user === currentUser._id && item.course === course._id,
  ));
  const canFollowCourseLink = !currentUser || isEnrolled;
  const href = `/courses/${encodeURIComponent(course._id)}/home`;
  const content = (
    <>
      <Image
        src={course.image}
        width={300}
        height={160}
        alt={course.name}
        className="h-40 w-full object-cover"
      />
      <div className="px-4 pt-4">
        <h5 className="wd-dashboard-course-title m-0 mb-2 truncate whitespace-nowrap text-lg font-semibold" title={course.name}>
          {course.name}
        </h5>
        <p className="wd-dashboard-course-description m-0 h-[100px] overflow-hidden text-sm text-neutral-600">
          {course.description}
        </p>
      </div>
    </>
  );
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      {canFollowCourseLink ? (
        <Link href={href} className="wd-dashboard-course-link block text-neutral-900 no-underline">{content}</Link>
      ) : <div>{content}</div>}
      <div className="flex flex-wrap items-center gap-2 p-4">
        {canFollowCourseLink ? (
          <Link href={href} aria-label={`Open ${course.name}`} className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white no-underline">Go</Link>
        ) : (
          <button
            type="button"
            disabled
            title="Enroll to open this course"
            className="rounded bg-neutral-200 px-3 py-1.5 text-sm text-neutral-500"
          >
            Go
          </button>
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
        {canManage && <>
          <button
            type="button"
            id="wd-edit-course-click"
            className="ms-2 inline-flex items-center justify-center rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            onClick={(event) => {
              event.preventDefault();
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            id="wd-delete-course-click"
            className="ms-2 inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
          >
            Delete
          </button>
        </>}
      </div>
    </div>
  );
}
