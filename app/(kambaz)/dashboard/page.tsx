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
  // Keep the signed-out Dashboard CRUD demo from section 4.10.5.3.
  const canManage = !currentUser || canManageCourses(currentUser.role);
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(canManageCourses(currentUser?.role));
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const visibleCourses = courses.filter((item) => !currentUser || showAllCourses || (
    currentUser && enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === item._id)
  ));
  const isEditingCourse = courses.some((item) => item._id === course._id);

  return (
    <div id="wd-dashboard">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h1 id="wd-dashboard-title" className="m-0 text-2xl font-semibold">Dashboard</h1>
        <button
          id="wd-enrollments-toggle"
          type="button"
          aria-pressed={showAllCourses}
          disabled={!currentUser}
          title={currentUser ? "Toggle all courses and enrolled courses" : "Sign in to manage your enrollments"}
          onClick={() => setShowAllCourses((current) => !current)}
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white"
        >
          Enrollments
        </button>
      </div>
      <hr />
      {!currentUser && (
        <p className="my-4">
          Try adding or editing courses below. <Link href="/account/signin" className="text-blue-600 underline">Sign in</Link> to enroll and open course content.
        </p>
      )}
      {currentUser && (
        <p className="mt-3 text-sm text-neutral-600">
          Signed in as {currentUser.firstName} {currentUser.lastName} ({currentUser.role})
        </p>
      )}
      {canManage && (
        <section id="wd-course-form" aria-labelledby="wd-course-form-title" className="my-4 max-w-xl">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 id="wd-course-form-title" className="text-xl font-semibold">
              {isEditingCourse ? "Edit Course" : "New Course"}
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                id="wd-add-new-course-click"
                disabled={!course.name.trim()}
                onClick={() => {
                  if (!canManage || !course.name.trim()) return;
                  const created = addCourse({ ...course, name: course.name.trim() });
                  if (currentUser) enroll(currentUser._id, created._id);
                  setCourse(emptyCourse);
                }}
              >
                Add
              </button>
              <button
                type="button"
                className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
                id="wd-update-course-click"
                disabled={!isEditingCourse || !course.name.trim()}
                onClick={() => {
                  if (!canManage || !isEditingCourse || !course.name.trim()) return;
                  updateCourse({ ...course, name: course.name.trim() });
                  setCourse(emptyCourse);
                }}
              >
                Update
              </button>
            </div>
          </div>
          <label htmlFor="wd-course-name" className="block">Course Name</label>
          <input
            className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            id="wd-course-name"
            aria-label="Course name"
          />
          <label htmlFor="wd-course-description" className="block">Description</label>
          <textarea
            className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
            rows={3}
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            id="wd-course-description"
            aria-label="Course description"
          />
          <label htmlFor="wd-course-number" className="block">Course Number</label>
          <input
            id="wd-course-number"
            className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <label htmlFor="wd-course-start-date" className="block">Start Date</label>
          <input
            id="wd-course-start-date"
            type="date"
            className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
            value={course.startDate}
            onInput={(e) => setCourse({ ...course, startDate: e.currentTarget.value })}
          />
          <hr />
        </section>
      )}
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
            onEdit={() => setCourse({ ...c })}
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
