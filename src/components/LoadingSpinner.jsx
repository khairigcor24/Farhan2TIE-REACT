import React from "react";

export default function LoadingSpinner({ label = "Loading...", className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 rounded-3xl bg-slate-900/80 px-5 py-4 text-slate-200 ${className}`}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
