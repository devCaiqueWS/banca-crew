import React, { useState, useEffect } from 'react';
import './style/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/hero1.jpg',
      title: 'NOVA COLEÇÃO 2025',
      description: 'Streetwear autêntico de vagabundo para vagabundo'
    },
    {
      image: '/images/hero2.jpg',
      title: 'EDIÇÃO LIMITADA',
      description: 'Peças exclusivas para você'
    },
    {
      image: '/images/hero3.jpg',
      title: 'COLABORAÇÕES',
      description: 'Arte urbana em cada peça'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link to="/shop" className="cta-button">Comprar Agora</Link>
            </div>
          ))}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Categorias em Destaque</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Camisetas</h3>
            <Link to="/shop">Ver Coleção</Link>
          </div>
          <div className="category-card">
            <h3>Hoodies</h3>
            <Link to="/shop">Ver Coleção</Link>
          </div>
          <div className="category-card">
            <h3>Calças</h3>
            <Link to="/shop">Ver Coleção</Link>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Destaques da Semana</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <h3>Coleção Essentials</h3>
            <p>Peças básicas com um toque streetwear</p>
            <Link to="/shop">Explorar</Link>
          </div>
          <div className="featured-item">
            <h3>Colaborações Exclusivas</h3>
            <p>Edições limitadas com artistas locais</p>
            <Link to="/shop">Descobrir</Link>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Nossa Cultura</h2>
        <div className="about-content">
          <p>Nascemos da cultura urbana e crescemos nas ruas. Nossa missão é trazer autenticidade e estilo para cada peça.</p>
          <div className="values">
            <div className="value-item">
              <h4>Sustentabilidade</h4>
              <p>Compromisso com materiais eco-friendly</p>
            </div>
            <div className="value-item">
              <h4>Comunidade</h4>
              <p>Apoiando artistas e criadores locais</p>
            </div>
            <div className="value-item">
              <h4>Qualidade</h4>
              <p>Materiais premium em cada peça</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
