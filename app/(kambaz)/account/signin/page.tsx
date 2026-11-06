"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  return <Suspense fallback={<p>Loading sign in…</p>}><SigninForm /></Suspense>;
}

function SigninForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { users, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");

  const signin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) {
      setError("Incorrect username or password.");
      return;
    }
    setCurrentUser(user);
    const next = searchParams.get("next");
    const destination = next && (next === "/dashboard" || /^\/courses\/[^/]+\/(home|modules|assignments(?:\/[^/]+)?|people\/table|grades|quizzes|piazza|zoom)$/.test(next))
      ? next : "/dashboard";
    router.push(destination);
  };

  return (
    <form id="wd-signin-screen" className="w-full max-w-sm" onSubmit={(event) => { event.preventDefault(); signin(); }}>
      <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
      <label htmlFor="wd-username" className="mb-1 block">Username</label>
      <input
        placeholder="username"
        id="wd-username"
        autoComplete="username"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <label htmlFor="wd-password" className="mb-1 block">Password</label>
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        autoComplete="current-password"
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {error && <p role="alert" className="mb-3 text-red-600">{error}</p>}
      <button type="submit" id="wd-signin-btn" className="mb-3 block w-full rounded bg-blue-600 px-3 py-2 font-medium text-white">
        Sign in
      </button>
      <Link href="/account/signup" id="wd-signup-link" className="text-blue-600 underline">
        Sign up
      </Link>
      <div className="mt-4 rounded border border-neutral-200 bg-neutral-50 p-3 text-sm">
        <p className="font-semibold">Demo accounts</p>
        <p>Faculty: <code>nick_fury</code> / <code>fury123</code></p>
        <p>Student: <code>iron_man</code> / <code>stark123</code></p>
        <p className="mt-2">After signing in, Faculty can manage courses and Students can view their enrolled courses.</p>
      </div>
    </form>
  );
}
