import React, { Component } from 'react'
import './Crad.css'



export default class Card extends Component {
  render() {
    let {myTitle,content,imageUrl,newsUrl}=this.props;

    
    return (
    <div>
     
      <div className="card" >
        <div className='in-card'>

         <img src={imageUrl} className="card-img" alt=";"/>
          <div className="card-body">
             <h6 className="card-title">{myTitle}</h6>
             <br />
             {/* <p className="card-text">{content}</p> */}
             <button className="know-more" style={{marginTop:'5px'} }><a href={newsUrl}>Know More</a></button>
        </div>
          </div>
      </div>
    </div>
    )
  }
}
