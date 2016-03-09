// Packages
import request from 'superagent'

module.exports = {
  getUsers(obj, callback) {
    var url = '/wp-json/wp/v2/users/'
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        users: res.body
      })
      if(callback) callback()
    })
  },
  getUser(obj, id, callback) {
    var url = '/wp-json/wp/v2/users/'+id
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        user: res.body
      })
      if(callback) callback()
    })
  }
}