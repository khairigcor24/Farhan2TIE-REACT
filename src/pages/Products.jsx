import React from "react";
import { FaBoxOpen, FaSearch } from "react-icons/fa";

const productList = [
  { id: "PRD-001", name: "Coffee Beans", category: "Beverage", stock: 120, price: "Rp 85.000" },
  { id: "PRD-002", name: "Matcha Latte", category: "Beverage", stock: 56, price: "Rp 45.000" },
  { id: "PRD-003", name: "Nasi Goreng", category: "Food", stock: 34, price: "Rp 35.000" },
  { id: "PRD-004", name: "Rendang", category: "Food", stock: 18, price: "Rp 55.000" },
  { id: "PRD-005", name: "Tumis Kangkung", category: "Food", stock: 23, price: "Rp 22.000" },
  { id: "PRD-006", name: "Mango Smoothie", category: "Beverage", stock: 48, price: "Rp 40.000" },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-white">Products</h1>
          <p className="text-slate-400 mt-2">Manage inventory and product listings.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition">
            <FaBoxOpen />
            Add Product
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-100 hover:border-cyan-500 hover:text-cyan-300 transition">
            <FaSearch />
            Search
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
          <div className="rounded-2xl bg-slate-800/70 p-5 shadow-sm border border-slate-700">
            <p className="text-xs uppercase text-slate-400 tracking-[0.25em]">Total Products</p>
            <p className="mt-4 text-3xl font-bold text-white">{productList.length}</p>
          </div>
          <div className="rounded-2xl bg-slate-800/70 p-5 shadow-sm border border-slate-700">
            <p className="text-xs uppercase text-slate-400 tracking-[0.25em]">Low Stock</p>
            <p className="mt-4 text-3xl font-bold text-amber-300">{productList.filter((product) => product.stock < 30).length}</p>
          </div>
          <div className="rounded-2xl bg-slate-800/70 p-5 shadow-sm border border-slate-700">
            <p className="text-xs uppercase text-slate-400 tracking-[0.25em]">Average Price</p>
            <p className="mt-4 text-3xl font-bold text-emerald-300">Rp {productList.reduce((sum, p) => sum + Number(p.price.replace(/[^0-9]/g, "")), 0) / productList.length}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-slate-300 uppercase text-xs tracking-[0.2em]">
              <tr>
                <th className="p-4 font-medium">Product ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {productList.map((product) => (
                <tr key={product.id} className="hover:bg-slate-800/60 transition-colors">
                  <td className="p-4 font-mono text-cyan-300">{product.id}</td>
                  <td className="p-4 font-semibold">{product.name}</td>
                  <td className="p-4 text-slate-400">{product.category}</td>
                  <td className="p-4 text-amber-300">{product.stock}</td>
                  <td className="p-4 text-emerald-300">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
