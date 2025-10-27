"use client";
import { useState } from "react";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-medium">{title}</span>
        <span aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="mt-2 text-sm">{children}</div>}
    </div>
  );
}
