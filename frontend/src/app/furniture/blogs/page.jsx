import BlogSection from '@/app/_components/BlogSection'
import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import Hero from '@/app/_components/Hero'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <Hero title="Bolg"/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Page
