import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4: React Components</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5: Next.js Routing</Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">Kambaz</Link>
        </li>
        <li>
        <a
            id="wd-github"
            href="https://github.com/zengby-aa/webdev-client"
        >
            GitHub Repository
        </a>
        </li>
      </ul>
    </div>
  );
}

