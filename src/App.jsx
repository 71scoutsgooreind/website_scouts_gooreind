// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import JefkePage from "./pages/JefkePage";
import LeidingPage from "./pages/LeidingPage";
import GroepenPage from "./pages/GroepenPage";
import InschrijvenPage from "./pages/InschrijvenPage";
import UniformPage from "./pages/UniformPage";
import VOSOGPage from "./pages/VOSOGPage";
import GDPRPage from "./pages/GDPRPage";
import VerhuurPage from "./pages/VerhuurPage";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-green-900 font-sans text-gray-800">
        <Header />
        <main className="container mx-auto flex-grow px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jefke" element={<JefkePage />} />
            <Route path="/leiding" element={<LeidingPage />} />
            <Route path="/groepen" element={<GroepenPage />} />
            <Route path="/inschrijven" element={<InschrijvenPage />} />
            <Route path="/uniform" element={<UniformPage />} />
            <Route path="/verhuur" element={<VerhuurPage />} />
            <Route path="/vosog" element={<VOSOGPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
