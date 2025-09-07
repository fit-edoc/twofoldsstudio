import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Expertise from '../components/Expertise'

const Home = () => {
  return (
    <main>


        <section ><Nav/></section>
        <section  id='hero'><Hero/></section>
        <section id='about'><About/></section>
        <section><Expertise/></section>
           
    </main>
  )
}

export default Home
