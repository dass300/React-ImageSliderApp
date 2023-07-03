import React from 'react'
import ImageSlider from './components/ImageSlider'
import './App.css'
import { sliderData } from './sliderData'

export default function App() {
  return (
    <div className='App'>
      <ImageSlider slides={sliderData} />
    </div>
  )
}
