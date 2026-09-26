"use client";

import { useRouter } from "next/navigation";

export default function EditorActions({ cid }: { cid: string }) {
  const router = useRouter();
  const returnToList = () => router.push(`/courses/${cid}/assignments`);

  return (
    <div>
      <button id="wd-cancel" type="button" onClick={returnToList}>
        Cancel
      </button>{" "}
      <button id="wd-save" type="button" onClick={returnToList}>
        Save
      </button>
    </div>
  );
}
