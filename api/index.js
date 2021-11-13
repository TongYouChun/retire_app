//服务器地址
const service = "http://312f020x02.zicp.vip";
// const service = "http://192.168.0.192:10010";
// const service = "http://192.168.0.146:10010";
// const service = "http://cixrxnzfdl.52http.tech";

module.exports = (params) => {
	let url = params.url;
	let method = params.method;
	let header = params.header || {};
	let data = params.data || {};
	//	请求方式 GET POST
	// if (method) {
	// 	method = method.toUpperCase(); //	小写转大写
	// 	if (method == "POST") {
	// 		header = {
	// 			"content-type": "application/x-www-form-urlencoded"
	// 		}
	// 	}
	// }
	//	发起请求 加载动画
	if (!params.hideLoading) {
		uni.showLoading({
			title: "加载中"
		})
	}
	//	发起网络请求
	uni.request({
		url: service + url,
		method: method || "GET",
		header: header,
		data: data,
		dataType: "json",
		sslVerify: false, //	是否验证ssl证书
		success: res => {
			// console.log(res)
			// if (res.data.code && res.data.code == -1001) {
				
			// 	return;
			// }
			// if (res.data.code && res.data.code != 200) {
			// 	//	api错误
			// 	uni.showToast({
			// 		title: res.data.info,
			// 		icon: 'none'
			// 	})
				
			// }
			typeof params.success == "function" && params.success(res.data);
		},
		fail: err => {
			uni.showToast({
				title: res.data.info,
				icon: 'none'
			})
			typeof params.fail == "function" && params.fail(err.data);
		},
		complete: (e) => {
			// console.log("请求完成");
			uni.hideLoading()
			typeof params.complete == "function" && params.complete(e.data);
			return;
		}
	})
}
