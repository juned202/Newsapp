import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Loader from './Loader';


export default class News extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      pageSize: 12,
      total:0
    }
    document.title = `${this.props.category} - News`;
  }
  static defaultProps = {
    category : "general"
  };

 

  async callApi(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5a8550217ced40d88d8c508f55da9e23&page=${this.state.page}&pageSize=${this.state.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ article: parsedData.articles, total: parsedData.totalResults, loading:false })
  }
  async componentDidMount() {
    this.callApi();
  }
 
 handlePrevClick = async () =>{
    this.setState({  page:this.state.page -1 });
    this.callApi();
}
handleNextClick = async () =>{
  this.setState({page:this.state.page+1 });
  this.callApi();
}


  render() {

       return (
        
      <div className='container my-3'>

        <div className='row'>
        {this.state.article.length === 0 &&
        <div className="text-center">
                 <div className="spinner-grow" role="status">
                 <span className="visually-hidden">Loading...</span>
               </div></div>
      }
          {this.state.article.map((element) => {
            if(this.state.loading === true){
              return <div className='col-md-4' key={element.url}>
              <Loader/>
            </div>
            }
            else {
              return <div className='col-md-4' key={element.url}>
              <Newsitems title={element.title?.slice(0, 40)} desc={element.description?.slice(0, 75)} imageurl={element?.urlToImage} newsurl={element?.url} />
            </div>
            }

          })}
          
          {this.state.article.length >0 &&
                 <div className= 'container d-flex justify-content-between'>
                 <button type="button" className="btn btn-outline-primary justify-content-md-start mx-5" onClick={this.handlePrevClick} disabled={this.state.page === 1}>prev</button>
                 <button type="button" className="btn btn-outline-primary justify-content-md-end" onClick={this.handleNextClick} disabled={this.state.total < (this.state.page * (this.state.pageSize) )}>next</button>
                 </div>
      }

        </div>
      </div>

    )
  }
}
