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
  },
  getDataWithSlug(component, postsArray, slug){
    this.findBySlug(postsArray, slug, function(data){
      if(!data){
        component.setState({
          notFound : true
        })
        return
      }
      component.setState({
        postData : data,
        notFound : false
      })
    }) 
  },
  setActiveSlug(component, slug){
    component.setState({
      activeSlug : slug
    })
  },
  getUser(users, id){
    var userName
    this.findById(users, id, function(user){
      if(!user){
        return
      }
      userName = user.name
    })
    return userName
  }
}