import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <main>


        <section ><Nav/></section>
        <section className=''><Hero/></section>
        <section><About/></section>
           
    </main>
  )
}

export default Home
