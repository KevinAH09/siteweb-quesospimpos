import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import vacas2 from './assets/images/nosotros/vacas-2.webp';
import potrero4 from './assets/images/nosotros/potrero-4.webp';
import queso3 from './assets/images/productos/queso-3.webp';
import leche4 from './assets/images/productos/leche-4.webp';
import slide1 from './assets/images/slide-1.webp';
import slide3 from './assets/images/slide-3.webp';
import headTitles from './assets/images/head-titles.webp';
import shapeDivisor from './assets/images/shape-divisor.webp';
import waveBage from './assets/images/wave-bage.svg';
import waveVerde from './assets/images/wave-verde.svg';
import waveWhite from './assets/images/wave-white.svg';

const homeData = {
  kicker: 'Quesos Pimpos',
  heroTitle: 'El sabor auténtico del campo en su mesa.',
  heroText:
    'Llevamos más de 20 años transformando la pureza de San Antonio de Rivas en productos lácteos frescos y naturales. De nuestra finca a su familia, con el compromiso de una producción honesta y sostenible.',
  introTitle: 'Un legado familiar que nace de la tierra.',
  introText:
    'En el año 2000, don José Acuña Hernández inició este sueño con apenas 6 vacas y el trabajo dedicado del ordeño a mano. Hoy, con más de 20 vacas en producción, Quesos Pimpos es un proyecto integral que busca unir a la familia y ser un ejemplo de superación en San Antonio de Rivas.',
  introPoints: [
    'Leche entera y natural',
    'Sanidad animal y comercio justo',
    'Producción honesta y sostenible'
  ],
  processTitle: 'Del campo a su puerta',
  processText:
    'Cada día cuidamos el proceso completo para que los productos lleguen frescos, naturales y con el sabor auténtico de la finca.',
  processSteps: [
    'Madrugada: ordeño y recolección bajo estrictos controles de sanidad.',
    'Mañana: elaboración natural de queso y natilla con leche fresca.',
    'Distribución: entrega el mismo día para conservar frescura y calidad.',
    'Tarde: pastoreo y alimentación cuidadosa de los terneros.'
  ],
  impactTitle: 'Respeto por la naturaleza, salud para usted.',
  impactText:
    'Estamos evolucionando hacia un modelo de finca ecológica con nutrición natural del suelo, cercas vivas de poró y pastoreo rotativo cada 40 días.',
  supportTitle: '¡Haga su pedido hoy mismo!',
  supportText:
    'Atendemos hogares, pulperías y negocios con entregas semanales programadas en Pérez Zeledón.',
  productsTitle: 'Nuestro catálogo de productos',
  products: [
    { iconClass: 'fas fa-mug-saucer', name: 'Leche Entera Natural', text: 'Leche 100% pura, sin descremar, conservando toda su cremosidad y valor nutricional. Presentaciones: 1L, 1.5L, 2L y 3L.' },
    { iconClass: 'fas fa-cheese', name: 'Queso Tierno Artesanal', text: 'Elaborado diariamente con leche entera de calidad y prensado en frío. Venta por kilogramo.' },
    { iconClass: 'fas fa-ice-cream', name: 'Natilla de la Casa', text: 'Receta familiar 100% natural y libre de químicos. Presentaciones: 250g y 500g.' },
    { iconClass: 'fas fa-vial', name: 'Leche Agria Tradicional', text: 'El acompañamiento perfecto con la consistencia ideal y el sabor del campo. Presentaciones: 1L, 1.5L, 2L y 3L.' }
  ],
  promoTitle: 'Explorar productos',
  testimonials: [
    {
      author: 'Isabella Romero',
      role: 'Dueña de pulpería',
      text: 'La frescura y el servicio directo nos permite ofrecer calidad constante a nuestros clientes.'
    },
    {
      author: 'Ryan Molina',
      role: 'Cliente familiar',
      text: 'Productos con sabor casero y entrega puntual cada semana.'
    }
  ]
};

const heroSlides = [
  { image: slide1, label: 'Finca de Quesos Pimpos' },
  { image: slide3, label: 'Productos frescos de Quesos Pimpos' }
];

const waveDividers = {
  beige: waveBage,
  green: waveVerde,
  white: waveWhite
};

function WaveDivider({ tone = 'beige' }) {
  return (
    <div className={`section-wave ${tone}`} aria-hidden="true">
      <img src={waveDividers[tone] || waveBage} alt="" />
    </div>
  );
}

function useEntranceAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((element, index) => {
      element.classList.remove('is-visible');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);
}

function PageBanner({ title }) {
  return (
    <section className="inner-hero head-breadcrumbs">
      <div className="container">
        <h1 className="reveal reveal-title">{title}</h1>
        <p className="crumbs">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <strong>{title}</strong>
        </p>
      </div>
    </section>
  );
}

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <>
      <section className="hero-slider" aria-label="Quesos Pimpos">
        <div className="hero-slides" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              className={`hero-slide ${activeSlide === index ? 'is-active' : ''}`}
              key={slide.label}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-inner container">
          <p className="eyebrow kicker reveal reveal-title">{homeData.kicker}</p>
          <h1 className="reveal reveal-title">{homeData.heroTitle}</h1>
          <p className="reveal">{homeData.heroText}</p>
          <Link className="main-cta reveal reveal-button" to="/productos">Explorar Productos</Link>
        </div>
        <button className="hero-arrow hero-arrow-prev" type="button" aria-label="Ver imagen anterior" onClick={showPreviousSlide}>
          ‹
        </button>
        <button className="hero-arrow hero-arrow-next" type="button" aria-label="Ver imagen siguiente" onClick={showNextSlide}>
          ›
        </button>
        <img className="hero-shape-divider" src={shapeDivisor} alt="" aria-hidden="true" />
      </section>

      <section className="container intro-grid">
        <article className="intro-copy">
          <p className="eyebrow">Nuestra Historia</p>
          <h2 className="reveal reveal-title">{homeData.introTitle}</h2>
          <p>{homeData.introText}</p>
          <ul>
            {homeData.introPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <div className="intro-gallery">
          <img className="reveal reveal-image" src={vacas2} alt="Equipo de lecheria" />
          <img className="reveal reveal-image" src={potrero4} alt="Vacas en la finca" />
        </div>
      </section>
      <WaveDivider tone="beige" />

      <section className="products-zone">
        <div className="container">
          <h2 className="reveal reveal-title">Lo que nos diferencia</h2>
          <div className="icon-grid">
            <article className="reveal">
              <h3>Tradición desde el 2000</h3>
              <p>Orgullosamente desde San Antonio de Rivas, con más de dos décadas de trabajo familiar.</p>
            </article>
            <article className="reveal">
              <h3>Calidad Natural</h3>
              <p>Leche entera, productos frescos y procesos libres de químicos innecesarios.</p>
            </article>
            <article className="reveal">
              <h3>Visión Ecológica</h3>
              <p>Regeneramos la finca con cercas vivas, pastoreo inteligente y nutrición natural del suelo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="container process-grid">
          <div>
            <p className="eyebrow light">Proceso Diario</p>
            <h2 className="reveal reveal-title">{homeData.processTitle}</h2>
            <p>{homeData.processText}</p>
            <img className="reveal reveal-image" src={headTitles} alt="Proceso de extraccion" />
          </div>
          <ol>
            {homeData.processSteps.map((step, index) => (
              <li className="reveal" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <WaveDivider tone="green" />

      <section className="container efficiency">
        <div>
          <p className="eyebrow">Sello Ecológico</p>
          <h2 className="reveal reveal-title">{homeData.impactTitle}</h2>
          <p>{homeData.impactText}</p>
        </div>
        <img className="reveal reveal-image" src={leche4} alt="Control de calidad" />
      </section>

      <section className="pasture-banner" aria-label="paisaje de finca" />

      <section className="container support-grid">
        <img className="reveal reveal-image" src={queso3} alt="Soporte en la granja" />
        <div>
          <p className="eyebrow">Contacto y Ventas</p>
          <h2 className="reveal reveal-title">{homeData.supportTitle}</h2>
          <p>{homeData.supportText}</p>
        </div>
      </section>
      <WaveDivider tone="beige" />

      <section className="products-zone">
        <div className="container">
          <p className="eyebrow">Productos</p>
          <h2 className="reveal reveal-title">{homeData.productsTitle}</h2>
          <div className="icon-grid">
            {homeData.products.map((item) => (
            <article className="reveal" key={item.name}>
                <div className="icon"><i className={item.iconClass} aria-hidden="true" /></div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="promo-strip reveal">
            <div>
              <p className="eyebrow light">Catálogo</p>
              <h3>{homeData.promoTitle}</h3>
            </div>
            <button className="reveal-button" type="button">Ver más</button>
          </div>
        </div>
      </section>

      {/* Sección de testimonios removida por solicitud previa */}
    </>
  );
}

function NosotrosPage() {
  return (
    <>
      <PageBanner title="Nosotros" />
      <section className="container intro-grid">
        <article className="intro-copy">
          <p className="eyebrow">Nuestra Historia</p>
          <h2 className="reveal reveal-title">Un legado familiar que nace de la tierra.</h2>
          <p>
            En el año 2000, don José Acuña Hernández inició este sueño con apenas 6 vacas y el trabajo dedicado del ordeño a mano. Hoy, con más de 20 vacas en producción, Quesos Pimpos es un proyecto integral que busca unir a la familia y ser un ejemplo de superación en San Antonio de Rivas.
          </p>
          <p>
            No solo producimos lácteos; cuidamos la sanidad animal y el comercio justo. Creemos que un animal bien alimentado es más sano y fértil, lo que nos permite ofrecer productos superiores sin depender de químicos innecesarios.
          </p>
        </article>
        <div className="intro-gallery">
          <img className="reveal reveal-image" src={vacas2} alt="Nuestra granja familiar" />
          <img className="reveal reveal-image" src={potrero4} alt="Proceso artesanal de nuestros productos" />
        </div>
      </section>
      <section className="container mission-vision-grid">
        <article className="mission-box reveal">
          <div className="icon"><i className="fas fa-bullseye" aria-hidden="true" /></div>
          <h3>Misión</h3>
          <p>
            Ser la marca regional referente en confianza y sabor, destacando por nuestra constancia operativa y trato humano.
          </p>
        </article>
        <article className="vision-box reveal">
          <div className="icon"><i className="fas fa-eye" aria-hidden="true" /></div>
          <h3>Visión</h3>
          <p>
            Evolucionar hacia una finca ecológica que una tradición, bienestar animal y productos lácteos naturales para las familias de Pérez Zeledón.
          </p>
        </article>
      </section>
      <section className="image-cta-section">
        <div className="image-cta-overlay" />
        <div className="container image-cta-content">
          <h3 className="reveal reveal-title">¡Haga su pedido hoy mismo!</h3>
          <p>Si quiere conocer precios, formatos o entregas semanales, nuestro equipo le atiende con gusto.</p>
          <Link className="main-cta link-btn reveal reveal-button" to="/contacto">
            Ir A Contacto
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductosPage() {
  const productGallery = [
    { title: 'Leche Entera Natural', image: leche4, description: 'Leche 100% pura, sin descremar, conservando toda su cremosidad y valor nutricional.', formats: 'Presentaciones: 1L, 1.5L, 2L y 3L' },
    { title: 'Queso Tierno Artesanal', image: queso3, description: 'Elaborado diariamente con leche entera de calidad y prensado en frío, mediante un proceso totalmente natural.', formats: 'Venta: por kilogramo' },
    { title: 'Natilla de la Casa', image: queso3, description: 'Producida bajo una receta única familiar. Es 100% natural y libre de químicos.', formats: 'Presentaciones: 250g y 500g' },
    { title: 'Leche Agria Tradicional', image: leche4, description: 'El acompañamiento perfecto con la consistencia ideal y el sabor del campo.', formats: 'Presentaciones: 1L, 1.5L, 2L y 3L' }
  ];

  return (
    <>
      <PageBanner title="Productos" />
      <section className="container product-page">
        <div className="gallery-grid">
          {productGallery.map((item) => (
            <article className="reveal" key={item.title}>
              <img className="reveal-image" src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{item.formats}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="image-cta-section">
        <div className="image-cta-overlay" />
        <div className="container image-cta-content">
          <h3 className="reveal reveal-title">¿Quiere una cotización personalizada?</h3>
          <p>Cuéntenos qué productos necesita y le enviaremos una propuesta según volumen y frecuencia.</p>
          <Link className="main-cta link-btn reveal reveal-button" to="/contacto">
            Solicitar Cotizacion
          </Link>
        </div>
      </section>
    </>
  );
}

function ContactoPage() {
  return (
    <>
      <PageBanner title="Contacto" />
      <section className="container contact-page">
        <article className="contact-info reveal">
          <h2 className="reveal-title">¡Haga su pedido hoy mismo!</h2>
          <p>Atendemos hogares, pulperías y negocios con entregas semanales programadas en Pérez Zeledón.</p>
          <p><strong>Horario:</strong> Lunes a Domingo de 6:00 AM a 6:00 PM</p>
          <p><strong>Ubicación:</strong> San Antonio de Rivas, Pérez Zeledón</p>
          <p><strong>WhatsApp/Tel:</strong> +506 5715-1979</p>
          <p><strong>Correo:</strong> joseacuna794@gmail.com</p>
        </article>

        <form className="contact-form reveal">
          <h2 className="reveal-title">Escríbanos</h2>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" />

          <label htmlFor="email">Correo</label>
          <input id="email" name="email" type="email" placeholder="tu@correo.com" />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="6" placeholder="Escribe tu consulta" />

          <button type="submit" className="main-cta reveal-button">Enviar mensaje</button>
        </form>
      </section>

      <WaveDivider tone="beige" />
      <section className="map-zone">
        <div className="container map-wrap">
          <iframe
            title="Ubicacion de Quesos Pimpos"
            src="https://www.google.com/maps?q=San+Antonio+de+Rivas+Perez+Zeledon+Costa+Rica&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEntranceAnimations();

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">Quesos Pimpos</Link>
        <button className={`hamburger ${menuOpen ? 'is-open' : ''}`} aria-label="Abrir menu" onClick={() => setMenuOpen((s) => !s)}>
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav mobile-open' : 'nav'} aria-label="Navegacion principal">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')} end onClick={() => setMenuOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')} onClick={() => setMenuOpen(false)}>
            Nosotros
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')} onClick={() => setMenuOpen(false)}>
            Productos
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')} onClick={() => setMenuOpen(false)}>
            Contacto
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-content container">
          <div>
            <h3>Quesos Pimpos</h3>
            <p>Orgullosamente desde el 2000.</p>
            <p>Ser la marca regional referente en confianza y sabor, destacando por nuestra constancia operativa y trato humano.</p>
          </div>
          <div>
            <h4>Enlaces</h4>
            <p>Inicio</p>
            <p>Nosotros</p>
            <p>Productos</p>
            <p>Contacto</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>Teléfono y WhatsApp: +506 57151979</p>
            <p>Correo: joseacuna794@gmail.com</p>
            <p>San Antonio de Rivas, Pérez Zeledón</p>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Quesos Pimpos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
