module.exports = {
  findBySlug(posts, slug, callback) {
    if(callback) {
      callback(posts.find(function(post){
        return post.slug === slug
      }))
    }
  },
  findById(posts, id, callback) {
    if(callback) {
      callback(posts.find(function(post){
        return post.id === id
      }))
    }
  },
  stringReplace(text, remove, replace) {
    return text.replace(remove, (replace ? replace : ''))
  },
  slugify(text) {
    var text = text.toLowerCase()
    return text.replace(/ /g, '-')
  }
}