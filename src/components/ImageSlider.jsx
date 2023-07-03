/* eslint-disable react/prop-types */
import React, { useState } from "react";
//import { sliderData } from "../sliderData";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">

      {current === length - 1 ? null : <GrNext className="right-arrow" onClick={nextSlide} /> }
      {current === 0 ?  null : <GrPrevious className="left-arrow" onClick={prevSlide} />}
      
{    //   {current !== length - 1 && current !== 0 ? <GrNext className="right-arrow" onClick={nextSlide} /> : <GrPrevious className="left-arrow" onClick={prevSlide} /> }
}      
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}> {index === current && (<img src={slide.image} alt="travel image" className="image" />)}
          </div>
          
        );
      })}
    </section>
  );
}
