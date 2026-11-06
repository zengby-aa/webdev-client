"use client";

import Link from "next/link";

export default function EditorActions({ cid }: { cid: string }) {
  return (
    <div className="mt-5 flex justify-end gap-2 border-t border-neutral-200 pt-3">
      <Link id="wd-cancel" href={`/courses/${cid}/assignments`} className="rounded border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm text-neutral-900 no-underline">
        Cancel
      </Link>
      <button id="wd-save" type="submit" className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white">
        Save
      </button>
    </div>
  );
}
