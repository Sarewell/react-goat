import React from 'react'
import Navigation from '../navbar/Navigation'
import Footer from '../footer/Footer'

export default function Layouts({children}) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}