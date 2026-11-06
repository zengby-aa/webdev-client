"use client";

import { useEffect, useRef } from "react";

export default function DeleteAssignmentDialog({
  title,
  onCancel,
  onConfirm,
}: {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="wd-delete-assignment-title"
      aria-describedby="wd-delete-assignment-description"
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md rounded-lg border border-neutral-300 bg-white p-0 text-neutral-900 shadow-xl backdrop:bg-black/40"
      onCancel={(event) => {
        event.preventDefault();
        onCancel();
      }}
    >
      <div className="p-5">
        <h3 id="wd-delete-assignment-title" className="m-0 mb-3 text-xl font-semibold">
          Delete assignment?
        </h3>
        <p id="wd-delete-assignment-description" className="m-0 break-words">
          Are you sure you want to delete <strong>{title}</strong>?
        </p>
      </div>
      <div className="flex justify-end gap-2 border-t border-neutral-200 bg-neutral-50 px-5 py-3">
        <button
          type="button"
          autoFocus
          onClick={onCancel}
          className="rounded border border-neutral-300 bg-white px-4 py-2"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded bg-red-600 px-4 py-2 font-medium text-white"
        >
          Delete
        </button>
      </div>
    </dialog>
  );
}
