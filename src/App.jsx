import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./components/context/ModalContext";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <ModalProvider>
      {" "}
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
