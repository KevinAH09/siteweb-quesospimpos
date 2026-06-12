import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import vacas2 from './assets/images/nosotros/vacas-2.webp';
import potrero4 from './assets/images/nosotros/potrero-4.webp';
import vacas7 from './assets/images/vacas-7.webp';
import vacas8 from './assets/images/vacas-8.webp';
import queso3 from './assets/images/productos/queso-3.webp';
import leche4 from './assets/images/productos/leche-4.webp';
import slide1 from './assets/images/slide-1.webp';
import slide3 from './assets/images/slide-3.webp';
import slideHome1 from './assets/images/slide-home-1.webp';
import vacas5 from './assets/images/vacas-5.webp';
import shapeDivisor from './assets/images/shape-divisor.webp';
import waveBage from './assets/images/wave-bage.svg';
import waveVerde from './assets/images/wave-verde.svg';
import waveWhite from './assets/images/wave-white.svg';
import galeriaN1 from './assets/images/galeria-nuevas1.webp';
import galeriaN2 from './assets/images/galeria-nuevas2.webp';
import galeriaN3 from './assets/images/galeria-nuevas3.webp';
import galeriaN4 from './assets/images/galeria-nuevas4.webp';
import galeriaN5 from './assets/images/galeria-nuevas5.webp';
import galeriaN6 from './assets/images/galeria-nuevas6.webp';
import natilla from './assets/images/productos/natilla.webp';
import logoColor from './assets/images/logo-color.webp';
import logoFooter from './assets/images/logo-transparente-numero-blanco.webp';

const homeData = {
  kicker: 'Quesos Jersey',
  heroTitle: 'El sabor auténtico del campo en su mesa.',
  heroText:
    'Llevamos más de 20 años transformando la pureza de San Antonio de Rivas en productos lácteos frescos y naturales. De nuestra finca a su familia, con el compromiso de una producción honesta y sostenible.',
  introTitle: 'Un legado familiar que nace de la tierra.',
  introText:
    'En el año 2000, don José Acuña Hernández inició este sueño con apenas 6 vacas y el trabajo dedicado del ordeño a mano. Hoy, con más de 20 vacas en producción, Quesos Jersey es un proyecto integral que busca unir a la familia y ser un ejemplo de superación en San Antonio de Rivas.',
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
    { iconClass: 'fas fa-cow', name: 'Leche Entera Natural', text: 'Leche 100% pura, sin descremar, conservando toda su cremosidad y valor nutricional. Presentaciones: 1L, 1.5L, 2L y 3L.' },
    { iconClass: 'fas fa-cheese', name: 'Queso Tierno Artesanal', text: 'Elaborado diariamente con leche entera de calidad y prensado en frío. Venta por kilogramo.' },
    { iconClass: 'fas fa-bowl-food', name: 'Natilla de la Casa', text: 'Receta familiar 100% natural y libre de químicos. Presentaciones: 250g y 500g.' },
    { iconClass: 'fas fa-blender', name: 'Leche Agria Tradicional', text: 'El acompañamiento perfecto con la consistencia ideal y el sabor del campo. Presentaciones: 1L, 1.5L, 2L y 3L.' }
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
  { image: slideHome1, label: 'Lanzamiento: Natilla y productos frescos' },
  { image: slide1, label: 'Finca de Quesos Jersey' },
  { image: slide3, label: 'Productos frescos de Quesos Jersey' }
];

const NOSOTROS_GALLERY_FILES = [
  'vacas-1.webp',
  'vacas-4.webp',
  'vacas-5.webp',
  'vacas-7.webp',
  'vacas-8.webp',
  'potrero-4.webp',
  'potrero-5.webp',
  'leche-5.webp'
];

function nosotrosGalleryImageSrc(filename) {
  const root = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  return `${root}/imagenes/${filename}`;
}

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
      <section className="hero-slider" aria-label="Quesos Jersey">
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
        <div className="hero-arrows" role="group" aria-label="Navegación del carrusel">
          <button type="button" className="hero-arrow-btn" aria-label="Ver imagen anterior" onClick={showPreviousSlide}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path
                d="M14 7.5l-5.5 5 5.5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" className="hero-arrow-btn" aria-label="Ver imagen siguiente" onClick={showNextSlide}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path
                d="M10 7.5l5.5 5-5.5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
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

      <section className="products-zone products-zone-diferencia">
        <div className="container">
          <h2 className="reveal reveal-title">Lo que nos diferencia</h2>
          <div className="icon-grid">
            <article className="reveal">
              <div className="icon">
                <i className="fas fa-award" aria-hidden="true" />
              </div>
              <h3>Tradición desde el 2000</h3>
              <p>Orgullosamente desde San Antonio de Rivas, con más de dos décadas de trabajo familiar.</p>
            </article>
            <article className="reveal">
              <div className="icon">
                <i className="fas fa-leaf" aria-hidden="true" />
              </div>
              <h3>Calidad Natural</h3>
              <p>Leche entera, productos frescos y procesos libres de químicos innecesarios.</p>
            </article>
            <article className="reveal">
              <div className="icon">
                <i className="fas fa-seedling" aria-hidden="true" />
              </div>
              <h3>Visión Ecológica</h3>
              <p>Regeneramos la finca con cercas vivas, pastoreo inteligente y nutrición natural del suelo.</p>
            </article>
            <article className="reveal">
              <div className="icon">
                <i className="fas fa-truck-fast" aria-hidden="true" />
              </div>
              <h3>Entrega y confianza</h3>
              <p>Rutas semanales en Pérez Zeledón y atención directa para hogares y negocios que buscan frescura constante.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="container">
          <header className="process-head">
            <p className="eyebrow light">Proceso Diario</p>
            <h2 className="reveal reveal-title">{homeData.processTitle}</h2>
            <p className="process-lead">{homeData.processText}</p>
          </header>
          <div className="process-split">
            <figure className="process-photo">
              <img
                className="reveal reveal-image"
                src={vacas5}
                alt="Vacas en la finca: del campo a su puerta, productos frescos de San Antonio de Rivas"
              />
            </figure>
            <ol className="process-timeline">
              {homeData.processSteps.map((step, index) => (
                <li className="reveal" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
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
            <Link to="/productos" className="reveal-button promo-strip-link">
              Ver más
            </Link>
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
            En el año 2000, don José Acuña Hernández inició este sueño con apenas 6 vacas y el trabajo dedicado del ordeño a mano. Hoy, con más de 20 vacas en producción, Quesos Jersey es un proyecto integral que busca unir a la familia y ser un ejemplo de superación en San Antonio de Rivas.
          </p>
          <p>
            No solo producimos lácteos; cuidamos la sanidad animal y el comercio justo. Creemos que un animal bien alimentado es más sano y fértil, lo que nos permite ofrecer productos superiores sin depender de químicos innecesarios.
          </p>
        </article>
        <div className="intro-gallery">
          <img className="reveal reveal-image" src={vacas7} alt="Ganado en la finca de San Antonio de Rivas" />
            <img className="reveal reveal-image" src={vacas8} alt="Vacas en pastoreo, Quesos Jersey" />
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
      <WaveDivider tone="beige" />
      <section className="nosotros-gallery-band" aria-label="Galería de la finca">
        <div className="container">
          <header className="nosotros-gallery-head">
            <p className="eyebrow">Galería</p>
            <h2 className="reveal reveal-title">Nuestra finca</h2>
          </header>
          <div className="nosotros-gallery-grid">
            {(() => {
              const gallerySources = [
                ...NOSOTROS_GALLERY_FILES.map((f) => nosotrosGalleryImageSrc(f)),
                galeriaN1,
                galeriaN2,
                galeriaN3,
                galeriaN4,
                galeriaN5,
                galeriaN6
              ];

              return gallerySources.map((src, index) => (
                <figure key={String(index)} className="nosotros-gallery-cell reveal">
                  <img src={src} alt={`Finca y producción Quesos Jersey, imagen ${index + 1}`} loading="lazy" />
                </figure>
              ));
            })()}
          </div>
        </div>
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
    { title: 'Natilla de la Casa', image: natilla, description: 'Producida bajo una receta única familiar. Es 100% natural y libre de químicos.', formats: 'Presentaciones: 250g y 500g' },
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
          <h2>¡Haga su pedido hoy mismo!</h2>
          <p>Atendemos hogares, pulperías y negocios con entregas semanales programadas en Pérez Zeledón.</p>
          <p><strong>Horario:</strong> Lunes a Domingo de 6:00 AM a 6:00 PM</p>
          <p><strong>Ubicación:</strong> San Antonio de Rivas, Pérez Zeledón</p>
          <p><strong>WhatsApp/Tel:</strong> +506 5715-1979</p>
          <p><strong>Correo:</strong> joseacuna794@gmail.com</p>
        </article>

        <form className="contact-form reveal">
          <h2>Escríbanos</h2>
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
            title="Ubicacion de Quesos Jersey"
            src="https://www.google.com/maps?q=San+Antonio+de+Rivas+Perez+Zeledon+Costa+Rica&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEntranceAnimations();

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <img src={logoColor} alt="Quesos Jersey" className="brand-logo" />
        </Link>
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
            <img src={logoFooter} alt="Quesos Jersey" className="footer-logo" />
            <p>Ser la marca regional referente en confianza y sabor, destacando por nuestra constancia operativa y trato humano.</p>
          </div>
          <div>
            <h4>Enlaces</h4>
            <p><Link to="/">Inicio</Link></p>
            <p><Link to="/nosotros">Nosotros</Link></p>
            <p><Link to="/productos">Productos</Link></p>
            <p><Link to="/contacto">Contacto</Link></p>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>Teléfono y WhatsApp: +506 57151979</p>
            <p>Correo: joseacuna794@gmail.com</p>
            <p>San Antonio de Rivas, Pérez Zeledón</p>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Quesos Jersey. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
