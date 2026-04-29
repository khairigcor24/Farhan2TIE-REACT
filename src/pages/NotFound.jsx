import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <PageHeader />
      
      {/* Konten Utama */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden">
        {/* Background Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a0f1d_0%,_#000000_100%)]" />
        
        {/* Neon Circles for ambiance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow delay-700" />
        
        {/* Angka 404 */}
        <h1 className="text-9xl md:text-[12rem] font-extrabold tracking-tighter relative
                       text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-cyan-400
                       filter drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]
                       after:content-['404'] after:absolute after:inset-0
                       after:filter after:blur-xl after:opacity-70 after:text-cyan-400
                       animate-flicker-slow
                       ">
          404
        </h1>
        
        {/* Pesan Kesalahan */}
        <h2 className="text-3xl font-bold mt-8 relative
                       text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
          Oops! Halaman tidak ditemukan
        </h2>
        <p className="text-gray-300 mt-4 max-w-md relative
                      filter drop-shadow-[0_0_5px_rgba(200,200,200,0.5)]">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
        </p>

        {/* Tombol Kembali */}
        <div className="mt-12 relative group">
          {/* Neon Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <a
            href="/"
            className="relative inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg
                       border border-cyan-400
                       shadow-[0_0_15px_rgba(34,211,238,0.5)]
                       hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]
                       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Kembali ke Beranda
          </a>
        </div>
      </main>
    </div>
  );
}