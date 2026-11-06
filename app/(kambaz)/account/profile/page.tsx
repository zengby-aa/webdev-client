"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const { currentUser } = useAccountContext();

  if (!currentUser) redirect("/account/signin");

  return <ProfileForm key={currentUser._id} initialProfile={currentUser} />;
}

function ProfileForm({ initialProfile }: { initialProfile: User }) {
  const [profile, setProfile] = useState<User>({ ...initialProfile });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signout = () => {
    setCurrentUser(null);
    router.replace("/account/signin");
  };

  return (
    <div id="wd-profile-screen" className="w-full max-w-sm">
      <h3 className="m-0 mb-3 text-2xl font-semibold">Profile</h3>
      <label htmlFor="wd-username" className="mb-1 block">Username</label>
      <input
        id="wd-username"
        name="username"
        autoComplete="username"
        className="mb-3 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <label htmlFor="wd-password" className="mb-1 block">Password</label>
      <input
        id="wd-password"
        name="password"
        type="password"
        autoComplete="current-password"
        className="mb-3 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <label htmlFor="wd-firstname" className="mb-1 block">First name</label>
      <input
        id="wd-firstname"
        name="firstName"
        autoComplete="given-name"
        className="mb-3 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <label htmlFor="wd-lastname" className="mb-1 block">Last name</label>
      <input
        id="wd-lastname"
        name="lastName"
        autoComplete="family-name"
        className="mb-3 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <label htmlFor="wd-email" className="mb-1 block">Email</label>
      <input
        id="wd-email"
        name="email"
        type="email"
        autoComplete="email"
        className="mb-3 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <label htmlFor="wd-role" className="mb-1 block">Role</label>
      <select
        id="wd-role"
        name="role"
        className="mb-3 box-border w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">Teaching Assistant</option>
      </select>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
