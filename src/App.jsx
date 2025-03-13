import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalProvider from "./components/context/ModalContext"; // Poprawiony import
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
