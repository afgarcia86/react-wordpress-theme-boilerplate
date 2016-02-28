module.exports = {
  findBySlug(posts, slug, callback) {
    if(callback) {
      callback(posts.find(function(post){
        return post.slug === slug
      }))
    }
  },
  stringReplace(text, remove, replace) {
    return text.replace(remove, (replace ? replace : ''))
  }
}