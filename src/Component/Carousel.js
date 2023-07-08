import React, { Component } from 'react'
import './Carousel.css'
import {
  Link
 } from "react-router-dom";
 

export default class Carousel extends Component {
  render() {
    
    return (
      <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
        
      <div className="container" style={{backgroundImage:"linear-gradient(rgba(67, 64, 64, 0.3), rgba(32, 33, 32, 0.8)), url('http://www.korkedbats.com/wp-content/uploads/2012/06/Headlines-Logo-New.jpg')",
     backgroundSize: 'cover',
     backgroundPosition: 'center'
    }}>
        <div className="carousel-caption d-none d-md-block">
        <Link to={this.props.Headlines}>
     <a href="https://www.hindustantimes.com/latest-news">
          <h5 className='headlines'>TOP HEADLINES</h5>
   </a>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
          </Link>
      </div>
      </div>
      
    </div>
    <div className="carousel-item" >
    <div className="container" style={{backgroundImage:"linear-gradient(rgba(67,65,57, 0.2), rgba(146, 78, 129, 0.55)), url('https://drop.ndtv.com/albums/NEWS/Newspaper_Headl_637195971436498922/637195971468060620.jpeg')",
     backgroundSize: 'cover',
     backgroundPosition: 'center'
     
 }}>
        <div className="carousel-caption d-none d-md-block">
        <Link to="">
          <a href="https://www.hindustantimes.com/india-news">

          <h5 className='headlines'>TOP INDAIN NEWS</h5>
          </a>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
          </Link>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container" style={{backgroundImage:"linear-gradient(rgba(67, 64, 64, 0.3), rgba(32, 33, 32, 0.5)), url('https://i.ytimg.com/vi/zM0ug-gOUlE/maxresdefault.jpg')",
     backgroundSize: 'cover',
     backgroundPosition: 'center'
 }}>
        <div className="carousel-caption d-none d-md-block">
        <Link >
          <a href="https://edition.cnn.com/markets/" >

          <h5 className='headlines'>TOP STOCKS NEWS</h5>
          </a>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
          </Link>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </>

    )
  }
}

