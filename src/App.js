import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const homeData = {
  kicker: 'Pure Dairy Farm',
  heroTitle: 'Nourishing Families With Pure Dairy Goodness',
  heroText:
    'Fresh milk straight from our pasture to your table. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  introTitle: 'Fresh Milk Straight From Our Pasture To Your Table',
  introText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae blandit orci, in semper velit. Integer vulputate sem id eros fermentum, vitae bibendum lectus malesuada.',
  introPoints: [
    'Recommended for family kitchens and local stores',
    'High quality fresh milk with daily control',
    'Simple traceability from farm to table'
  ],
  processTitle: 'Farm Process That Protects Quality',
  processText:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Quis autem vel eum iure reprehenderit.',
  processSteps: ['Take raw milk every morning', 'Storage and cooling control', 'Pure farming process inspection', 'Consistent delivery logistics'],
  impactTitle: 'Strategies To Improve Efficiency And Reduce Operational Costs',
  impactText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  supportTitle: 'Get In Touch Today For Trusted Dairy Product Support',
  supportText:
    'Tell us your volume and schedule. We coordinate weekly supply for homes, cafes and restaurants with clear communication.',
  productsTitle: 'Explore Our Range Of Fresh And Nutritious Dairy Products',
  products: [
    { icon: 'FM', name: 'Fresh Milk', text: 'Whole and light formats for daily consumption.' },
    { icon: 'QC', name: 'Quality Cheese', text: 'Soft and semi hard options for every recipe.' },
    { icon: 'PC', name: 'Pure Cream', text: 'Rich texture for bakery, sauces and desserts.' },
    { icon: 'HD', name: 'Home Delivery', text: 'Reliable weekly dispatch in your area.' }
  ],
  promoTitle: "Don't Miss Out Enjoy Up To 20% Off Today!",
  testimonials: [
    {
      author: 'Isabella Romero',
      role: 'Cafe Owner',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    },
    {
      author: 'Ryan Molina',
      role: 'Family Buyer',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    }
  ]
};

function PageBanner({ title }) {
  return (
    <section className="inner-hero">
      <div className="container">
        <h1>{title}</h1>
        <p className="crumbs">
          <Link to="/">Home</Link>
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
      <section className="hero">
        <div className="hero-inner container">
          <p className="eyebrow">{homeData.kicker}</p>
          <h1>{homeData.heroTitle}</h1>
          <p>{homeData.heroText}</p>
          <button className="main-cta" type="button">Get Started</button>
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
          <img src="https://images.unsplash.com/photo-1594761051656-6126f5c25f3e?auto=format&fit=crop&w=700&q=80" alt="Equipo de lecheria" />
          <img src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80" alt="Vacas en la finca" />
        </div>
      </section>

      <section className="process-band">
        <div className="container process-grid">
          <div>
            <p className="eyebrow light">Our Service</p>
            <h2>{homeData.processTitle}</h2>
            <p>{homeData.processText}</p>
            <img src="https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80" alt="Proceso de extraccion" />
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
        <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80" alt="Control de calidad" />
      </section>

      <section className="pasture-banner" aria-label="paisaje de finca" />

      <section className="container support-grid">
        <img src="https://images.unsplash.com/photo-1566583658635-1f3b2f3f7f2b?auto=format&fit=crop&w=900&q=80" alt="Soporte en la granja" />
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
                <div className="icon">{item.icon}</div>
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

      <section className="container testimonial-zone">
        <div>
          <p className="eyebrow">What Clients Say</p>
          <h2>Real Feedback From Families And Businesses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae sem vulputate, at cursus justo condimentum.</p>
        </div>
        <div className="quotes">
          {homeData.testimonials.map((item) => (
            <article key={item.author}>
              <p>{item.text}</p>
              <h4>{item.author}</h4>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </section>
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
          <h2>Una Tradición Familiar de Excelencia Láctea</h2>
          <p>
            Desde hace más de 20 años, Quesos Pimpos ha sido sinónimo de calidad y confianza en la región. 
            Comenzamos como una pequeña granja familiar con la visión de llevar productos lácteos frescos 
            y naturales directamente a las mesas de las familias locales.
          </p>
          <p>
            A lo largo de los años, hemos crecido manteniendo nuestros valores fundamentales: 
            el respeto por la tierra, el cuidado de nuestros animales y el compromiso con la comunidad. 
            Cada litro de leche, cada queso artesanal, lleva consigo esta historia de dedicación y pasión.
          </p>
        </article>
        <div className="intro-gallery">
          <img src="https://images.unsplash.com/photo-1594761051656-6126f5c25f3e?auto=format&fit=crop&w=700&q=80" alt="Nuestra granja familiar" />
          <img src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80" alt="Proceso artesanal de nuestros productos" />
        </div>
      </section>
      <section className="container mission-vision-grid">
        <article className="mission-box">
          <div className="icon">M</div>
          <h3>Misión</h3>
          <p>
            Producir y distribuir lácteos de alta calidad para hogares y negocios, 
            manteniendo una relación honesta con clientes, equipo y comunidad.
          </p>
        </article>
        <article className="vision-box">
          <div className="icon">V</div>
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
    { title: 'Queso Fresco', image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=900&q=80' },
    { title: 'Queso Semiduro', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80' },
    { title: 'Natilla Artesanal', image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?auto=format&fit=crop&w=900&q=80' },
    { title: 'Crema De Leche', image: 'https://images.unsplash.com/photo-1585238341986-6de4cc9a58d1?auto=format&fit=crop&w=900&q=80' },
    { title: 'Combo Familiar', image: 'https://images.unsplash.com/photo-1626201850127-a96f9f9f2dfe?auto=format&fit=crop&w=900&q=80' },
    { title: 'Linea Negocios', image: 'https://images.unsplash.com/photo-1600289031463-74df60fa7038?auto=format&fit=crop&w=900&q=80' }
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
          <h2>Informacion De Contacto</h2>
          <p><strong>Telefono:</strong> +506 8888-8888</p>
          <p><strong>Correo:</strong> contacto@quesospimpos.com</p>
          <p><strong>Horario:</strong> Lunes a Sabado, 7:00 AM - 5:00 PM</p>
          <p><strong>Direccion:</strong> San Jose, Costa Rica</p>
          <p>
            Atendemos pedidos para hogares, restaurantes y comercios. Nuestro equipo responde rapido por WhatsApp y correo.
          </p>
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
          src="https://www.google.com/maps?q=San+Jose+Costa+Rica&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand">Quesos Pimpos</Link>
        <nav aria-label="Navegacion principal">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')} end>
            Home
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
            Nosotros
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
            Productos
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')}>
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
            <p>Home</p>
            <p>Nosotros</p>
            <p>Productos</p>
            <p>Contacto</p>
          </div>
          <div>
            <h4>On The Farm</h4>
            <p>Phone: +506 8888-8888</p>
            <p>Email: contacto@quesospimpos.com</p>
            <p>San Jose, Costa Rica</p>
          </div>
        </div>
        <p className="copyright">(c) {new Date().getFullYear()} Quesos Pimpos. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
