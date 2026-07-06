import React from 'react';
import './yunus.css';

export default function Yunus() {
  return (
    <div className="aperture-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">aperture</div>
          <nav className="nav-menu">
            <a href="#business">Business areas</a>
            <a href="#featured">Featured images</a>
            <a href="#gear">Gear cage</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="get-template-btn">Get template</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="subtitle">PHOTOGRAPHER & FILMMAKER</p>
          <h1 className="main-title">Aperture Studios</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum pellentesque imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        {/* Footer Metadata */}
        <div className="metadata">
          <span className="meta-item">
            <span className="icon">⏱</span> 1/2000s
          </span>
          <span className="meta-item">
            <span className="icon">f</span> f/11
          </span>
          <span className="meta-item">ISO 100</span>
          <span className="meta-item">
            <span className="icon">📍</span> iceland
          </span>
        </div>
      </section>
    </div>
  );
}
