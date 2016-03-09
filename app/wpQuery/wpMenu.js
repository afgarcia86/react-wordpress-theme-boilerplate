// Packages
import request from 'superagent'

module.exports = {
  getMenus(obj, callback) {
    var url = '/wp-json/wp-api-menus/v2/menus'
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        menus: res.body
      })
      if(callback) callback()
    })
  },
  getMenu(obj, menuLocation, callback) {
    var url = '/wp-json/wp-api-menus/v2/menu-locations/'+menuLocation
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      obj.setState({
        [menuLocation]: res.body
      })
      if(callback) callback()
    })
  }
}