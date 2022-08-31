
import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();
        console.log("hello i am a consturctor");
    }
  render() {
   let {title,description,imageUrl,newsUrl,time}=this.props;
   let arDate=new Date(time);
    return (
      <div>
        
        <div  className="card" >
          <img src={imageUrl?imageUrl:"https://firebasestorage.googleapis.com/v0/b/food-app-6863f.appspot.com/o/download.png?alt=media&token=c60a5957-4ad9-457d-82fe-6a6a56708b52"} className="card-img-top" alt="click on read more to view the image" />
          <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">
              {description}
            </p>
            <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            <p className="card-text"><small className="text">published on: {new Date(time).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}


export default NewsItem
