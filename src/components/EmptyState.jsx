import React from "react";
import { FiInbox } from "react-icons/fi";

export default function EmptyState({ title = "Data Kosong", message = "Tidak ada item untuk ditampilkan.", className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center text-slate-300 ${className}`}>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-800 text-slate-200 shadow-lg mb-6">
        <FiInbox className="text-2xl" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm leading-6 text-slate-400">{message}</p>
    </div>
  );
}
