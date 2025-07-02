let baseUrl = "https://"

export default function http(url, data ={}, method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:url + url,
			data,
			method,
			header:{
				"token":uni.getStorageSync("token") || ""
			},
			success: res =>{
				if(res.statusCode == 200){
					if(res.data.code == 1){
						resolve(res.data.data)
					}
					else{
						uni.showToast({
							title:res.data.msg,
							icon:"none"
						})
						reject(res.data.msg)
						// 做到这里了
					}
				}
			}
		})
	})
}