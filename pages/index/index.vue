<template>
	<view style="flex-flow: column nowrap;width: 750upx; position: relative;">
        <!-- <image class="bac_image" src="http://kaikaiomg-kaikaiomg.stor.sinaapp.com/uni_app_image/main/wzqbeijing.png" :style="'height:'+windowHeight+'px'"></image> -->
		<image class="bac_image" src="../../static/wzqbeijing.png" :style="'height:'+windowHeight+'px'"></image>
		<view class="" style="position: absolute;right: 210upx; top: 530upx; justify-content: center;align-items: center; width: 300upx;">
			<!-- #ifdef APP-PLUS -->
			<button type="primary" @click="gotoindex2" class="button_style">进入</button>
			
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
		<!-- 	<button type="primary" open-type="getUserInfo" @getuserinfo="wxGetUserInfo" class="button_style">进入</button> -->
			<button type="primary" class="button_style"  @click="gotoindex2">进入</button>
			<!-- #endif -->

		</view>
		<!-- <view class="icontext" style="position: absolute; top: 250upx ;right: 330upx; color: #808080;font-size: 50upx;" @click="gototiwen">&#xe667;
        	
        </view> -->
		<button v-show="false" style=" position: absolute; right: 0upx;  border: 0upx solid #EFEFEF;background-color: #EFEFEF; font-size: 33upx;  "
		 open-type="share" class="icontext">&#xe619;</button>



	</view>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				fileSrc: "",
				savedFilePath: "",
				// jsondata: null
				ifallowgotohot: false,
				windowHeight: null,
				finish_task: 0,
				first_flag: false,
				mulu_flag: null,
				shuijishu: '0',

			}
		},
		onLoad: async function(option) {

            
			this.mulu_flag = option.mulu_flag;
			this.shuijishu = option.shuijishu;
			console.log('shuijishu',this.shuijishu )
			var that = this;
			that.windowHeight = uni.getSystemInfoSync().windowHeight;
			await uni.getStorage({
				key: 'tips_last_time',
				success: function(res) {
					console.log("find_tips", res.data);
					that.settipslast(res.data);
				},
				fail: function() {
					console.log("havent_find_tips");
				}
			});



		},

		onShareAppMessage(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: "五子棋打谱",
				path: '/pages/index/index',

			}
		},


		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			...mapMutations(['login', 'logout', 'setopenid', 'settipslast', 'setphonenum', 'setdbuserifo']),
			wxGetUserInfo: function(e) {

				var that = this;
				console.log(e.detail.userInfo)
				if (e.detail.userInfo) {
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							console.log("code:", loginRes.code);
							that.login(e.detail.userInfo, loginRes.code)
							that.upload_oauthData(e.detail.userInfo, loginRes.code) 
							if (that.shuijishu != null) {
								setTimeout(function() {
									uni.reLaunch({
										url: "../play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu=" + that.shuijishu,
									})
								}, 100)
							} else {
								setTimeout(function() {
									uni.reLaunch({
										url: "../index2/index2",
									})
								}, 100)
							}
							
							
						}

					})
				} else {
					console.log(333, '执行到这里，说明拒绝了授权')
					uni.showToast({
						title: "为了您更好的体验,请先同意授权",
						icon: 'none',
						duration: 2000,

					});
				}

			},

			gotoindex2(){
				var that=this;
				if (that.shuijishu != null) {
					setTimeout(function() {
						uni.reLaunch({
							url: "../play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu=" + that.shuijishu,
						})
					}, 100)
				} else {
					setTimeout(function() {
						uni.reLaunch({
							url: "../index2/index2",
						})
					}, 100)
				}
			},


			upload_oauthData(userInfo, code) {
				var that = this;
				uni.request({
					url: 'https://kaikaiomg.applinzi.com/uni_app_upload.php',
					method: "POST",
					data: {
						'form': 'oauthData',
						'userid': userInfo.userid,
						'nickName': userInfo.nickName,
						'avatarUrl': userInfo.avatarUrl,
						'city': userInfo.city,
						'country': userInfo.country,
						'gender': userInfo.gender,
						'language': userInfo.language,
						'province': userInfo.province,
						'code': code,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败:", ret)
						} else {
							console.log("success_uodate_oauthData:", ret.data[0])
							// console.log("success_uodate_oauthData:", ret.data.openid)
							that.setopenid(ret.data[0].openid);
							that.setdbuserifo(ret.data[0]);


							// var dateBegin = new Date(ret.data[0].start_time);
							// var dateEnd = new Date(); //获取当前时间
							// var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
							// console.log(dateDiff);



							

						}
					},
				})
			},






		}
	}
</script>

<style>
	.bac_image {
		width: 750upx;
		z-index: -10;
	}

	.logo_image {
		width: 250px;
		height: 250px;
	}

	.progress_style {
		z-index: 20;
		height: 50upx;
		width: 400upx;
		padding-left: 33upx;
	}

	.button_style {
		/* background: -webkit-linear-gradient(right, Aqua, LimeGreen); */
		/* Safari 5.1 - 6.0 */
		/* background: -o-linear-gradient(right, Aqua, LimeGreen); */
		/* Opera 11.1 - 12.0 */
		/* background: -moz-linear-gradient(right, Aqua, LimeGreen); */
		/* Firefox 3.6 - 15 */
		/* background: linear-gradient(right, Aqua, LimeGreen); */
		/* 标准的语法（必须放在最后） */
		/*   -webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */
		/* animation: mymove 5s linear infinite; */
		border-radius: 12upx;
		background-color: #71C671;
		width: 220upx;
		height: 60upx;
		line-height: 60upx;
		font-weight: bold;
		font-size: 30upx;
		text-align: center;
		background: -webkit-linear-gradient(top, #66B5E6, #2e88c0);
		background: -moz-linear-gradient(top, #66B5E6, #2e88c0);
		background: linear-gradient(top, #66B5E6, #2e88c0);
		background: -ms-linear-gradient(top, #66B5E6, #2e88c0);
		border: 1px solid #2576A8;
		box-shadow: 0 1px 2px #B8DCF1 inset, 0 -1px 0 #316F96 inset;
		color: #fff;
		/* -webkit-text-fill-color: #E0FFFF; */
		/* -webkit-text-stroke:1px #000; */
	}

	.button_style:hover {
		background: -webkit-linear-gradient(top, #8DC9EF, #4E9FD1);
		background: -moz-linear-gradient(top, #8DC9EF, #4E9FD1);
		background: linear-gradient(top, #8DC9EF, #4E9FD1);
		background: -ms-linear-gradient(top, #8DC9EF, #4E9FD1);
	}
</style>
