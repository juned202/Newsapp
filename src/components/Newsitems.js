import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let {title,desc,imageurl,newsurl} = this.props;
    return (
      <div className="card my-5" >
        <img src={imageurl?imageurl: "https://img.freepik.com/free-vector/news-concept-landing-page_52683-11626.jpg?t=st=1740042885~exp=1740046485~hmac=98ede6a236cdf81b28e0e1663a3e0271b7a21cadb06ecb07ffaf1b12bae2e07d&w=900"} className="card-img-top" alt="Not exists" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <a href={newsurl} target='_blank' className="btn btn-primary">Read Full Article</a>
        </div>
      </div>
    )
  }
}
