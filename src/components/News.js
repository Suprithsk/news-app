import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize: 5,
        category: 'general'
    }
    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor(){
        super();
        this.state={
            articles:[],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbd7bca36a8541839c0482375473f623&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data= await fetch(url);
        let parsedData=await data.json(); 
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false})
    }
     handleNextClick= async ()=>{
        if(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbd7bca36a8541839c0482375473f623&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data= await fetch(url);
        let parsedData=await data.json(); 
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })
        }
        
    }
     handlePrevClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbd7bca36a8541839c0482375473f623&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: false})
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading:false
        })
        
    }
render() {
    return (
      
        
        <div className="container my-3">
            <h1>NewsMonkey-Top Headlines</h1>
            {this.state.loading && <Spinner/>}
             <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" newsUrl={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} time={element.publishedAt}/>
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between my-4">
                <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
                <button disabled={this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
            </div>

        </div>
    )
  }
}

export default News
