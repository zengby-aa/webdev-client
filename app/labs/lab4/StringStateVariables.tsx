"use client";

import { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("Baoyuan");
  const [nickName, setNickName] = useState("JD");
  const [lastName, setLastName] = useState("");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName} {lastName}</p>
      <p>{nickName}</p>
      <label htmlFor="wd-first-name" className="block">First Name</label>
      <input
        className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="wd-first-name"
      />
      <label htmlFor="wd-last-name" className="block">Last Name</label>
      <input
        className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        id="wd-last-name"
      />
      <label htmlFor="wd-nick-name" className="block">Nickname</label>
      <input
        className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        id="wd-nick-name"
      />
      <hr />
    </div>
  );
}
