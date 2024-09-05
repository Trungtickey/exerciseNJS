import React from 'react'
import Company from '../pages/Company'
import Button from '../components/Button'
import Headers from './layouts/Headers'
import Footer from './layouts/Footer'
export default function page() {
  return (
    <div>
      <Headers/>
      <Company/>
      <h1>Welcome to Rikkei Academy</h1>
      <Button/>
      <Footer/>
    </div>
  )
}
