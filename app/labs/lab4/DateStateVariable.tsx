"use client";

import { useState } from "react";

function dateObjectToHtmlDateString(date: Date | null) {
  if (date === null) return "";
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function htmlDateStringToDate(dateString: string) {
  if (!dateString) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(0);
  date.setFullYear(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  return date;
}

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2026, 0, 15, 10, 30));
  const [dueDate, setDueDate] = useState<Date | null>(new Date(2026, 0, 22, 10, 30));
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate?.toDateString()}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <label htmlFor="wd-start-date" className="block">Start Date</label>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(htmlDateStringToDate(e.target.value))}
        id="wd-start-date"
      />
      <label htmlFor="wd-end-date" className="block">End Date</label>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dateObjectToHtmlDateString(endDate)}
        onChange={(e) => setEndDate(htmlDateStringToDate(e.target.value))}
        id="wd-end-date"
      />
      <h3>{endDate?.toDateString()}</h3>
      <h3>{dateObjectToHtmlDateString(endDate)}</h3>
      <label htmlFor="wd-due-date" className="block">Due Date</label>
      <input
        type="date"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={dateObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(htmlDateStringToDate(e.target.value))}
        id="wd-due-date"
      />
      <hr />
    </div>
  );
}
