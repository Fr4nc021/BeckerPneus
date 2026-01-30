import { useState, useEffect, useRef } from 'react'
import './App.css'
import EmProducao from './EmProducao'
import fundoImage from './assets/fundo.png'
import xbriLogo from './assets/marcas/Xbri.png'
import comforserLogo from './assets/marcas/Comforser.png'
import roadcruzaLogo from './assets/marcas/RoadCruza.webp'
import provatoLogo from './assets/marcas/Provato.webp'
import linglongLogo from './assets/marcas/Linglong.png'
import roadxLogo from './assets/marcas/Roadx.png'
import westlakeLogo from './assets/marcas/Westlake.png'
import suvImage from './assets/tipo/suv.png'
import passeioImage from './assets/tipo/passeio.png'
import performanceImage from './assets/tipo/performance.png'
import tratorImage from './assets/tipo/trator.png'
import logoImage from './assets/logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showEmProducao, setShowEmProducao] = useState(false)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  // Verifica se deve mostrar a página "em produção" baseado na URL
  useEffect(() => {
    if (window.location.hash === '#em-producao') {
      setShowEmProducao(true)
    }
  }, [])

  // Escuta mudanças no hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#em-producao') {
        setShowEmProducao(true)
      } else if (window.location.hash === '' || !window.location.hash) {
        setShowEmProducao(false)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  if (showEmProducao) {
    return <EmProducao />
  }

  return (
    <>
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-foto">
          <img src={logoImage} alt="Becker Pneus" />
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#servicos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#marcas" className="nav-link" onClick={() => setIsMenuOpen(false)}>Marcas</a>
          <a href="https://wa.me/555499999339" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contato</a>
        </nav>

        {/* Contact Button */}
        <div className="contact-button-wrapper">
          <a 
            href="https://wa.me/555499999339" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-button"
          >
            <svg
              className="phone-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="contact-text">Entrar em Contato</span>
        </a>
      </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    {/* Hero Section */}
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line1">BeckerPneus</span>
            <span className="hero-title-line2">Pneus de Confiança</span>
            <span className="hero-title-line3">para seu Veículo</span>
          </h1>
          
          <p className="hero-description">
            Marcas renomadas, atendimento especializado e preços que cabem no seu bolso. Encontre o pneu ideal para você.
          </p>

          <div className="hero-buttons">
            <a href="https://wa.me/555499999339" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar Orçamento
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#marcas" className="btn-secondary">Ver Marcas</a>
            <a href="#em-producao" onClick={(e) => { e.preventDefault(); setShowEmProducao(true); window.location.hash = 'em-producao'; }} className="btn-small">Nosso Site!</a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <line x1="5" y1="8" x2="12" y2="8"></line>
                <line x1="5" y1="12" x2="12" y2="12"></line>
              </svg>
              <span>Entrega Rápida</span>
            </div>
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Garantia Total</span>
            </div>
            <div className="feature-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              <span>Qualidade Premium</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <img src={fundoImage} alt="Pneu" className="hero-image" />
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/555499999339" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </section>

    {/* Services Section */}
    <section id="servicos" className="services fade-in" ref={(el) => { sectionsRef.current[0] = el }}>
      <div className="services-container">
        <button className="services-badge">Nossos Serviços</button>
        
        <h2 className="services-title">
          O que você encontra <span className="services-title-highlight">aqui</span>
        </h2>
        
        <p className="services-description">
          Oferecemos uma ampla variedade de pneus para atender todas as suas necessidades, com qualidade e preços competitivos.
        </p>

        <div className="services-cards">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17h14l-1-7H6l-1 7z"></path>
                <path d="M5 17l-1-7H2"></path>
                <path d="M19 17l1-7h3"></path>
                <path d="M7 17v-5"></path>
                <path d="M17 17v-5"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
            </div>
            <h3 className="service-card-title">Todos os veículos</h3>
            <p className="service-card-description">Pneus para carros, motos, caminhões e SUVs</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <h3 className="service-card-title">Marcas reconhecidas</h3>
            <p className="service-card-description">Trabalhamos com as melhores marcas do mercado</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="service-card-title">Qualidade garantida</h3>
            <p className="service-card-description">Segurança e desempenho para sua tranquilidade</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="service-card-title">Soluções completas</h3>
            <p className="service-card-description">Orientação especializada para o dia a dia</p>
          </div>
        </div>
      </div>
    </section>

    {/* Brands Section */}
    <section id="marcas" className="brands fade-in" ref={(el) => { sectionsRef.current[1] = el }}>
      <div className="brands-container">
        <button className="brands-badge">Parceiros de Confiança</button>
        
        <h2 className="brands-title">
          Marcas que <span className="brands-title-highlight">Trabalhamos</span>
        </h2>
        
        <p className="brands-description">
          Trabalhamos apenas com as melhores marcas do mercado - qualidade e confiança garantidas.
        </p>

        <div className="brands-grid">
          <div className="brand-card">
            <img src={xbriLogo} alt="Xbri" className="brand-logo" />
          </div>
          <div className="brand-card">
            <img src={comforserLogo} alt="Comforser" className="brand-logo" />
          </div>
          <div className="brand-card">
            <img src={roadcruzaLogo} alt="RoadCruza" className="brand-logo brand-logo-large" />
          </div>
          <div className="brand-card">
            <img src={provatoLogo} alt="Provato" className="brand-logo brand-logo-large" />
          </div>
          <div className="brand-card">
            <img src={linglongLogo} alt="Linglong" className="brand-logo brand-logo-large" />
          </div>
          <div className="brand-card">
            <img src={roadxLogo} alt="Roadx" className="brand-logo brand-logo-large" />
          </div>
          <div className="brand-card">
            <img src={westlakeLogo} alt="Westlake" className="brand-logo" />
          </div>
        </div>

        <button className="brands-more-button">
          e muito mais +
        </button>
      </div>
    </section>

    {/* Quality & Price Section */}
    <section id="qualidade" className="quality-price fade-in" ref={(el) => { sectionsRef.current[2] = el }}>
      <div className="quality-price-container">
        <button className="quality-price-badge">Por que Escolher a BeckerPneus</button>
        
        <h2 className="quality-price-title">
          Qualidade & <span className="quality-price-title-highlight">Preço Justo</span>
        </h2>

        <div className="quality-price-cards">
          {/* Card 1: Qualidade Garantida */}
          <div className="quality-card">
            <div className="quality-card-icon quality-card-icon-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="quality-card-title">Qualidade Garantida</h3>
            <p className="quality-card-description">
              Confiança nas marcas e garantia de fábrica em todos os produtos.
            </p>
            <ul className="quality-card-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Certificação DOT</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Testes de segurança</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Garantia de 5 anos</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Preços Competitivos */}
          <div className="quality-card">
            <div className="quality-card-icon quality-card-icon-blue">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="quality-card-title">Preços Competitivos</h3>
            <p className="quality-card-description">
              Oferecemos as melhores condições do mercado, com diversas opções de pagamento.
            </p>
            <ul className="quality-card-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Parcelamento em 12x</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Desconto à vista</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Preço especial para frotas</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Atendimento Técnico */}
          <div className="quality-card">
            <div className="quality-card-icon quality-card-icon-orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z"></path>
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z"></path>
              </svg>
            </div>
            <h3 className="quality-card-title">Atendimento Técnico</h3>
            <p className="quality-card-description">
              Nossa equipe especializada ajuda você a escolher o pneu ideal para seu veículo.
            </p>
            <ul className="quality-card-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Consultoria grátis</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Suporte via WhatsApp</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Resposta em até 2h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Vehicle Types Section */}
    <section id="tipos" className="vehicle-types fade-in" ref={(el) => { sectionsRef.current[3] = el }}>
      <div className="vehicle-types-container">
        <button className="vehicle-types-badge">Categorias</button>
        
        <h2 className="vehicle-types-title">
          Pneus por <span className="vehicle-types-title-highlight">Tipo de Veículo</span>
        </h2>

        <div className="vehicle-types-cards">
          {/* Card 1: SUV */}
          <div className="vehicle-card">
            <div className="vehicle-card-image-wrapper">
              <img src={suvImage} alt="SUV" className="vehicle-card-image" />
            </div>
            <h3 className="vehicle-card-title">SUV</h3>
            <p className="vehicle-card-description">
              Pneus robustos para aventuras on e off-road
            </p>
          </div>

          {/* Card 2: Carro de Passeio */}
          <div className="vehicle-card">
            <div className="vehicle-card-image-wrapper">
              <img src={passeioImage} alt="Carro de Passeio" className="vehicle-card-image" />
            </div>
            <h3 className="vehicle-card-title">Carro de Passeio</h3>
            <p className="vehicle-card-description">
              Conforto e economia para o dia a dia
            </p>
          </div>

          {/* Card 3: Alta Performance */}
          <div className="vehicle-card">
            <div className="vehicle-card-image-wrapper">
              <img src={performanceImage} alt="Alta Performance" className="vehicle-card-image" />
            </div>
            <h3 className="vehicle-card-title">Alta Performance</h3>
            <p className="vehicle-card-description">
              Máxima aderência e controle
            </p>
          </div>

          {/* Card 4: Pneus Econômicos */}
          <div className="vehicle-card">
            <div className="vehicle-card-image-wrapper">
              <img src={tratorImage} alt="Pneus de trator" className="vehicle-card-image" />
            </div>
            <h3 className="vehicle-card-title">Pneus Trator</h3>
            <p className="vehicle-card-description">
              Qualidade com o melhor custo-benefício
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="contact-section-dark fade-in" ref={(el) => { sectionsRef.current[4] = el }}>
      <div className="contact-section-dark-container">
        <button className="contact-section-dark-badge">Contato</button>
        
        <h2 className="contact-section-dark-title">
          Entre em <span className="contact-section-dark-title-highlight">Contato</span>
        </h2>

        <div className="contact-section-dark-cards">
          {/* Telefone */}
          <div className="contact-info-card-dark">
            <div className="contact-info-icon-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="contact-info-title-dark">Telefone</h3>
            <a href="tel:+555499999339" className="contact-info-text-dark">+55 54 9999-9339</a>
          </div>

          {/* Email */}
          <div className="contact-info-card-dark">
            <div className="contact-info-icon-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="contact-info-title-dark">Email</h3>
            <a href="mailto:contato@beckerpneus.com.br" className="contact-info-text-dark">contato@beckerpneus.com.br</a>
          </div>

          {/* Site */}
          <div className="contact-info-card-dark">
            <div className="contact-info-icon-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="contact-info-title-dark">Site</h3>
            <a href="https://www.beckerpneus.com.br" target="_blank" rel="noopener noreferrer" className="contact-info-text-dark">www.beckerpneus.com.br</a>
          </div>
      
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer fade-in" ref={(el) => { sectionsRef.current[5] = el }}>
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src={logoImage} alt="Becker Pneus" />
            </div>
            <p className="footer-description">
              Sua loja de confiança para pneus de qualidade. Atendimento especializado e os melhores preços do mercado.
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <h3 className="footer-links-title">Links Rápidos</h3>
            <ul className="footer-links-list">
              <li><a href="#marcas">Marcas</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#qualidade">Qualidade & Preço</a></li>
              <li><a href="#tipos">Tipos de Veículo</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Contato</h3>
            <ul className="footer-contact-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+555499999339">+55 54 9999-9339</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:contato@beckerpneus.com.br">contato@beckerpneus.com.br</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3 className="footer-social-title">Redes Sociais</h3>
            <div className="footer-social-icons">
              <a href="https://wa.me/555499999339" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/becker_pneus/" className="footer-social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} BeckerPneus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
