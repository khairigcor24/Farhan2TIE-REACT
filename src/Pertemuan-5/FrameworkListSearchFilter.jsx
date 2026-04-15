import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  /* Inisialisasi DataForm yang lebih rapi */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /* Handle perubahan nilai input form */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Logic Filtering */
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Framework <span className="text-blue-600">Explorer</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Temukan framework terbaik untuk proyek masa depan Anda.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="sticky top-6 z-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
            <input
              type="text"
              name="searchTerm" // Penting: Harus sama dengan key di state
              value={dataForm.searchTerm}
              placeholder="Cari nama atau deskripsi..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              onChange={handleChange}
            />
          </div>

          <select
            name="selectedTag" // Penting: Harus sama dengan key di state
            value={dataForm.selectedTag}
            className="md:w-52 p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
            onChange={handleChange}
          >
            <option value="">Semua Kategori</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Result Stats */}
        <div className="mb-6 px-2">
          <p className="text-sm text-slate-500">
            Menampilkan <span className="font-bold text-slate-800">{filteredFrameworks.length}</span> framework
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h2>
                  <span className="text-[10px] uppercase tracking-widest font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">
                    {item.details.releaseYear}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="border-t border-slate-50 pt-4 mb-4">
                  <p className="text-xs text-slate-400 mb-1">Developer</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {item.details.developer}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-lg font-semibold text-slate-800">Framework tidak ditemukan</h3>
            <p className="text-slate-500">Coba gunakan kata kunci atau filter lain.</p>
            <button 
                onClick={() => setDataForm({searchTerm: "", selectedTag: ""})}
                className="mt-4 text-blue-600 font-medium hover:underline"
            >
                Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}