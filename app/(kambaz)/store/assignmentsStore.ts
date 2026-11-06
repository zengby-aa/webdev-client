"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & {
  until?: string;
};
export type NewAssignment = Omit<Assignment, "_id">;

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: NewAssignment) => string | null;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string, courseId: string) => void;
};

export function canManageAssignments(role?: string) {
  return role === "FACULTY" || role === "ADMIN";
}

function isValidAssignment(assignment: NewAssignment) {
  return Boolean(
    assignment.title.trim() &&
      assignment.course &&
      Number.isFinite(assignment.points) &&
      assignment.points >= 0,
  );
}

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson,
  addAssignment: (assignment) => {
    if (!isValidAssignment(assignment)) return null;
    const _id = crypto.randomUUID();
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id, title: assignment.title.trim() },
      ],
    }));
    return _id;
  },
  updateAssignment: (assignment) => {
    if (!isValidAssignment(assignment)) return;
    set((state) => ({
      assignments: state.assignments.map((current) =>
        current._id === assignment._id && current.course === assignment.course
          ? { ...current, ...assignment, title: assignment.title.trim() }
          : current,
      ),
    }));
  },
  deleteAssignment: (assignmentId, courseId) =>
    set((state) => ({
      assignments: state.assignments.filter(
        (assignment) =>
          assignment._id !== assignmentId || assignment.course !== courseId,
      ),
    })),
}));
