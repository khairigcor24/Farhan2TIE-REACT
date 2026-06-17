import { useEffect, useState, useMemo } from "react";
import { notesAPI } from "../services/notesAPI";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import GenericTable from "../components/GenericTable";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "Draft",
  });

  const loadNotes = async () => {
    setLoadingNotes(true);
    setError("");

    try {
      const data = await notesAPI.fetchNotes();
      setNotes(data ?? []);
    } catch (err) {
      setError("Terjadi kesalahan saat memuat catatan.");
    } finally {
      setLoadingNotes(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");
      setDataForm({ title: "", content: "", status: "Draft" });
      setTimeout(() => setSuccess(""), 3000);
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message ?? err}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus catatan ini?")) {
      return;
    }

    try {
      setLoadingNotes(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      setSuccess("Catatan berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan saat menghapus catatan: ${err.message ?? err}`);
    } finally {
      setLoadingNotes(false);
    }
  };

  const columns = useMemo(
    () => [
      { header: "Judul", accessor: "title" },
      { header: "Isi", accessor: "content" },
      { header: "Status", accessor: "status" },
      {
        header: "Aksi",
        render: (note) => (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleDelete(note.id);
            }}
            className="rounded-2xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
          >
            Hapus
          </button>
        ),
      },
    ],
    [],
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
        <p className="text-sm text-slate-500">Kelola catatan Anda dengan create, fetch, dan delete menggunakan REST API Supabase.</p>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah Catatan Baru</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={dataForm.title}
              placeholder="Judul catatan"
              onChange={handleChange}
              disabled={saving}
              required
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />

            <textarea
              name="content"
              value={dataForm.content}
              placeholder="Isi catatan"
              onChange={handleChange}
              disabled={saving}
              required
              rows="4"
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
            />

            <select
              name="status"
              value={dataForm.status}
              onChange={handleChange}
              disabled={saving}
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>

            <button
              type="submit"
              disabled={saving}
              className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              {saving ? "Menyimpan..." : "Tambah Catatan"}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Daftar Catatan</h3>
              <p className="text-sm text-slate-500">Tampilkan semua catatan dari Supabase.</p>
            </div>
          </div>

          {loadingNotes ? (
            <LoadingSpinner label="Memuat catatan..." />
          ) : (
            <GenericTable columns={columns} data={notes} />
          )}
        </div>
      </div>
    </div>
  );
}
