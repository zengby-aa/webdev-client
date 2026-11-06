"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import { canManageCourses, useAccountContext } from "../account/AccountContext";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const canManage = canManageCourses(currentUser?.role);
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const visibleCourses = courses.filter((item) => showAllCourses || (
    currentUser && enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === item._id)
  ));

  return (
    <div id="wd-dashboard">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h1 id="wd-dashboard-title" className="m-0 text-2xl font-semibold">Dashboard</h1>
        <button
          id="wd-enrollments-toggle"
          type="button"
          aria-pressed={showAllCourses}
          onClick={() => setShowAllCourses((current) => !current)}
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white"
        >
          Enrollments
        </button>
      </div>
      <hr />
      {!currentUser && (
        <p className="my-4">
          <Link href="/account/signin" className="text-blue-600 underline">Sign in</Link> to view and enroll in courses.
        </p>
      )}
      {canManage && <>
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => {
            if (!currentUser || !canManage || !course.name.trim()) return;
            const created = addCourse({ ...course, name: course.name.trim() });
            enroll(currentUser._id, created._id);
            setCourse(emptyCourse);
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => { if (canManage) updateCourse(course); }}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
        aria-label="Course name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
        aria-label="Course description"
      />
      <label htmlFor="wd-course-number" className="block">Course Number</label>
      <input
        id="wd-course-number"
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <label htmlFor="wd-course-start-date" className="block">Start Date</label>
      <input
        id="wd-course-start-date"
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <hr />
      </>}
      <h2 id="wd-dashboard-published" className="my-3 text-xl font-semibold">
        {showAllCourses ? "All Courses" : "Published Courses"} ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
          />
        ))}
      </div>
      {currentUser && visibleCourses.length === 0 && (
        <p className="mt-4 text-neutral-600" role="status">
          You are not enrolled in any courses. Click Enrollments to browse all courses.
        </p>
      )}
    </div>
  );
}
