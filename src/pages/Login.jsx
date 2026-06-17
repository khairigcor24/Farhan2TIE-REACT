import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const VALID_EMAIL = "admin@gmail.com";
const VALID_PASSWORD = "admin123";


export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => {
    return username.trim().length > 0 && password.length > 0 && !loading;
  }, [username, password, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
      // Simulasi proses login (front-end only)
      await new Promise((r) => setTimeout(r, 500));

      if (username === VALID_EMAIL && password === VALID_PASSWORD) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/", { replace: true });
        return;
      }

      setError("Email atau password salah.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 text-slate-100 p-6">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.12)] p-7">
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Login
              <span className="text-cyan-400">.</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">Masuk untuk mengakses dashboard.</p>
          </div>

          {error && (
            <div className="mb-4 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-rose-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                placeholder="admin"
                autoComplete="username"
                className="w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/70"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                placeholder="admin"
                autoComplete="current-password"
                className="w-full rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/70"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-4 py-3 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_18px_rgba(34,211,238,0.25)]"
            >
              {loading ? "Memproses..." : "Login"}
            </button>

            <div className="text-xs text-slate-500">
              Demo credential: <span className="text-slate-200 font-semibold">admin@gmail.com / admin123</span>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

