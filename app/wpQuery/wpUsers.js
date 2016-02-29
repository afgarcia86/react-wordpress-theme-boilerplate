// Packages
import request from 'superagent'

module.exports = {
  getUsers(callback) {
    var url = 'http://l.wrs.com/wp-json/wp/v2/users/'
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        if(callback) callback(JSON.parse(res.text))
      }
    })
  },
  getUser(id, callback) {
    var url = 'http://l.wrs.com/wp-json/wp/v2/users/'+id
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        var user = JSON.parse(res.text)
        if(callback) callback(user.name)
      }
    })
  }
}