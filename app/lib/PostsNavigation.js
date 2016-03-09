// Packages
import React from 'react'
import autobind from 'autobind-decorator'

@autobind
class PostsNavigation extends React.Component {

  state = {
    loading: true,
    pages: null
  }

  static props = {
    pageNumber: 1,
    showPosts: 1,
    totalPosts: 0,
    totalPages: 0,
    layout: ''
  }

  static PropTypes = {
    pageNumber: React.PropTypes.number.isRequired,
    showPosts: React.PropTypes.number.isRequired,
    totalPosts: React.PropTypes.number.isRequired,
    totalPages: React.PropTypes.number.isRequired,
    layout: React.PropTypes.string
  }

  componentWillMount(){
    const { posts } = this.props
    if(posts.length){
      this.setState({
        loading : false
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.posts != this.props.posts){
      this.setState({ loading: false })
    }
    if(nextProps.totalPages != this.props.totalPages){
      this.generatePages(nextProps.totalPages)
    }
  }

  nextPage(){
    this.props.changePage('next', false)
    this.setState({ loading: true })
  }

  prevPage(){
    this.props.changePage('prev', false)
    this.setState({ loading: true })
  }

  loadMore(){
    this.props.changePage('next', true)
    this.setState({ loading: true })
  }

  getPage(event){
    this.props.changePage(event.target.innerHTML, false)
    this.setState({ loading: true })
  }

  generatePages(totalPages){
    var pages = []
    for (var i = 0; i < totalPages; i++){
      pages.push(i)
    }
    this.setState({ pages: pages })
  }

  render() {
    const { layout, pageNumber, totalPages } = this.props
    const { loading, pages } = this.state
    const { getPage, nextPage, prevPage, loadMore } = this
    const lastPage = pageNumber == totalPages ? true : false
    const firstPage = pageNumber == 1 ? true : false

    if(layout == 'loadMore'){
      return (
        <div className="postNavigationWrapper">
          {loading && (
            <div className="loading"></div>
          )}
          {!lastPage &&(
            <div className="postNavigation">
              <button className="btn btn-primary btn-block" onClick={loadMore}>Load More</button>
            </div>
          )}          
        </div>
      )
    }

    if(layout == 'pagination'){
      return (
        <div className="postNavigationWrapper">
          {loading && (
            <div className="loading"></div>
          )}
          {pages && (
            <nav>
              <li className={firstPage ? "disabled page-item" : "page-item"}>
                <button className="page-link" onClick={!firstPage && (prevPage)}>&laquo;</button>
              </li>
              
              {pages.map(function(page, i) {
                var active = (page+1) == pageNumber ? true : false
                return (
                  <li key={i} className={active ? "active page-item" : "page-item"}>
                    <button className="page-link" data-page={page+1} onClick={getPage}>{page+1}</button>
                  </li>
                )
              })}
              
              <li className={lastPage ? "disabled page-item" : "page-item"}>
                <button className="page-link" onClick={!lastPage && (nextPage)}>&raquo;</button>
              </li>
            </nav>
          )}
        </div>
      )
    }

    return (
      <div className="postNavigationWrapper">
        {loading && (
          <div className="loading"></div>
        )}
        <div className="postNavigation text-xs-center">
          <div className="btn-group">
            {!lastPage && (
              <button className="btn btn-secondary" onClick={nextPage}>&laquo; Older Posts</button>
            )}
            {!firstPage && (
              <button className="btn btn-secondary" onClick={prevPage}>Newer Posts &raquo;</button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = PostsNavigation