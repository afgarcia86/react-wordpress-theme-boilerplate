// Packages
import request from 'superagent'

module.exports = {
  getPosts(obj, showPosts = 1, page = 1, loadMore = false, callback) {
    var url = '/wp-json/wp/v2/posts?per_page='+showPosts+'&page='+page
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      var posts
      if(loadMore){
        var oldPosts = obj.state.posts
        posts = oldPosts.concat(res.body)
      } else {
        posts = res.body
      }      
      obj.setState({
        posts: posts,
        totalPosts: res.headers["x-wp-total"],
        totalPages: res.headers["x-wp-totalpages"]
      })
      if(callback) callback()
    })
  },
  getPost(obj, slug, callback) {
    var url = '/wp-json/wp/v2/posts?filter[name]='+slug
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        post: res.body
      })
      if(callback) callback()
    })
  }
}