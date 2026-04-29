import React from 'react';
import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="flex flex-col flex-1 min-h-screen bg-[#0f172a] text-white">
      <PageHeader/>

      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Total Orders */}
        <div id="dashboard-orders" className="flex items-center space-x-5 bg-[#1e293b]/70 backdrop-blur-lg border border-cyan-400/20 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300 hover:shadow-cyan-500/40 hover:shadow-2xl">
          <div id="orders-icon" className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-4 text-3xl text-black shadow-lg">
            <FaShoppingCart />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold text-white">75</span>
            <span id="orders-text" className="text-cyan-300 font-medium">Total Orders</span>
          </div>
        </div>

        {/* Total Delivered */}
        <div id="dashboard-delivered" className="flex items-center space-x-5 bg-[#1e293b]/70 backdrop-blur-lg border border-purple-400/20 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300 hover:shadow-purple-500/40 hover:shadow-2xl">
          <div id="delivered-icon" className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-4 text-3xl text-black shadow-lg">
            <FaTruck />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold text-white">357</span>
            <span id="delivered-text" className="text-purple-300 font-medium">Total Delivered</span>
          </div>
        </div>

        {/* Total Canceled */}
        <div id="dashboard-canceled" className="flex items-center space-x-5 bg-[#1e293b]/70 backdrop-blur-lg border border-pink-400/20 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300 hover:shadow-pink-500/40 hover:shadow-2xl">
          <div id="canceled-icon" className="bg-gradient-to-r from-red-400 to-pink-600 rounded-full p-4 text-3xl text-black shadow-lg">
            <FaBan />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold text-white">65</span>
            <span id="canceled-text" className="text-pink-300 font-medium">Total Canceled</span>
          </div>
        </div>

        {/* Total Revenue */}
        <div id="dashboard-revenue" className="flex items-center space-x-5 bg-[#1e293b]/70 backdrop-blur-lg border border-yellow-400/20 rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300 hover:shadow-yellow-500/40 hover:shadow-2xl">
          <div id="revenue-icon" className="bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full p-4 text-3xl text-black shadow-lg">
            <FaDollarSign />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold text-white">$128</span>
            <span id="revenue-text" className="text-yellow-300 font-medium">Total Revenue</span>
          </div>
        </div>

      </div>
    </div>
  );
}