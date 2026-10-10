"use client";

import { useRouter } from "next/navigation";

export default function EditorActions({ cid }: { cid: string }) {
  const router = useRouter();
  const returnToList = () => router.push(`/courses/${cid}/assignments`);

  return (
    <div className="mt-5 flex justify-end gap-2 border-t border-neutral-200 pt-3">
      <button id="wd-cancel" type="button" onClick={returnToList} className="rounded border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm">
        Cancel
      </button>{" "}
      <button id="wd-save" type="button" onClick={returnToList} className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white">
        Save
      </button>
    </div>
  );
}
