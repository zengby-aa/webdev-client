import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="w-full max-w-sm">
      <h1 className="m-0 mb-3 text-2xl font-semibold">Sign in</h1>
      <input id="wd-username" aria-label="Username" autoComplete="username" placeholder="username" className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" />
      <input id="wd-password" aria-label="Password" autoComplete="current-password" placeholder="password" type="password" className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" />
      <label htmlFor="wd-ai-signin-note" className="mb-1 block text-sm">Sample note</label>
      <input id="wd-ai-signin-note" placeholder="sample note" className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" />
      <Link id="wd-signin-btn" href="/account/profile" className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">Sign in</Link>
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div>
  );
}
