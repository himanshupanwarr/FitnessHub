import React, { Component } from 'react'
import Card from './Card'
import './Spinner.css'

export default class Viewmore extends Component {
  constructor(){
    super();
    this.state={
      article: [],
      loading: false, 
      pageSize:20,
      page:1   
    }
  }
  
  async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=60a12abdb32a4ff08d7389500d3da596&pageSize=20` 
     
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData =  await data.json();
      
      this.setState({article : parseData.articles,
        loading:false
      })
  }

  Handleprev= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=60a12abdb32a4ff08d7389500d3da596&page=${this.state.page-1}&pageSize=${this.state.pageSize}` 
     
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData =  await data.json();
    
    this.setState({
      page:this.state.page-1,
      article : parseData.articles,
      loading:false
    })
  }
  Handlenext= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.Category}&apiKey=60a12abdb32a4ff08d7389500d3da596&page=${this.state.page+1}&pageSize=${this.state.pageSize}` 
     
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData =  await data.json();
    
    this.setState({
      page:this.state.page+1,
      article : parseData.articles,
      loading:false
    })
  }
  render() {  
    let {ContainerTitle}=this.props;
    let cardStyle={
      margin: '20px',
    marginTop: '10px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    griGap: '30px'
        
    }  
    return (
     <> 
     <div style={{display:"flex",justifyContent:"space-between"}}>
       <h2 style={{marginLeft:"40px",marginTop:"30px"}}>{ContainerTitle}</h2>
        </div>
     <span className='spinner' style={this.state.loading? {display:'flex'}:{display:'none'}}>
      <div className="loadingio-spinner-eclipse-gpd522adjf"><div className="ldio-tc6pbjg0739">
      <div></div>
      </div></div>
     </span>

     <div className="Card-box" style={cardStyle}> 
      {this.state.article.map((element)=>{
        return <div  key={element.url}>
          <Card myTitle={element.title?element.title.slice(0,40):" "} content={element.content?element.content.slice(0,80):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>  
        </div>
    })}
    </div> 
    <div className="cont" style={{display:'flex',justifyContent:"space-between", margin:'0px 40px 20px 40px'}}>
    <button type="button" disabled={this.state.page=1} style={this.state.pageSize<=5?{display:"none"}:{display:'block'}} className="btn btn-secondary btn-sm" onClick={this.Handleprev}> &larr;</button>
    <button type="button" style={this.state.pageSize<=5?{display:"none"}:{display:'block'}} className="btn btn-secondary btn-sm" onClick={this.Handlenext}>&rarr;</button>
      </div>   
     </>       
    )
  }
}
