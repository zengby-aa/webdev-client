"use client";

import { useState, type FormEvent } from "react";
import { useParams } from "next/navigation";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import { canManageCourses, emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

const personFields = [
  { key: "username", label: "Username", type: "text", required: true },
  { key: "password", label: "Password", type: "password", required: true },
  { key: "firstName", label: "First name", type: "text", required: false },
  { key: "lastName", label: "Last name", type: "text", required: false },
  { key: "email", label: "Email", type: "email", required: false },
  { key: "loginId", label: "Login ID", type: "text", required: false },
  { key: "section", label: "Section", type: "text", required: false },
] as const;

function personName(user: User) {
  return [user.firstName, user.lastName].filter(Boolean).join(" ") || user.username;
}

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = (Array.isArray(cid) ? cid[0] : cid) ?? "";
  const { users, currentUser, addUser, updateUser } = useAccountContext();
  const canManage = canManageCourses(currentUser?.role);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [draft, setDraft] = useState<User | null>(null);
  const [existingUserId, setExistingUserId] = useState("");
  const [error, setError] = useState("");
  const memberIds = new Set(enrollments.filter((item) => item.course === courseId).map((item) => item.user));
  const enrolled = users.filter((user) => memberIds.has(user._id));
  const availableUsers = users.filter((user) => !memberIds.has(user._id));

  function changeField(field: keyof User, value: string) {
    setDraft((current) => current ? { ...current, [field]: value } : current);
  }

  function savePerson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canManage || !draft || !courseId) return;
    const username = draft.username.trim();
    if (!username) {
      setError("Enter a username.");
      return;
    }
    const original = users.find((user) => user._id === draft._id);
    if ((!original || original.username.toLowerCase() !== username.toLowerCase()) &&
      users.some((user) => user._id !== draft._id && user.username.toLowerCase() === username.toLowerCase())) {
      setError("Username already exists. Choose the existing person above to enroll them.");
      return;
    }
    if (draft._id) {
      updateUser({ ...draft, username });
    } else {
      const created = addUser({ ...draft, username });
      if (!created) {
        setError("Username already exists.");
        return;
      }
      enroll(created._id, courseId);
    }
    setDraft(null);
    setError("");
  }

  return (
    <div id="wd-people-table">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="m-0 text-xl font-semibold">People ({enrolled.length})</h3>
        {canManage && (
          <button type="button" id="wd-add-person" className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white"
            onClick={() => { setDraft({ ...emptyUser }); setError(""); }}>
            <FaPlus aria-hidden="true" /> Add person
          </button>
        )}
      </div>
      {canManage && (
        <div className="mb-4 flex flex-wrap items-end gap-2 rounded border border-neutral-200 bg-neutral-50 p-3">
          <div className="min-w-0 flex-1">
            <label htmlFor="wd-existing-person" className="mb-1 block text-sm font-medium">Add existing person</label>
            <select id="wd-existing-person" className="w-full rounded border border-neutral-300 bg-white px-3 py-2" value={existingUserId} onChange={(event) => setExistingUserId(event.target.value)}>
              <option value="">Choose a person</option>
              {availableUsers.map((user) => <option key={user._id} value={user._id}>{personName(user)} ({user.username})</option>)}
            </select>
          </div>
          <button type="button" disabled={!existingUserId} className="rounded bg-green-700 px-4 py-2 text-white disabled:opacity-50"
            onClick={() => {
              if (canManage && availableUsers.some((user) => user._id === existingUserId)) enroll(existingUserId, courseId);
              setExistingUserId("");
            }}>
            Enroll person
          </button>
        </div>
      )}
      {canManage && draft && (
        <form onSubmit={savePerson} className="mb-5 rounded border border-neutral-300 p-4">
          <h4 className="m-0 mb-4 text-lg font-semibold">{draft._id ? "Edit person" : "New person"}</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {personFields.map((field) => (
              <div key={field.key}>
                <label htmlFor={`wd-person-${field.key}`} className="mb-1 block text-sm font-medium">{field.label}</label>
                <input id={`wd-person-${field.key}`} type={field.type} required={field.required} autoComplete="off"
                  value={draft[field.key]} onChange={(event) => changeField(field.key, event.target.value)}
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2" />
              </div>
            ))}
            <div>
              <label htmlFor="wd-person-role" className="mb-1 block text-sm font-medium">Role</label>
              <select id="wd-person-role" value={draft.role} onChange={(event) => changeField("role", event.target.value)} className="w-full rounded border border-neutral-300 bg-white px-3 py-2">
                <option value="USER">User</option><option value="ADMIN">Admin</option><option value="FACULTY">Faculty</option><option value="STUDENT">Student</option><option value="TA">Teaching Assistant</option>
              </select>
            </div>
          </div>
          {error && <p role="alert" className="mt-3 text-red-700">{error}</p>}
          <div className="mt-4 flex justify-end gap-2">
            <button type="button" onClick={() => { setDraft(null); setError(""); }} className="rounded border border-neutral-300 bg-neutral-50 px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save person</button>
          </div>
        </form>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="p-2">Name</th><th className="p-2">Login ID</th><th className="p-2">Section</th><th className="p-2">Role</th><th className="p-2">Last Activity</th><th className="p-2">Total Activity</th>
              {canManage && <th className="p-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {enrolled.map((user) => (
              <tr key={user._id} className="odd:bg-neutral-50">
                <td className="wd-full-name p-2 text-nowrap"><FaUserCircle aria-hidden="true" className="me-2 inline align-middle text-3xl text-neutral-500" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}<span className="wd-last-name">{user.lastName}</span>{!user.firstName && !user.lastName && user.username}
                </td>
                <td className="wd-login-id p-2">{user.loginId}</td><td className="wd-section p-2">{user.section}</td><td className="wd-role p-2">{user.role}</td><td className="wd-last-activity p-2">{user.lastActivity}</td><td className="wd-total-activity p-2">{user.totalActivity}</td>
                {canManage && (
                  <td className="p-2">
                    <div className="flex gap-2">
                      <button type="button" aria-label={`Edit ${personName(user)}`} className="rounded bg-yellow-400 px-3 py-1.5" onClick={() => { setDraft({ ...user }); setError(""); }}>Edit</button>
                      <button type="button" aria-label={`Remove ${personName(user)} from course`} className="rounded bg-red-600 px-3 py-1.5 text-white" onClick={() => unenroll(user._id, courseId)}>Remove</button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {enrolled.length === 0 && <p role="status" className="py-4 text-neutral-600">No people enrolled in this course.</p>}
    </div>
  );
}
