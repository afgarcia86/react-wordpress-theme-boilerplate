// Packages
import request from 'superagent'

module.exports = {
  getMenus(callback) {
    var url = '/wp-json/wp-api-menus/v2/menus'
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        if(callback) callback(JSON.parse(res.text))
      }
    })
  },
  getMenu(menuLocation, callback) {
    var url = '/wp-json/wp-api-menus/v2/menu-locations/'+menuLocation
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        if(callback) callback(JSON.parse(res.text))
      }
    })
  }
}