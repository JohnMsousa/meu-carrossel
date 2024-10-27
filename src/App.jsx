import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"; // Importa o arquivo de rotas
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <AppRoutes />{" "}
          {/* Renderiza as rotas definidas em routes/routes.jsx */}
        </main>

        {/* Componente de Rodapé */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
