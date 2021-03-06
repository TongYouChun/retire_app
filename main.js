import Vue from 'vue'
import App from './App'
import http from './api/index.js'

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改 
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
Vue.config.productionTip = false

Vue.prototype.http = http
Vue.prototype.$api = {msg};



App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
