import React, { useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import vacas2 from './assets/images/nosotros/vacas-2.webp';
import potrero4 from './assets/images/nosotros/potrero-4.webp';
import queso3 from './assets/images/productos/queso-3.webp';
import leche4 from './assets/images/productos/leche-4.webp';
import slide1 from './assets/images/slide-1.webp';
import headTitles from './assets/images/head-titles.webp';

const homeData = {
  kicker: 'Quesos Pimpos',
  heroTitle: 'El sabor auténtico del campo en su mesa.',
  heroText:
    'Llevamos más de 20 años transformando la pureza de San Antonio de Rivas en productos lácteos frescos y naturales. De nuestra finca a su familia, con el compromiso de una producción honesta.',
  introTitle: 'Nuestra Historia',
  introText:
    'Todo comenzó en el año 2000, cuando José Acuña Hernández inició este camino con apenas seis vacas y el trabajo dedicado del ordeño a mano. Lo que empezó como un pequeño esfuerzo personal en San Antonio de Rivas, ha crecido gracias a la constancia y al amor por la tierra.',
  introPoints: [
    'Producción responsable y trazable',
    'Finca en transición hacia prácticas ecológicas',
    'Entrega directa sin intermediarios'
  ],
  processTitle: 'Proceso y Calidad',
  processText:
    'Mantenemos controles sencillos y rigurosos para garantizar frescura y sabor en cada entrega.',
  processSteps: ['Ordeño matutino', 'Enfriamiento y almacenamiento', 'Producción artesanal', 'Distribución semanal'],
  impactTitle: 'Eficiencia y Servicio',
  impactText:
    'Trabajamos con foco en calidad, sostenibilidad y trato directo con nuestros clientes.',
  supportTitle: 'Pida frescura, reciba calidad.',
  supportText:
    'Atendemos hogares, pulperías y negocios locales con entregas semanales programadas.',
  productsTitle: 'Gama de Productos',
  products: [
    { iconClass: 'fas fa-mug-saucer', name: 'Leche Fresca', text: 'La pureza de la mañana en presentaciones: 1L, 1.5L, 2L y 3L.' },
    { iconClass: 'fas fa-vial', name: 'Leche Agria', text: 'Textura y acidez ideal para acompañar comidas. Formatos: 1L, 1.5L, 2L y 3L.' },
    { iconClass: 'fas fa-cheese', name: 'Queso Tierno', text: 'Elaborado artesanalmente cada día. Venta por kilogramo.' },
    { iconClass: 'fas fa-ice-cream', name: 'Natilla de la Casa', text: 'Cremosa y con el sabor tradicional. Formatos: 250g y 500g.' }
  ],
  promoTitle: 'Ver Productos',
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

function PageBanner({ title }) {
  return (
    <section className="inner-hero head-breadcrumbs">
      <div className="container">
        <h1>{title}</h1>
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
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${slide1})` }}>
        <div className="hero-overlay" />
        <div className="hero-inner container">
          <p className="eyebrow kicker">{homeData.kicker}</p>
          <h1>{homeData.heroTitle}</h1>
          <p>{homeData.heroText}</p>
          <Link className="main-cta" to="/productos">Ver Productos</Link>
        </div>
        <div className="wave" />
      </section>

      <section className="container intro-grid">
        <article className="intro-copy">
          <p className="eyebrow">Who We Are</p>
          <h2>{homeData.introTitle}</h2>
          <p>{homeData.introText}</p>
          <ul>
            {homeData.introPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <div className="intro-gallery">
          <img src={vacas2} alt="Equipo de lecheria" />
          <img src={potrero4} alt="Vacas en la finca" />
        </div>
      </section>

      <section className="products-zone">
        <div className="container">
          <h2>Lo que nos diferencia</h2>
          <div className="icon-grid">
            <article>
              <h3>Tradición desde el 2000</h3>
              <p>Experiencia que se traduce en confianza y sabor auténtico.</p>
            </article>
            <article>
              <h3>Visión Ecológica</h3>
              <p>Trabajamos para ser una finca amigable con el entorno.</p>
            </article>
            <article>
              <h3>Trato Directo</h3>
              <p>Sin intermediarios, del productor al consumidor final.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="container process-grid">
          <div>
            <p className="eyebrow light">Our Service</p>
            <h2>{homeData.processTitle}</h2>
            <p>{homeData.processText}</p>
            <img src={headTitles} alt="Proceso de extraccion" />
          </div>
          <ol>
            {homeData.processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="wave light" />
      </section>

      <section className="container efficiency">
        <div>
          <p className="eyebrow">Our Goals</p>
          <h2>{homeData.impactTitle}</h2>
          <p>{homeData.impactText}</p>
        </div>
        <img src={leche4} alt="Control de calidad" />
      </section>

      <section className="pasture-banner" aria-label="paisaje de finca" />

      <section className="container support-grid">
        <img src={queso3} alt="Soporte en la granja" />
        <div>
          <p className="eyebrow">Support</p>
          <h2>{homeData.supportTitle}</h2>
          <p>{homeData.supportText}</p>
        </div>
      </section>

      <section className="products-zone">
        <div className="container">
          <p className="eyebrow">Product Range</p>
          <h2>{homeData.productsTitle}</h2>
          <div className="icon-grid">
            {homeData.products.map((item) => (
            <article key={item.name}>
                <div className="icon"><i className={item.iconClass} aria-hidden="true" /></div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="promo-strip">
            <div>
              <p className="eyebrow light">Special Offer</p>
              <h3>{homeData.promoTitle}</h3>
            </div>
            <button type="button">Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonial section removed as requested */}
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
          <h2>De 6 vacas a un sueño familiar sostenible</h2>
          <p>
            Todo comenzó en el año 2000, cuando José Acuña Hernández inició este camino con apenas seis vacas y el trabajo dedicado del ordeño a mano. Lo que empezó como un pequeño esfuerzo personal en San Antonio de Rivas, ha crecido gracias a la constancia y al amor por la tierra.
          </p>
          <p>
            Hoy, con más de 20 vacas en producción, en Quesos Pimpos no solo buscamos ofrecer la mejor calidad; estamos evolucionando hacia un modelo de finca ecológica. Creemos en el respeto al medio ambiente y al bienestar animal como el único camino para garantizar un producto nutritivo y con el sabor de verdad.
          </p>
        </article>
        <div className="intro-gallery">
          <img src={vacas2} alt="Nuestra granja familiar" />
          <img src={potrero4} alt="Proceso artesanal de nuestros productos" />
        </div>
      </section>
      <section className="container mission-vision-grid">
        <article className="mission-box">
          <div className="icon"><i className="fas fa-bullseye" aria-hidden="true" /></div>
          <h3>Misión</h3>
          <p>
            Producir y distribuir lácteos de alta calidad para hogares y negocios, 
            manteniendo una relación honesta con clientes, equipo y comunidad.
          </p>
        </article>
        <article className="vision-box">
          <div className="icon"><i className="fas fa-eye" aria-hidden="true" /></div>
          <h3>Visión</h3>
          <p>
            Ser una marca regional referente en confianza, sabor y servicio, 
            destacando por nuestra constancia operativa y trato humano.
          </p>
        </article>
      </section>
      <section className="image-cta-section">
        <div className="image-cta-overlay" />
        <div className="container image-cta-content">
          <h3>Hablemos De Tu Proximo Pedido</h3>
          <p>Si quieres conocer precios, formatos o entregas semanales, nuestro equipo te asesora de inmediato.</p>
          <Link className="main-cta link-btn" to="/contacto">
            Ir A Contacto
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductosPage() {
  const productGallery = [
    { title: 'Leche Fresca', image: leche4, description: 'La pureza de la mañana en presentaciones para cada necesidad.', formats: '1L, 1.5L, 2L, 3L' },
    { title: 'Leche Agria', image: leche4, description: 'El acompañamiento perfecto para sus comidas, con la textura y acidez ideal.', formats: '1L, 1.5L, 2L, 3L' },
    { title: 'Queso Tierno', image: queso3, description: 'Elaborado artesanalmente cada día. Frescura que se siente en cada bocado.', formats: 'Venta por kilogramo' },
    { title: 'Natilla de la Casa', image: queso3, description: 'Cremosa y con el sabor tradicional de la zona.', formats: '250g, 500g' }
  ];

  return (
    <>
      <PageBanner title="Productos" />
      <section className="container product-page">
        <div className="gallery-grid">
          {productGallery.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt={item.title} />
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
          <h3>Quieres Una Cotizacion Personalizada?</h3>
          <p>Cuentanos que productos necesitas y te enviamos una propuesta segun volumen y frecuencia.</p>
          <Link className="main-cta link-btn" to="/contacto">
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
        <article className="contact-info">
          <h2>Pida frescura, reciba calidad.</h2>
          <p>Atendemos hogares, pulperías y negocios locales con entregas semanales programadas.</p>
          <p><strong>Horario:</strong> Lunes a Domingo de 6:00 AM a 6:00 PM</p>
          <p><strong>Ubicación:</strong> San Antonio de Rivas, Pérez Zeledón</p>
          <p><strong>WhatsApp/Tel:</strong> +506 5715-1979</p>
          <p><strong>Correo:</strong> joseacuna794@gmail.com</p>
        </article>

        <form className="contact-form">
          <h2>Escribenos</h2>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" />

          <label htmlFor="email">Correo</label>
          <input id="email" name="email" type="email" placeholder="tu@email.com" />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="6" placeholder="Escribe tu consulta" />

          <button type="submit" className="main-cta">Enviar Mensaje</button>
        </form>
      </section>

      <section className="container map-wrap">
        <iframe
          title="Ubicacion de Quesos Pimpos"
          src="https://www.google.com/maps?q=San+Antonio+de+Rivas+Perez+Zeledon+Costa+Rica&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <h3>Join Our Newsletter And Be The First To Know About:</h3>
            <p>New products, weekly offers and delivery updates.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
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
        <p className="copyright">(c) {new Date().getFullYear()} Quesos Pimpos. All rights reserved.</p>
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
