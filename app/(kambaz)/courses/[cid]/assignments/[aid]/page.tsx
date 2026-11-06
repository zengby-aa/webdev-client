"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAccountContext } from "../../../../account/AccountContext";
import { canManageAssignments, useAssignmentsStore, type Assignment } from "../../../../store/assignmentsStore";
import { formatAssignmentDate } from "../AssignmentItem";
import EditorActions from "./EditorActions";
import UntilInput from "./UntilInput";
import styles from "./AssignSection.module.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = (Array.isArray(cid) ? cid[0] : cid) ?? "";
  const assignmentId = Array.isArray(aid) ? aid[0] : aid;
  const { currentUser } = useAccountContext();
  const canManage = canManageAssignments(currentUser?.role);
  const assignments = useAssignmentsStore((state) => state.assignments);
  const assignment = assignments.find(
    (item) => item._id === assignmentId && item.course === courseId,
  );
  const isNew = assignmentId === "new";
  const listHref = `/courses/${courseId}/assignments`;

  if (isNew && !canManage) {
    return (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Create assignment</h3>
        <p>A faculty or administrator account is required to create assignments.</p>
        <Link href={currentUser ? listHref : "/account/signin"} className="text-blue-600 underline">
          {currentUser ? "Back to assignments" : "Sign in"}
        </Link>
      </div>
    );
  }

  if (!isNew && !assignment) {
    return (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Assignment not found</h3>
        <Link href={listHref} className="text-blue-600 underline">Back to assignments</Link>
      </div>
    );
  }

  if (assignment && !canManage) {
    return (
      <article id="wd-assignment-details" className="max-w-3xl space-y-5">
        <h3 className="m-0 text-2xl font-semibold">{assignment.title}</h3>
        <p className="whitespace-pre-wrap">{assignment.description || "No description provided."}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3">
          <dt className="font-semibold">Points</dt><dd>{assignment.points}</dd>
          <dt className="font-semibold">Due</dt><dd>{formatAssignmentDate(assignment.due) || "No due date"}</dd>
          <dt className="font-semibold">Available from</dt><dd>{formatAssignmentDate(assignment.available) || "Not set"}</dd>
          <dt className="font-semibold">Until</dt><dd>{formatAssignmentDate(assignment.until ?? "") || "Not set"}</dd>
        </dl>
        <Link href={listHref} className="inline-block rounded border border-neutral-300 bg-neutral-50 px-4 py-2 text-neutral-900 no-underline">Back to assignments</Link>
      </article>
    );
  }

  const initialAssignment: Assignment = assignment ?? {
    _id: "",
    course: courseId,
    title: "New Assignment",
    description: "",
    points: 100,
    due: "",
    available: "",
    until: "",
  };
  return <AssignmentForm key={`${courseId}/${assignmentId}`} initialAssignment={initialAssignment} isNew={isNew} />;
}

function toDateTime(value: string, time: string) {
  return value && !value.includes("T") ? `${value}T${time}` : value;
}

function AssignmentForm({ initialAssignment, isNew }: { initialAssignment: Assignment; isNew: boolean }) {
  const [draft, setDraft] = useState(() => ({
    title: initialAssignment.title,
    description: initialAssignment.description,
    points: String(initialAssignment.points),
    due: toDateTime(initialAssignment.due, "23:59"),
    available: toDateTime(initialAssignment.available, "00:00"),
    until: toDateTime(initialAssignment.until ?? "", "23:59"),
  }));
  const [error, setError] = useState("");
  const { currentUser } = useAccountContext();
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const router = useRouter();

  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canManageAssignments(currentUser?.role)) return;
    const title = draft.title.trim();
    const points = Number(draft.points);
    if (!title) {
      setError("Enter an assignment name.");
      return;
    }
    if (!draft.points.trim() || !Number.isFinite(points) || points < 0) {
      setError("Points must be a number greater than or equal to zero.");
      return;
    }
    if (draft.available && draft.until && draft.until < draft.available) {
      setError("Until must be on or after Available from.");
      return;
    }
    const assignment = { ...initialAssignment, ...draft, title, points };
    if (isNew) {
      if (!addAssignment(assignment)) return;
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${initialAssignment.course}/assignments`);
  }

  return (
    <form id="wd-assignments-editor" onSubmit={save} className="max-w-3xl space-y-5">
      <div>
        <label htmlFor="wd-name" className="mb-2 block text-lg">Assignment Name</label>
        <input
          id="wd-name"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
          value={draft.title}
          onChange={(event) => setDraft({ ...draft, title: event.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="wd-description" className="sr-only">Assignment description</label>
        <textarea
          id="wd-description"
          placeholder="New Assignment Description"
          rows={6}
          className="w-full rounded border border-neutral-300 bg-white px-3 py-3"
          value={draft.description}
          onChange={(event) => setDraft({ ...draft, description: event.target.value })}
        />
      </div>
      <div className="grid items-start gap-3 sm:grid-cols-[120px_minmax(0,1fr)]">
        <label htmlFor="wd-points" className="pt-2 sm:text-right">Points</label>
        <input
          id="wd-points"
          type="number"
          min="0"
          step="any"
          required
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
          value={draft.points}
          onChange={(event) => setDraft({ ...draft, points: event.target.value })}
        />
      </div>
      <div className="grid items-start gap-3 sm:grid-cols-[120px_minmax(0,1fr)]">
        <span className="pt-3 sm:text-right">Assign</span>
        <div className={styles.panel}>
          <div className={styles.field}>
            <label htmlFor="wd-due-date">Due</label>
            <input
              id="wd-due-date"
              type="datetime-local"
              value={draft.due}
              onInput={(event) => {
                const due = event.currentTarget.value;
                setDraft((current) => ({ ...current, due }));
              }}
            />
          </div>
          <div className={styles.dates}>
            <div className={styles.field}>
              <label htmlFor="wd-available-from">Available from</label>
              <input
                id="wd-available-from"
                type="datetime-local"
                value={draft.available}
                onInput={(event) => {
                  const available = event.currentTarget.value;
                  setDraft((current) => ({ ...current, available }));
                }}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="wd-available-until">Until</label>
              <UntilInput value={draft.until} onChange={(until) => setDraft((current) => ({ ...current, until }))} />
            </div>
          </div>
        </div>
      </div>
      {error && <p role="alert" className="text-red-700">{error}</p>}
      <EditorActions cid={initialAssignment.course} />
    </form>
  );
}
