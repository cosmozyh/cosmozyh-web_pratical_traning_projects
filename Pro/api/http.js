let baseUrl = "https://m1.apifoxmock.com/m1/4728220-0-default/api/user/getBanner"

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
					}
				}
			},
			fail:() =>{
				uni.showToast({
					title:"服务器请求失败",
					icon:"none"
				})
			}
		})
	})
}