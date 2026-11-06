import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaEllipsisV, FaPencilAlt, FaRegEdit, FaTrash } from "react-icons/fa";
import type { Assignment } from "../../../store/assignmentsStore";

export function formatAssignmentDate(value: string) {
  if (!value) return "";
  const date = new Date(value.includes("T") ? value : `${value}T00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...(value.includes("T") ? { hour: "numeric", minute: "2-digit" } as const : {}),
  }).format(date);
}

export default function AssignmentItem({ assignment, canManage, onDelete }: {
  assignment: Assignment;
  canManage: boolean;
  onDelete: () => void;
}) {
  const href = `/courses/${assignment.course}/assignments/${assignment._id}`;
  return (
    <li className="wd-assignment-list-item flex items-center gap-3 border-b border-neutral-300 border-l-[4px] border-l-green-600 bg-white px-3 py-5 last:border-b-0">
      <BsGripVertical aria-hidden="true" className="hidden shrink-0 text-xl text-neutral-600 sm:block" />
      <FaRegEdit aria-hidden="true" className="shrink-0 text-2xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link href={href} className="wd-assignment-link break-words text-lg font-semibold text-neutral-900 no-underline hover:underline">
          {assignment.title}
        </Link>
        <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-sm text-neutral-600">
          <span className="text-red-600">Multiple Modules</span>
          {assignment.available && <span>| Available from {formatAssignmentDate(assignment.available)}</span>}
          {assignment.due && <span>| <strong className="font-semibold">Due</strong> {formatAssignmentDate(assignment.due)}</span>}
          <span>| {assignment.points} pts</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <FaCheckCircle aria-label="Published" className="text-xl text-green-700" />
        {canManage && (
          <>
            <Link href={href} aria-label={`Edit ${assignment.title}`} className="text-blue-600">
              <FaPencilAlt aria-hidden="true" />
            </Link>
            <button type="button" onClick={onDelete} aria-label={`Delete ${assignment.title}`} className="cursor-pointer text-red-600">
              <FaTrash aria-hidden="true" />
            </button>
            <FaEllipsisV aria-hidden="true" className="hidden text-neutral-600 sm:block" />
          </>
        )}
      </div>
    </li>
  );
}
