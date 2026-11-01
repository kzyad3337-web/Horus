
import Auth from "./Auth";
import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import "./App.css";

function App() {
    const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);
  

  if (showAuth) {
    return (
      <div className="auth-screen">
        <button
          className="back-to-store"
          onClick={() => setShowAuth(false)}
        >
          ← Back to Website
        </button>
        <Auth />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="top-bar">
        
      </div>

      <header className="navbar">
        <a className="logo" href="#home">
          HORUS<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
<div className="navbar-actions">
  {user ? (
    <div className="user-account">
      <span>{user.email}</span>

      <button
        className="cart-button"
        onClick={async () => {
          const { error } = await supabase.auth.signOut();

          if (error) {
            alert(error.message);
            return;
          }

          setShowAuth(false);
        }}
      >
        Logout
      </button>
    </div>
  ) : (
    <button
      className="cart-button"
      onClick={() => setShowAuth(true)}
    >
      Login / Sign Up
    </button>
  )}

</div>
        
      </header>

      <main>

<section className="hero-section" id="home">
  <div className="hero-content">
    <h1>
      RELIABLE SUPPLY
      <br />
      SOLUTIONS
    </h1>

    <h2>ACROSS EGYPT & THE REGION</h2>

    <div className="hero-line"></div>

    <p>
      Horus Egyptian Supply Co delivers high-quality sourcing,
      procurement, and supply services tailored to aviation,
      tourism, and retail sectors.
    </p>

    <a href="#services" className="hero-button">
      DISCOVER MORE →
    </a>
  </div>
</section>


        <section className="categories section" id="services">
  <div className="section-heading">
    
    <h2> Services</h2>
    <p>
      Reliable supply, sourcing, and management solutions
      for businesses across Egypt and the region.
    </p>
  </div>

  <div className="category-grid">
    <div className="category-card">
      🏢
      <h3>Furnished Apartments Management Services</h3>
    </div>

    <div className="category-card">
      🛍️
      <h3>Duty-Free & Retail Supply</h3>
    </div>

    <div className="category-card">
      ⚙️
      <h3>Customized Supply Solutions</h3>
    </div>

    <div className="category-card">
      🌍
      <h3>Import & Export Services</h3>
    </div>

    <div className="category-card">
      🏷️
      <h3>Brand Sourcing & Leasing Solutions</h3>
    </div>
  </div>
</section>


<section className="clients-section">

  <h4>OUR VALUED CLIENTS</h4>

  <p>
    We are proud to work with leading organizations in Egypt and the region.
  </p>

</section>

<div className="clients-row">

  <div className="clients-item">

    <i className="fa-solid fa-suitcase"></i>

    <div>
      <h5>DUTY-FREE</h5>
      <p>OPERATORS</p>
    </div>

  </div>

  <div className="clients-arrow">
    <i className="fa-solid fa-arrow-left"></i>
  </div>

  <span className="divider"></span>

  <div className="airline">

    <i className="fa-solid fa-plane"></i>

    <div className="airline-text">

      <span className="main">
        EGYPTAIR
      </span>

      <span className="sub">
        FOR TOURISM & DUTY FREE
      </span>

    </div>

  </div>

  <div className="arrow-left">
    <i className="fa-solid fa-arrow-right"></i>
  </div>

</div>

<section className="about-section" id="about">
  <div className="about-container">

    <div className="about-main-card">
      <span>ABOUT HORUS</span>
      <h2>About Us</h2>

      <p>
        Horus Egyptian Supply Co is a dynamic supply and
        procurement company based in Egypt, specializing
        in delivering reliable solutions to aviation,
        tourism, and retail sectors.
      </p>

      <p>
        We provide high-quality sourcing and logistics
        services with international standards.
      </p>

      <div className="director-info">
        <h3>MOHAMED SHAWKY</h3>
        <span>MANAGING DIRECTOR</span>
      </div>
    </div>

    

    <div className="about-side-card">
      <span className="about-label">OUR MISSION</span>
      <h2>Built on Quality. Driven by Trust.</h2>
      <p>
        We aim to provide dependable supply solutions
        for businesses and individuals across Egypt.
      </p>
    </div>

  </div>
</section>
      </main>
<section className="contact-section section" id="contact">
  <div className="section-heading">
    
    <h2>Contact Us</h2>
    <p>
      Have a question or need a customized supply solution?
      Get in touch with our team.
    </p>
  </div>

  <div className="contact-grid">
    <div className="contact-card">
      <span>✉️</span>
      <h3>Email Us</h3>
      <a href="mailto:Horus.supply@outlook.com">
        Horus.supply@outlook.com
      </a>
    </div>

    <div className="contact-card">
      <span>📞</span>
      <h3>Call Us</h3>
      <a href="tel:+201025700058">+20 102 570 0058</a>
      <a href="tel:+96599922425">+965 999 224 25</a>
    </div>

    <div className="contact-card">
      <span>📍</span>
      <h3> Location</h3>
      <p>Cairo, Egypt</p>
    </div>
  </div>
</section>

  </div>
  );
}

export default App; 
