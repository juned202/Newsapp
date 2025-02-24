import React, { Component } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './Loader';



export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      pageSize: 10,
      total: 0
    }
    document.title = `${this.props.category} - News`;
  }
  static defaultProps = {
    category: "general",
    country: "us",
    api: "68095cc7f12e4753ae20c30ead070215"
  };



  async callApi() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.state.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ article: parsedData.articles, total: parsedData.totalResults, loading: false })
  }
  async componentDidMount() {
    this.callApi();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.callApi();
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.callApi();
  }

  fetchMoreData = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        article: [...this.state.article, ...parsedData.articles]
      });
    });
  };

  endMessage = () => {

  }




  render() {

    return (

      <>
        {this.state.article.length === 0 &&
          <Loader />
        }

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length <= (this.state.total - this.state.pageSize)}
          loader={<Loader />}
          endMessage={this.state.article.length !== 0 &&
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className='container'>
            <div className='row'>
              {this.state.article &&
                this.state.article.map((element) => <div className='col-md-4' key={element.url}>
                  <Newsitems title={element.title?.slice(0, 40)} desc={element.description?.slice(0, 75)} imageurl={element?.urlToImage} newsurl={element?.url} />
                </div>)}
            </div>
          </div>
        </InfiniteScroll>



      </>



    )
  }
}
