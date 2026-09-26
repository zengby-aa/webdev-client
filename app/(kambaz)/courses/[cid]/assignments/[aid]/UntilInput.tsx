"use client";

import { useState } from "react";
import styles from "./AssignSection.module.css";

export default function UntilInput() {
  const [empty, setEmpty] = useState(true);

  return (
    <input
      id="wd-available-until"
      type="datetime-local"
      className={empty ? styles.emptyDate : undefined}
      onChange={(event) => setEmpty(event.currentTarget.value === "")}
    />
  );
}
