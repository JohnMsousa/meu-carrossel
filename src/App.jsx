import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        {/* Componente de Carrossel */}
        <Carousel />
      </main>

      {/* Componente de Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
