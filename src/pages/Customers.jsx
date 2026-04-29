import React from 'react';

// Data pelanggan (tetap sama)
const customers = [
  { id: 1, name: "Cyberpunk Corp", email: "contact@cyber.corp", phone: "+62 811-1234-567", loyalty: "Gold" },
  { id: 2, name: "Neon City Tech", email: "hello@neocity.io", phone: "+62 812-9876-543", loyalty: "Silver" },
  { id: 3, name: "Synthwave Studio", email: "info@synth.wave", phone: "+62 857-5555-019", loyalty: "Bronze" },
  { id: 4, name: "Void Runners", email: "crew@void.net", phone: "+62 813-2222-333", loyalty: "Gold" },
  { id: 5, name: "Pixel Glitch", email: "support@glitch.pix", phone: "+62 896-1111-222", loyalty: "Silver" },
  { id: 6, name: "Data Stream", email: "admin@stream.data", phone: "+62 821-4444-555", loyalty: "Bronze" },
  { id: 7, name: "Binary Beats", email: "dj@binary.beat", phone: "+62 838-6666-777", loyalty: "Gold" },
  { id: 8, name: "Chrome Hearts", email: "shop@chrome.heart", phone: "+62 852-8888-999", loyalty: "Silver" },
  { id: 9, name: "Laser Grid", email: "grid@laser.tech", phone: "+62 815-1010-202", loyalty: "Bronze" },
  { id: 10, name: "Night City OS", email: "dev@nc.os", phone: "+62 877-3030-404", loyalty: "Gold" },
  { id: 11, name: "Neon Pulse", email: "news@neon.pulse", phone: "+62 819-5050-606", loyalty: "Silver" },
  { id: 12, name: "Digital Soul", email: "connect@digi.soul", phone: "+62 895-7070-808", loyalty: "Bronze" },
  { id: 13, name: "Hard Drive Inc", email: "sales@hdi.com", phone: "+62 811-9090-010", loyalty: "Gold" },
  { id: 14, name: "Ghost Protocol", email: "spy@ghost.sec", phone: "+62 822-1212-323", loyalty: "Silver" },
  { id: 15, name: "Vector Vision", email: "design@vec.vis", phone: "+62 831-3434-454", loyalty: "Bronze" },
  { id: 16, name: "Synth Logic", email: "lab@synth.logic", phone: "+62 856-5656-676", loyalty: "Gold" },
  { id: 17, name: "Nano Bots", email: "info@nano.bot", phone: "+62 899-7878-898", loyalty: "Silver" },
  { id: 18, name: "MetaVerse Hub", email: "join@meta.hub", phone: "+62 814-9090-010", loyalty: "Bronze" },
  { id: 19, name: "Deep Web Co", email: "search@dw.com", phone: "+62 833-2121-323", loyalty: "Gold" },
  { id: 20, name: "Cyber Armor", email: "security@c-armor.net", phone: "+62 855-4343-545", loyalty: "Silver" },
  { id: 21, name: "Volt Energy", email: "power@volt.energy", phone: "+62 878-6565-767", loyalty: "Bronze" },
  { id: 22, name: "Gravity Null", email: "space@null.grav", phone: "+62 817-8787-989", loyalty: "Gold" },
  { id: 23, name: "Plasma Core", email: "engine@plasma.core", phone: "+62 897-0909-101", loyalty: "Silver" },
  { id: 24, name: "Static Noise", email: "studio@static.io", phone: "+62 832-2323-343", loyalty: "Bronze" },
  { id: 25, name: "Neural Link", email: "mind@neural.link", phone: "+62 854-4545-565", loyalty: "Gold" },
  { id: 26, name: "Cloud Nine", email: "sky@c9.io", phone: "+62 876-6767-787", loyalty: "Silver" },
  { id: 27, name: "Infinite Loop", email: "dev@loop.infinite", phone: "+62 818-8989-909", loyalty: "Bronze" },
  { id: 28, name: "Shadow Net", email: "dark@shadow.net", phone: "+62 894-0101-121", loyalty: "Gold" },
  { id: 29, name: "Echo Chamber", email: "talk@echo.ch", phone: "+62 835-2323-343", loyalty: "Silver" },
  { id: 30, name: "Apex System", email: "ceo@apex.sys", phone: "+62 851-4545-565", loyalty: "Bronze" },
];

export default function FullScreenDashboard() {
  return (
    // Memaksa layar penuh dengan w-screen h-screen
    <div className="h-screen w-screen bg-slate-950 text-slate-200 overflow-hidden font-sans p-6 flex flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950">
      
      {/* Header Statis */}
      <header className="mb-6 border-b border-cyan-900/50 pb-4">
        <h1 className="text-3xl font-black text-white tracking-widest uppercase">
          System <span className="text-cyan-400">Node</span> Directory
        </h1>
        <p className="text-xs text-slate-500 font-mono tracking-widest mt-1">STATUS: ONLINE | NODES: {customers.length}</p>
      </header>

      {/* Kontainer Tabel yang bisa di-scroll secara internal */}
      <div className="flex-grow overflow-auto border border-slate-800 rounded-lg bg-slate-900/40 backdrop-blur-sm shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-slate-900 z-10">
            <tr className="text-cyan-400 uppercase tracking-widest text-xs font-bold border-b border-slate-700">
              <th className="p-4">ID</th>
              <th className="p-4">Entity</th>
              <th className="p-4">Secure Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Loyalty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50 text-sm">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-cyan-950/30 transition-colors">
                <td className="p-4 font-mono text-fuchsia-400">#{String(c.id).padStart(3, '0')}</td>
                <td className="p-4 font-semibold text-slate-100">{c.name}</td>
                <td className="p-4 text-slate-400">{c.email}</td>
                <td className="p-4 font-mono text-slate-400">{c.phone}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold border ${
                    c.loyalty === "Gold" ? "border-yellow-500/50 text-yellow-400" : 
                    c.loyalty === "Silver" ? "border-slate-500/50 text-slate-300" : 
                    "border-orange-700/50 text-orange-500"
                  }`}>
                    {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}