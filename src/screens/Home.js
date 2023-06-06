import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
      <div><Navbar/></div>

      <div><Carousel/></div>

      <div className='m-2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>

      <div><Footer/></div>

    </div>
  )
}
