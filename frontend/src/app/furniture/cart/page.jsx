import Cart from '@/app/_components/Cart'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import Hero from '@/app/_components/Hero'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <Hero title="Cart" isShop={true}/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default Page
