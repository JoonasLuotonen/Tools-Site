// components/AccordionItem.jsx
"use client";
import { useState } from "react";

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-3"
      >
        <span className="text-base font-semibold">{title}</span>
        <span className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="pb-4 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
