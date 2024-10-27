import React, { useState } from "react";
import "./CarouselProduct.css";

const CarouselProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const images = [
    "/img/slide1.png", // Imagem para "red"
    "/img/slide2.png", // Imagem para "orange"
    "/img/slide3.png", // Imagem para "gray"
    "/img/slide4.png", // Imagem para "green"
  ];

  const colorToIndexMap = {
    red: 0,
    orange: 1,
    gray: 2,
    green: 3,
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCurrentIndex(colorToIndexMap[color]); // Atualiza o índice do carrossel com base na cor
  };

  const handleBuyClick = () => {
    if (!selectedSize && !selectedColor) {
      alert("Selecione um tamanho e uma cor.");
    } else if (!selectedSize) {
      alert("Selecione um tamanho.");
    } else if (!selectedColor) {
      alert("Selecione uma cor.");
    } else {
      alert("Compra realizada com sucesso!");
      // Reseta os campos selecionados
      setSelectedSize(null);
      setSelectedColor(null);
    }
  };

  return (
    <div className="carousel-container">
      {/* Carousel de imagens */}
      <div className="carousel-images">
        <button className="arrow prev" onClick={handlePrev}>
          &#10094;
        </button>

        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="active"
        />

        <button className="arrow next" onClick={handleNext}>
          &#10095;
        </button>

        <div className="thumbnails">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Miniatura ${index + 1}`}
              onClick={() => goToImage(index)}
              className={
                index === currentIndex ? "thumbnail active" : "thumbnail"
              }
            />
          ))}
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="text-content">
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
        <p className="product-category">Casual | Nike | REF: 38416711</p>
        <div className="product-rating">
          <span>⭐⭐⭐⭐⭐</span> <span className="rating-value">4.7</span>{" "}
          <span>(90 avaliações)</span>
        </div>

        <div className="product-price">
          <span className="current-price">R$ 219,00</span>
          <span className="old-price">219,00</span>
        </div>

        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Tamanho */}
        <div className="product-size">
          <p>Tamanho</p>
          <div className="size-options">
            {[39, 40, 41, 42, 43].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Cor */}
        <div className="product-color">
          <p>Cor</p>
          <div className="color-options">
            {["red", "orange", "gray", "green"].map((color) => (
              <button
                key={color}
                className={`color ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorSelect(color)}
              ></button>
            ))}
          </div>
        </div>

        <button className="buy-button" onClick={handleBuyClick}>
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default CarouselProduct;
