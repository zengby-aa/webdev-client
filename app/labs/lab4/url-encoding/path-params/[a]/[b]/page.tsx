"use client";

import { useParams } from "next/navigation";

export default function PathCalculator() {
  const params = useParams();
  const aRaw = params.a as string;
  const bRaw = params.b as string;
  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);
  const cRaw = params.c as string | undefined;
  const sum = a + b + parseFloat(cRaw ?? "0");
  return (
    <div id="wd-path-calculator">
      <h1>Calculator – Path Parameters</h1>
      <p>Raw path segments (already decoded by Next.js):</p>
      <p>
        a = <code>{aRaw}</code>
      </p>
      <p>
        b = <code>{bRaw}</code>
      </p>
      {cRaw !== undefined && <p>c = <code>{cRaw}</code></p>}
      <h2 className="text-green-700">Sum = {sum}</h2>
    </div>
  );
}
