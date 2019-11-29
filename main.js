import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false;
Vue.prototype.wxshare = function() {
	wx.showShareMenu({
		withShareTicket: true
	})
};
Vue.prototype.get_storage_data = function(keyname,name) {
	var that = this;
	return new Promise((res) => {
		uni.getStorage({
			key: keyname,
			success: function(res1) {
				that[name] = res1.data;
				res('ss');
			},
			fail:function(){
				res('ff');
			}
		});
	})
};

Vue.prototype.upload_to_server = function(post_data) {
	uni.request({
		url: "https://kaikaiomg.applinzi.com/uni_app_upload.php",
		method: "POST",
		data: post_data,
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (ret) => {
			if (ret.statusCode !== 200) {
				console.log("请求失败:", ret)
			} else {
				console.log("上传成功-上传:", post_data)
				console.log("上传成功-回复:", ret.data)
			}
		}
	});
};
Vue.prototype.download_from_server = function(post_data, data_title,data_flag) {
	return new Promise((res) => {
		uni.request({
			url: 'https://kaikaiomg.applinzi.com/uni_app_download.php',
			method: "POST",
			data: post_data,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (ret) => {
				if (ret.statusCode !== 200) {
					console.log("请求失败:", ret)
					res('ff');
				} else {
					console.log("取数成功—上传:", post_data)
					console.log("取数成功-数据:", ret.data)
					this[data_title] = ret.data.data;
					this[data_flag] = ret.data.statusCode;
					res('ss');
				}
			}
		});
	})
};

Vue.prototype.download_setStorage_json_get = function(urlpath, keytitle) {
	uni.request({
		url: urlpath,
		method: "GET",
		success: (ret) => {
			if (ret.statusCode !== 200) {
				console.log("请求失败:", ret)

			} else {
				console.log("取数成功—上传:", keytitle)
				console.log("取数成功-数据:", ret.data)
				uni.setStorage({
					key: keytitle,
					data: ret.data,
					success: function() {
						console.log("保存本地成功-数据:", keytitle)
					}
				});
			}
		},
	})
};
Vue.prototype.download_setStorage_json_post = function(keytitle) {
	return new Promise((res) => {
		uni.request({
			url: 'https://kaikaiomg.applinzi.com/uni_app_download.php',
			method: "POST",
			data: {
				'form': keytitle,
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (ret) => {
				if (ret.statusCode !== 200) {
					console.log("请求失败:", ret)
				} else {
					console.log("取数成功—上传:", keytitle)
					console.log("取数成功-数据:", ret.data)
					uni.setStorage({
						key: keytitle,
						data: ret.data,
						success: function() {
							console.log("保存本地成功-数据:", keytitle)
						}
					});
				}
			},
		})
		res('ss');
	})

};

Vue.prototype.upchangetoabc = function(nbrabc) {

		var strbnrabc = nbrabc.toString();
		switch (strbnrabc) {
			case "0":return "A";break;
			case "1":return "B";break;
			case "2":return "C";break;
			case "3":return "D";break;
			case "4":return "E";break;
			case "5":return "F";break;
			case "6":return "G";break;
			case "7":return "H";break;
			case "8":return "I";break;
			case "9":return "J";break;
			case "10":return "K";break;
			case "11":return "L";break;
			case "12":return "M";break;
			case "13":return "N";break;
			case "14":return "O";break;
			case "A":return "0";break;
			case "B":return "1";break;
			case "D":return "2";break;
			case "C":return "3";break;
			case "E":return "4";break;
			case "F":return "5";break;
			case "G":return "6";break;
			case "H":return "7";break;
			case "I":return "8";break;
			case "J":return "9";break;
			case "K":return "10";break;
			case "L":	return "11";break;
			case "M":return "12";break;
			case "N":return "13";break;
			case "O":return "14";break;
			default:break;
		}
	};
	Vue.prototype.downchangetoabc = function(nbrabc) {
		var strbnrabc = nbrabc.toString();
		switch (strbnrabc) {
			case "A":return "0";break;
			case "B":return "1";break;
			case "C":return "2";break;
			case "D":return "3";break;
			case "E":return "4";break;
			case "F":return "5";break;
			case "G":return "6";break;
			case "H":return "7";break;
			case "I":return "8";break;
			case "J":return "9";break;
			case "K":return "10";break;
			case "L":return "11";break;
			case "M":return "12";break;
			case "N":return "13";break;
			case "O":return "14";break;
			case "0":return "A";break;
			case "1":return "B";break;
			case "2":return "D";break;
			case "3":return "C";break;
			case "4":return "E";break;
			case "5":return "F";break;
			case "6":return "G";break;
			case "7":return "H";break;
			case "8":return "I";break;
			case "9":return "J";break;
			case "10":return "K";break;
			case "11":return "L";break;
			case "12":return "M";break;
			case "13":return "N";break;
			case "14":return "O";break;
			default:
				break;
		}
	};








App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()