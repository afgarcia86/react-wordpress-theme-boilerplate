// Packages
import CryptoJS from 'crypto-js'
import request from 'superagent'

module.exports = {
  calculateSig(stringToSign, privateKey){
	  var hash = CryptoJS.HmacSHA1(stringToSign, privateKey)
	  var base64 = hash.toString(CryptoJS.enc.Base64)
	  return encodeURIComponent(base64)
	},
	gformRoute(route){
		var d = new Date,
				expiration = 3600, // 1 hour,
				unixtime = parseInt(d.getTime() / 1000),
				future_unixtime = unixtime + expiration,
				publicKey = "8612578811",
				privateKey = "4870dc1350cd729",
				method = "GET",
				stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime,
				sig = this.calculateSig(stringToSign, privateKey),
				url = '/gravityformsapi/'+route+'?api_key='+publicKey+'&signature='+sig+'&expires='+future_unixtime
		return url
	},
	getForm(id, callback){
		var url = this.gformRoute("forms/"+id)
    return request.get(url)
    	.end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      if(callback) callback(res.body.response)
    })
	},
	getFormInitScripts(id){
		var url = "?getFormInitScripts="+id
    return request.get(url)
    	.end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      return res.text
    })
	},
	submitForm(id, input_values, callback){
		var url = this.gformRoute("forms/"+id+"/submissions")
    return request.post(url)
    	.send({input_values})
    	.end(function(err, res){
      if(err){
        console.log(err)
        return
      }
      if(callback) callback(res.body.response)
    })
	},
	translateFormClass(cssClass){
		if(cssClass){
	    if(cssClass == 'gf_left_half' || cssClass == 'gf_right_half' || cssClass == 'gf_list_2col')
	      return 'col-xs-6'
	    else if(cssClass == 'gf_left_third' || cssClass == 'gf_middle_third' || cssClass == 'gf_right_third' || cssClass == 'gf_list_3col')
	      return 'col-xs-4'
	    else if(cssClass == 'gf_list_4col')
	      return 'col-xs-3'
	    else if(cssClass == 'gf_list_6col')
	      return 'col-xs-2'
	    // else if(cssClass == 'gf_list_inline')
	    //   return 'display-inline'
	    else
	    	return cssClass
	  } else {
	  	return 'col-xs-12'
	  }
	},
	stringReplace(text, remove, replace) {
    return text.replace(remove, (replace ? replace : ''))
  },
}