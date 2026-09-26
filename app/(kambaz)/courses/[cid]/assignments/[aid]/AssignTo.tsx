"use client";

import { useRef, useState } from "react";
import styles from "./AssignTo.module.css";

const roles = [
  { value: "ta", label: "TA" },
  { value: "professor", label: "Professor" },
  { value: "student", label: "Student" },
];

export default function AssignTo() {
  const [selected, setSelected] = useState(roles.map((role) => role.value));
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const search = useRef<HTMLInputElement>(null);
  const tags = selected.length === roles.length
    ? [{ value: "everyone", label: "Everyone" }]
    : roles.filter((role) => selected.includes(role.value));
  const visible = roles.filter((role) =>
    (role.label + " " + role.value).toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className={styles.root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
          setQuery("");
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          search.current?.focus();
          setOpen(false);
          setQuery("");
        }
      }}>
      <label className={styles.heading} htmlFor="wd-assign-to">Assign to</label>
      <div className={styles.control}>
        {tags.map((role) => (
          <span className={styles.tag} key={role.value}>
            {role.label}
            <button type="button" aria-label={"Remove " + role.label}
              onClick={() => setSelected((current) => role.value === "everyone" ? [] : current.filter((value) => value !== role.value))}>
              ×
            </button>
          </span>
        ))}
        <input ref={search} id="wd-assign-to" className={styles.search}
          value={query}
          aria-controls="wd-assign-to-options"
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          onChange={(event) => { setQuery(event.target.value); setOpen(true); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); }
          }} />
        <button className={styles.toggle} type="button"
          aria-label={open ? "Collapse role list" : "Expand role list"}
          aria-expanded={open} aria-controls="wd-assign-to-options"
          onClick={() => setOpen(!open)}>▾</button>
      </div>
      {open && (
        <fieldset id="wd-assign-to-options" className={styles.options}>
          <legend>Select roles</legend>
          <div className={styles.actions}>
            <button type="button" onClick={() => setSelected(roles.map((role) => role.value))}>Select all</button>
            <button type="button" onClick={() => setSelected([])}>Deselect all</button>
          </div>
          {visible.map((role) => (
            <label className={styles.option} key={role.value} htmlFor={"wd-assign-to-" + role.value}>
              <input id={"wd-assign-to-" + role.value} type="checkbox"
                checked={selected.includes(role.value)}
                onChange={(event) => {
                  const checked = event.target.checked;
                  setSelected((current) => checked ? [...current, role.value] : current.filter((value) => value !== role.value));
                }} />
              {role.label}
            </label>
          ))}
          {visible.length === 0 && <p role="status">No matching roles</p>}
        </fieldset>
      )}
      {selected.map((role) => <input key={role} type="hidden" name="assignTo" value={role} />)}
    </div>
  );
}
