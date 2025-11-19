import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function initTheme() {
  try {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    console.error(e);
  }
}

function toggleTheme() {
  try {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    window.dispatchEvent(new CustomEvent("theme:change", { detail: { theme: isDark ? "dark" : "light" } }));
  } catch (e) {
    console.error(e);
  }
}

window.toggleTheme = toggleTheme;
initTheme();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);