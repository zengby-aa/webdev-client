"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { addUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = () => {
    if (!username.trim() || !password) return;
    const user = addUser({
      ...emptyUser,
      username,
      password,
    });
    if (!user) {
      setError("Username already exists.");
      return;
    }
    setCurrentUser(user);
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="w-full max-w-sm">
      <h3 className="m-0 mb-3 text-2xl font-semibold">Sign up</h3>
      {error && <p role="alert" className="mb-3 text-red-700">{error}</p>}
      <input
        id="wd-username"
        aria-label="Username"
        autoComplete="username"
        placeholder="username"
        className="mb-2 block w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        aria-label="Password"
        autoComplete="new-password"
        placeholder="password"
        type="password"
        className="mb-3 block w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-3 block w-full rounded bg-blue-600 px-3 py-2 text-center font-medium text-white"
      >
        Sign up
      </button>
      <Link
        href="/account/signin"
        id="wd-signin-link"
        className="text-blue-600 underline"
      >
        Sign in
      </Link>
    </div>
  );
}
