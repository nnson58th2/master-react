import React from 'react'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
