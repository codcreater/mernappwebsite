import React from 'react'

export default function Carousel() {
  return (
    <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://b.zmtcdn.com/data/pictures/6/900586/60f016bc63569a6365f641ccd7992720.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="d-block w-100 h-50" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://b.zmtcdn.com/data/pictures/6/900586/60f016bc63569a6365f641ccd7992720.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="d-block w-100 h-50" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://b.zmtcdn.com/data/pictures/6/900586/60f016bc63569a6365f641ccd7992720.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="d-block w-100 h-50" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
