import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Container from './Component/Container';
import Viewmore from './Component/Viewmore'
import Carousel from './Component/Carousel';
import Geolocation from './Component/Geolocation';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
       <Router>
      <Navbar></Navbar>
      {/* <Geolocation></Geolocation> */}
      <Routes>   
               <Route exact path="/" element={<Carousel></Carousel>}>
               </Route>
               <Route exact path="/home" element={<Carousel></Carousel>}>
               </Route>  
        </Routes>
      


       <Routes>            
               <Route exact path="/" element={<Container/>}>
               </Route>
               <Route exact path="/home" element={<Container/>}>
               </Route>
               <Route exact path="/viewbusiness" element={<Viewmore ContainerTitle={'Stocks'} Category={'business'}></Viewmore>}>
               </Route>
               <Route exact path="/viewsports" element={<Viewmore ContainerTitle={'Sports'} Category={'sports'}></Viewmore>}>
               </Route>
               <Route exact path="/viewhealth" element={<Viewmore ContainerTitle={'Health'} Category={'health'}></Viewmore>}>
               </Route>
               <Route exact path="/viewentertainment" element={<Viewmore ContainerTitle={'Entertainment'} Category={'entertainment'}></Viewmore>}>
               </Route>
        </Routes>
       </Router>
      </div>
    )
  }
}




