import Header from "./layouts/Header";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Notes from "./pages/Notes";
import Customers from "./pages/Customers";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthGate from "./components/AuthGate";

function App() {
  return (
    <div>
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <div className="w-full">
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route
                path="*"
                element={
                  <AuthGate>
                    <div id="layout-with-sidebar" className="flex flex-row flex-1">
                      <Sidebar />
                      <div id="main-content" className="flex-1 p-4">
                        <Header />
                        <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/order" element={<Order />} />
                          <Route path="/products" element={<Products />} />
                          <Route path="/notes" element={<Notes />} />
                          <Route path="/customers" element={<Customers />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </div>
                    </div>
                  </AuthGate>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

