// Packages
import CryptoJS from 'crypto-js'
import request from 'superagent'

module.exports = {
  calculateSig(stringToSign, privateKey){
	  var hash = CryptoJS.HmacSHA1(stringToSign, privateKey)
	  var base64 = hash.toString(CryptoJS.enc.Base64)
	  return encodeURIComponent(base64)
	},
	getForm(id, callback){
		var d = new Date,
				expiration = 3600, // 1 hour,
				unixtime = parseInt(d.getTime() / 1000),
				future_unixtime = unixtime + expiration,
				publicKey = "8612578811",
				privateKey = "4870dc1350cd729",
				method = "GET",
			  route = "forms/"+id,
				stringToSign = publicKey + ":" + method + ":" + route + ":" + future_unixtime,
				sig = this.calculateSig(stringToSign, privateKey),
				url = '/gravityformsapi/'+route+'?api_key='+publicKey+'&signature='+sig+'&expires='+future_unixtime
    return request.get(url).end(function(err, res){
      if(err){
        console.log(err)
      } else {
        if(callback) callback(res.body.response)
      }
    })
	}
}