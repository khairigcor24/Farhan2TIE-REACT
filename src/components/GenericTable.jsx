import React from "react";
import EmptyState from "./EmptyState";

export default function GenericTable({ columns = [], data = [], className = "", rowClassName = "", onRowClick }) {
  if (!data || data.length === 0) {
    return <EmptyState title="Tidak ada data" message="Belum ada catatan yang tersedia." />;
  }

  return (
    <div className={`overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 ${className}`}>
      <table className="min-w-full divide-y divide-slate-800 text-sm">
        <thead className="bg-slate-900 text-slate-300 uppercase tracking-[0.2em] text-xs">
          <tr>
            {columns.map((column) => (
              <th key={column.header} className="px-4 py-3 font-medium text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 text-slate-200">
          {data.map((row, index) => (
            <tr
              key={row.id ?? index}
              className={`transition-colors hover:bg-slate-800/60 ${rowClassName}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column) => (
                <td key={`${column.header}-${row.id ?? index}`} className="px-4 py-4 align-top">
                  {column.render ? column.render(row) : row[column.accessor] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
