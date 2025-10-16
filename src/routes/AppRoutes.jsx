import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import Home from '../pages/Home.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import BookPage from '../pages/BookPage.jsx'
import OrderPage from '../pages/OrderPage.jsx'
import ClientInfoPage from '../pages/ClientInfoPage.jsx'
import BookPurchaseModal from '../components/BookPurchaseModal.jsx'

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/book', label: 'Book' },
    { path: '/order', label: 'Order' },
    { path: '/client-info', label: 'Client Info' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white border-b border-white/10 shadow-lg">
      <nav className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="font-bold text-xl md:text-2xl text-brand-cream hover:text-white transition-colors">
            DR. MF NKABINDE
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-brand-orange text-white'
                      : 'hover:bg-white/10 text-brand-cream'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="#/order"
              className="bg-brand-orange text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              BUY BOOK
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-96 opacity-100 mt-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-brand-orange text-white'
                      : 'hover:bg-white/10 text-brand-cream'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="#/order"
              onClick={closeMobileMenu}
              className="bg-brand-orange text-white px-4 py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all text-center shadow-lg mt-2"
            >
              BUY BOOK
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes(){
  return (<div className="min-h-screen flex flex-col">
    <Nav/>
    <ScrollToTop />
    <BookPurchaseModal />
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/book" element={<BookPage/>}/>
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/client-info" element={<ClientInfoPage/>}/>
      </Routes>
    </main>
  </div>)
}
