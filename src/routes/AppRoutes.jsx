import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import BookPage from '../pages/BookPage.jsx'
import OrderPage from '../pages/OrderPage.jsx'
import ClientInfoPage from '../pages/ClientInfoPage.jsx'

const Nav = () => (
  <header className="sticky top-0 z-50 bg-brand-navy text-white border-b border-white/10">
    <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="font-semibold text-lg">DR. MF NKABINDE</div>
      <div className="flex items-center gap-4 text-sm md:text-base">
        {['/','/about','/book','/order','/client-info'].map((p,i)=>{
          const labels=['Home','About','Book','Order','Client Info']
          return <NavLink key={p} to={p} className={({isActive})=>`px-3 py-1 rounded transition ${isActive?'underline text-brand-cream':'hover:text-brand-link'}`}>{labels[i]}</NavLink>
        })}
      </div>
      <a href="#/order" className="bg-brand-orange text-white px-4 py-2 rounded-md font-semibold hover:bg-brand-orange/90 transition">BUY BOOK</a>
    </nav>
  </header>
)

export default function AppRoutes(){
  return (<div className="min-h-screen flex flex-col">
    <Nav/>
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
