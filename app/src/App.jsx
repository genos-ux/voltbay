import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { theme } = useThemeStore();

  // ✅ Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme="forest">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Toaster/>
    </div>
  );
};

export default App;
