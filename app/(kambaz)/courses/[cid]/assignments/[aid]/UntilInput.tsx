"use client";

import styles from "./AssignSection.module.css";

export default function UntilInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <input
      id="wd-available-until"
      type="datetime-local"
      value={value}
      className={!value ? styles.emptyDate : undefined}
      onInput={(event) => onChange(event.currentTarget.value)}
    />
  );
}
