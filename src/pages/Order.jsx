import React from 'react';

// Data 30 item
const orders = [
  { id: "ORD-001", customer: "Budi Santoso", date: "29 Apr 2026", status: "Selesai", total: "Rp 150.000" },
  { id: "ORD-002", customer: "Siti Aminah", date: "28 Apr 2026", status: "Diproses", total: "Rp 85.000" },
  { id: "ORD-003", customer: "Andi Wijaya", date: "27 Apr 2026", status: "Dibatalkan", total: "Rp 200.000" },
  { id: "ORD-004", customer: "Citra Lestari", date: "27 Apr 2026", status: "Selesai", total: "Rp 120.000" },
  { id: "ORD-005", customer: "Dedi Kurniawan", date: "26 Apr 2026", status: "Selesai", total: "Rp 95.000" },
  { id: "ORD-006", customer: "Eka Putri", date: "26 Apr 2026", status: "Diproses", total: "Rp 310.000" },
  { id: "ORD-007", customer: "Fajar Hidayat", date: "25 Apr 2026", status: "Dibatalkan", total: "Rp 45.000" },
  { id: "ORD-008", customer: "Gina Amelia", date: "25 Apr 2026", status: "Selesai", total: "Rp 275.000" },
  { id: "ORD-009", customer: "Hani Wijayanti", date: "24 Apr 2026", status: "Selesai", total: "Rp 180.000" },
  { id: "ORD-010", customer: "Indra Pratama", date: "24 Apr 2026", status: "Diproses", total: "Rp 115.000" },
  { id: "ORD-011", customer: "Jaka Susilo", date: "23 Apr 2026", status: "Selesai", total: "Rp 400.000" },
  { id: "ORD-012", customer: "Kartika Sari", date: "23 Apr 2026", status: "Dibatalkan", total: "Rp 75.000" },
  { id: "ORD-013", customer: "Larasati", date: "22 Apr 2026", status: "Selesai", total: "Rp 135.000" },
  { id: "ORD-014", customer: "Mila Oktavia", date: "22 Apr 2026", status: "Diproses", total: "Rp 220.000" },
  { id: "ORD-015", customer: "Nisa Rahma", date: "21 Apr 2026", status: "Selesai", total: "Rp 90.000" },
  { id: "ORD-016", customer: "Oki Setiawan", date: "21 Apr 2026", status: "Selesai", total: "Rp 160.000" },
  { id: "ORD-017", customer: "Putri Indah", date: "20 Apr 2026", status: "Diproses", total: "Rp 55.000" },
  { id: "ORD-018", customer: "Qori Fathia", date: "20 Apr 2026", status: "Dibatalkan", total: "Rp 320.000" },
  { id: "ORD-019", customer: "Rian Hidayat", date: "19 Apr 2026", status: "Selesai", total: "Rp 145.000" },
  { id: "ORD-020", customer: "Siska Dewi", date: "19 Apr 2026", status: "Selesai", total: "Rp 210.000" },
  { id: "ORD-021", customer: "Tono Hartono", date: "18 Apr 2026", status: "Diproses", total: "Rp 80.000" },
  { id: "ORD-022", customer: "Umi Kalsum", date: "18 Apr 2026", status: "Selesai", total: "Rp 195.000" },
  { id: "ORD-023", customer: "Vina Amanda", date: "17 Apr 2026", status: "Dibatalkan", total: "Rp 60.000" },
  { id: "ORD-024", customer: "Wawan Hermawan", date: "17 Apr 2026", status: "Selesai", total: "Rp 250.000" },
  { id: "ORD-025", customer: "Xena Lutfi", date: "16 Apr 2026", status: "Diproses", total: "Rp 130.000" },
  { id: "ORD-026", customer: "Yoga Pratama", date: "16 Apr 2026", status: "Selesai", total: "Rp 280.000" },
  { id: "ORD-027", customer: "Zara Zahira", date: "15 Apr 2026", status: "Selesai", total: "Rp 170.000" },
  { id: "ORD-028", customer: "Beni Saputra", date: "15 Apr 2026", status: "Dibatalkan", total: "Rp 110.000" },
  { id: "ORD-029", customer: "Caca Melinda", date: "14 Apr 2026", status: "Selesai", total: "Rp 95.000" },
  { id: "ORD-030", customer: "Deni Ardiansyah", date: "14 Apr 2026", status: "Diproses", total: "Rp 230.000" },
];

export default function NeonOrder() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-8 text-slate-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            Dashboard
          </h1>
          <p className="text-sm text-slate-400 tracking-wider uppercase">Order System v2.0</p>
        </div>
        <button className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300">
          Save Report
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <h2 className="text-xl font-semibold text-white mb-6 border-l-4 border-fuchsia-500 pl-4">
          Riwayat Pesanan
        </h2>
        
        <div className="space-y-3">
          {orders.map((order, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 group"
            >
              <div>
                <h3 className="font-mono font-bold text-cyan-300 group-hover:text-cyan-200">{order.id}</h3>
                <p className="text-sm text-slate-300">{order.customer}</p>
                <p className="text-xs text-slate-500">{order.date}</p>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full border ${
                    order.status === "Selesai"
                      ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10 shadow-[0_0_8px_rgba(52,211,153,0.2)]"
                      : order.status === "Diproses"
                      ? "border-amber-500/30 text-amber-400 bg-amber-500/10 shadow-[0_0_8px_rgba(251,191,36,0.2)]"
                      : "border-rose-500/30 text-rose-400 bg-rose-500/10 shadow-[0_0_8px_rgba(244,63,94,0.2)]"
                  }`}
                >
                  {order.status}
                </span>
                <span className="font-mono font-bold text-slate-200 w-24 text-right">{order.total}</span>
                <button className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium underline underline-offset-4">
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}