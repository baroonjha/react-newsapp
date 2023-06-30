import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super()
    this.state= {
      article:[],
      loading :false

    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=adb89e309a1d4f4face798ea1fdbf0c0";
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({article: parsedData.articles})
  }
  
  render() {
    return (
      <>
        <div className="container my-4">
          <h2>NewsBuddy-Top HeadLines</h2>
          <div className="row">
          
          {this.state.article.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
            
          </div>
          
        </div>
      </>
    );
  }
}

export default News;
