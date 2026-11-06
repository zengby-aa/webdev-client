"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UrlEncoding() {
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");
  const [c, setC] = useState("2");
  const router = useRouter();
  const baseUrl = "/labs/lab4/url-encoding";

  const queryUrl = `${baseUrl}/query-params?${new URLSearchParams({ a, b, c })}`;
  const pathSegments = [a, b, c].map((value) => encodeURIComponent(value || "0"));
  const pathUrl = `${baseUrl}/path-params/${pathSegments.join("/")}`;

  return (
    <div id="wd-url-encoding" className="max-w-xl">
      <h2>Addition Calculator</h2>
      <p>
        Enter three numbers and navigate using either buttons (programmatic) or
        links (declarative):
      </p>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-a"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-b"
      />
      <input
        type="number"
        aria-label="Third number"
        value={c}
        onChange={(e) => setC(e.target.value)}
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
        id="wd-url-c"
      />
      <h4>Programmatic navigation (using router.push):</h4>
      <button
        type="button"
        onClick={() => router.push(queryUrl)}
        className="mb-2 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-url-query-programmatic"
      >
        {a} + {b} + {c} → Query Params (programmatic)
      </button>
      <button
        type="button"
        onClick={() => router.push(pathUrl)}
        className="mb-3 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-url-path-programmatic"
      >
        {a} + {b} + {c} → Path Params (programmatic)
      </button>
      <h4>Declarative navigation (using Link):</h4>
      <Link
        href={queryUrl}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline"
        id="wd-url-query-link"
      >
        {a} + {b} + {c} → Query Params (Link)
      </Link>
      <Link
        href={pathUrl}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline"
        id="wd-url-path-link"
      >
        {a} + {b} + {c} → Path Params (Link)
      </Link>
      <hr />
    </div>
  );
}
