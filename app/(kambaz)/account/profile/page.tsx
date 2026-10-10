import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="w-full max-w-sm">
      <h3 className="m-0 mb-3 text-2xl font-semibold">Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
      />

      <input className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" defaultValue="Alice" placeholder="First Name" id="wd-firstname" />

      <input className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />

      <input className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" defaultValue="2000-01-01" type="date" id="wd-dob" />

      <input className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" defaultValue="alice@wonderland" type="email" id="wd-email" />

      <select aria-label="Role" className="mb-2 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline" href="/account/signin">Sign out</Link>
    </div>
  );
}
