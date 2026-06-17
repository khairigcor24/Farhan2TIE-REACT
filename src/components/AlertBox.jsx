import React from "react";

export default function AlertBox({ type = "success", message = "", children, className = "" }) {
  const content = message || children;
  if (!content) return null;

  const baseStyles = "rounded-3xl px-5 py-4 text-sm font-semibold shadow-sm border";
  const typeStyles =
    type === "error"
      ? "bg-rose-100 text-rose-900 border-rose-300"
      : "bg-emerald-100 text-emerald-900 border-emerald-300";

  return <div className={`${baseStyles} ${typeStyles} ${className}`}>{content}</div>;
}
