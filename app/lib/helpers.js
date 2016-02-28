module.exports = {
  findBySlug(posts, slug, callback) {
    if(callback) {
      callback(posts.find(function(post){
        return post.slug === slug
      }))
    }
  }  
}