import React, { Component } from 'react'
import Card from './Card'
import './ContainerStyle.css'
import './Spinner.css'
import {
 Link
} from "react-router-dom";



export default class ContainerStocks extends Component {
  constructor(){
    super();
    this.state={
      article: [],
      loading: false, 
      pageSize:9,
      page:1   
    }
  }

  async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=60a12abdb32a4ff08d7389500d3da596&pageSize=9` 
      
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData =  await data.json();
      
      this.setState({article : parseData.articles,
        loading:false
      })
  }
  
  render() {  
  
    let {ContainerTitle,viewmoreType}=this.props;
    let btnStyle={
       marginTop:"45px",marginRight:'40px',
       color:'black',
       textDecoration:"underline"
        
      } 
    return (
      <> 
     <div style={{display:"flex",justifyContent:"space-between"}}>
       <h2 style={{marginLeft:"40px",marginTop:"30px"}}>{ContainerTitle}</h2>
       <Link to={viewmoreType} style={btnStyle} ><strong>View more</strong></Link>
      
        </div>
     <span className='spinner' style={this.state.loading? {display:'flex'}:{display:'none'}}>
      <div className="loadingio-spinner-eclipse-gpd522adjf"><div className="ldio-tc6pbjg0739">
      <div></div>
      </div></div>
     </span>

     <div className="Card-box" > 
      {this.state.article.map((element)=>{
        return <div  key={element.url}>
          <Card myTitle={element.title?element.title.slice(0,40):" "} content={element.content?element.content.slice(0,80):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>  
        </div>
    })}
    </div> 
    
     </>       
    )
  }
  
}

