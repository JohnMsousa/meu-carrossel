import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Carousel.css";

const products = [
  {
    id: 1,
    subtitle: "Melhores ofertas personalizadas",
    name: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.",
    image: "/img/produto1.png",
    buttonText: "Ver Ofertas",
  },
  {
    id: 2,
    subtitle: "Melhores ofertas personalizadas",
    name: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.",
    image: "/img/produto1.png",
    buttonText: "Ver Ofertas",
  },
  {
    id: 3,
    subtitle: "Melhores ofertas personalizadas",
    name: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.",
    image: "/img/produto1.png",
    buttonText: "Ver Ofertas",
  },
  {
    id: 4,
    subtitle: "Melhores ofertas personalizadas",
    name: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.",
    image: "/img/produto1.png",
    buttonText: "Ver Ofertas",
  },
  // Adicione mais produtos conforme necessário
];

const Carousel = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop
      spaceBetween={50}
      slidesPerView={1}
    >
      {products.map(
        ({ id, subtitle, name, description, image, buttonText }) => (
          <SwiperSlide key={id} className="carousel-slide">
            <div className="carousel-text">
              <span className="carousel-subtitle">{subtitle}</span>
              <h1 className="carousel-title">{name}</h1>
              <p className="carousel-description">{description}</p>
              <button
                className="carousel-button"
                onClick={() => navigate("/ofertas")} // Navega para a rota /ofertas ao clicar
              >
                {buttonText}
              </button>
            </div>
            <div className="carousel-image">
              <img src={image} alt={name} className="inclined-image" />
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Carousel;
