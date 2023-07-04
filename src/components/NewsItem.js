import React from "react";

const  NewsItem=(props)=> {
  
  
    let { title, description, imageUrl,newsUrl ,author,date,source} = props;
    return (
      
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 transition-middle badge bg-black" style={{left:"0%",zIndex:1}}>{source}</span>
          <img src={!imageUrl?"logo192.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
        
      </div>
      
     
    );
 
}

export default NewsItem;
