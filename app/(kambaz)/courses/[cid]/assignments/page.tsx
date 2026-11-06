"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import { FaChevronDown, FaEllipsisV, FaPlus, FaSearch } from "react-icons/fa";
import { useAccountContext } from "../../../account/AccountContext";
import { canManageAssignments, useAssignmentsStore } from "../../../store/assignmentsStore";
import AssignmentItem from "./AssignmentItem";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const { currentUser } = useAccountContext();
  const canManage = canManageAssignments(currentUser?.role);
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [query, setQuery] = useState("");
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const pendingDelete = allAssignments.find(
    (assignment) => assignment._id === pendingDeleteId && assignment.course === courseId,
  );
  const assignments = allAssignments.filter(
    (assignment) => assignment.course === courseId &&
      assignment.title.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const createHref = `/courses/${courseId}/assignments/new`;

  return (
    <div id="wd-assignments">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <div className="relative w-full sm:w-72">
          <FaSearch aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            aria-label="Search for Assignments"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="w-full rounded border border-neutral-300 bg-white py-2 pr-3 pl-9 text-sm"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        {canManage && (
          <div className="flex items-center gap-2">
            <button
              id="wd-add-assignment-group"
              type="button"
              className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-neutral-50 px-4 py-2"
            >
              <FaPlus aria-hidden="true" /> Group
            </button>
            <Link href={createHref} id="wd-add-assignment" className="inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2 font-medium text-white no-underline">
              <FaPlus aria-hidden="true" /> Assignment
            </Link>
          </div>
        )}
      </div>
      <div className="overflow-hidden border border-neutral-300">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-300 bg-neutral-100 px-3 py-4">
          <h3 id="wd-assignments-title" className="m-0 flex items-center gap-2 text-lg font-semibold">
            <BsGripVertical aria-hidden="true" className="text-xl" />
            <FaChevronDown aria-hidden="true" className="text-xs" />
            ASSIGNMENTS
          </h3>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-neutral-400 px-3 py-1 text-sm">40% of Total</span>
            {canManage && (
              <>
                <Link href={createHref} aria-label="Add assignment" className="text-neutral-700">
                  <FaPlus aria-hidden="true" />
                </Link>
                <FaEllipsisV aria-hidden="true" className="text-neutral-600" />
              </>
            )}
          </div>
        </div>
        <ul id="wd-assignment-list" className="m-0 list-none p-0">
          {assignments.map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              assignment={assignment}
              canManage={canManage}
              onDelete={() => {
                if (canManage) setPendingDeleteId(assignment._id);
              }}
            />
          ))}
        </ul>
        {assignments.length === 0 && (
          <p className="m-0 p-5 text-neutral-600" role="status">
            {query.trim() ? "No assignments match your search." : "No assignments yet."}
          </p>
        )}
      </div>
      {canManage && pendingDelete && (
        <DeleteAssignmentDialog
          key={pendingDelete._id}
          title={pendingDelete.title}
          onCancel={() => setPendingDeleteId(null)}
          onConfirm={() => {
            if (canManage && courseId) deleteAssignment(pendingDelete._id, courseId);
            setPendingDeleteId(null);
          }}
        />
      )}
    </div>
  );
}
