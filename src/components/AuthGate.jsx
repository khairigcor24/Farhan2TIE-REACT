import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthGate({ children }) {
  const location = useLocation();
  const [authed, setAuthed] = useState(() =>
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    const onStorage = () => {
      setAuthed(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);



  if (!authed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }


  return children;
}

