import React, { Component } from 'react'
import ContainerStocks from './ContainerStocks'
import './container.css'


export default class Container extends Component {
  render() {
    return (
        <>
      <div>
        <ContainerStocks ContainerTitle={'Stocks'} Category={'business'} viewmoreType={'/viewbusiness'}></ContainerStocks>
        <ContainerStocks ContainerTitle={'Sports'} Category={'sports'} viewmoreType={'/viewsports'}></ContainerStocks>
        <ContainerStocks ContainerTitle={'Health'} Category={'Health'} viewmoreType={'/viewhealth'}></ContainerStocks>
        <ContainerStocks ContainerTitle={'Entertainment'} Category={'Entertainment'} viewmoreType={'/viewentertainment'}></ContainerStocks>
        {/* <ContainerStocks ContainerTitle={'Stocks'} Category={'sports'} viewmoreType={'/viewsports'}></ContainerStocks> */}
      

       
      </div>
        </>
    )
  }
}
