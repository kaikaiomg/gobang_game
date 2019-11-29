<template>
	<view class="bc" :style="'height:'+windowHeight+'px'">
		<!-- <image src="../../static/index2bc.png"  style="position: absolute;width: 750upx; height: 450upx; z-index:0; bottom: 0upx;right: 0upx;" mode=""></image> -->
		<image class="bc" src="../../static/bcimage.jpg" :style="'height:'+windowHeight+'px'" mode=""></image>


		<view v-if="mulu_flag!='zml'" class="icontext" style="position: absolute; z-index: 100; top: 10upx ;left: 80upx; color:#FFA042;font-size: 60upx;"
		 @click="changemulu('zml')">&#xe66b;</view>
		<view class="icontext" style="position: absolute; top: 10upx ;right:82upx; z-index: 100;  color: #FFA042;font-size: 55upx;font-weight: bold;"
		 @click="gototiwen">&#xe667;</view>


		<!-- <view class="" style="background-image:url('/static/indexpic1.png');  width: 650upx; height: 1000upx; position: absolute; top: 40upx; z-index:22;  "></view> -->
		<!-- <view class=" " style="position: absolute; top: 70upx; color: 	Navy; font-size: 50upx; font-weight: bold;"  >五子棋打谱</view> -->
		<image v-if="mulu_flag=='zml'" class="pic_item" src="/static/index2/dplx.png" style=" top: 300upx; animation: mymove 0.4s ease-in-out ;"
		 @click="changemulu('dplx')"></image>
		<image v-if="mulu_flag=='zml'" class="pic_item" src="/static/index2/dpcs.png" style=" top: 500upx; animation: mymove 0.45s ease-in-out ;"
		 @click="changemulu('dpcs')"></image>
		<!-- <image v-if="mulu_flag=='zml'" class="pic_item" src="/static/index2/ljms.png" style=" top: 650upx; animation: mymove 0.5s ease-in-out ;"
		 @click="changemulu('ljms')"></image> -->
		<image v-if="mulu_flag=='zml'" class="pic_item" src="/static/index2/bdms.png" style=" top: 700upx; animation: mymove 0.55s ease-in-out ;"
		 @click="changemulu('bdms')"></image>

		<image v-if="mulu_flag=='dplx'" class="pic_item" src="/static/index2/hykj.png" style=" top: 300upx; animation: mymove 0.4s linear ;"
		 @click="changemulu('dplx_hykj')"></image>
		<image v-if="mulu_flag=='dplx'" class="pic_item" src="/static/index2/pykj.png" style=" top: 500upx; animation: mymove 0.42s linear ;"
		 @click="changemulu('dplx_pykj')"></image>
		<image v-if="mulu_flag=='dplx'" class="pic_item" src="/static/index2/kjwb.png" style=" top: 700upx; animation: mymove 0.45s linear ;"
		 @click="changemulu('dplx_kjwb')"></image>

		<image v-if="mulu_flag=='dpcs'" class="pic_item" src="/static/index2/hykj.png" style=" top: 250upx; animation: mymove 0.4s linear ;"
		 @click="changemulu('dpcs_hykj')"></image>
		<image v-if="mulu_flag=='dpcs'" class="pic_item" src="/static/index2/pykj.png" style=" top: 450upx; animation: mymove 0.42s linear ;"
		 @click="changemulu('dpcs_pykj')"></image>
		<image v-if="mulu_flag=='dpcs'" class="pic_item" src="/static/index2/kjwb.png" style=" top: 650upx; animation: mymove 0.45s linear ;"
		 @click="changemulu('dpcs_kjwb')"></image>
		<image v-if="mulu_flag=='dpcs'" class="pic_item" src="/static/index2/wdct.png" style=" top: 850upx; animation: mymove 0.5s linear ;"
		 @click="changemulu('dpcs_wdct')"></image>



		<image v-if="mulu_flag=='ljms'" class="pic_item" src="/static/index2/hyyz.png" style=" top: 300upx; animation: mymove 0.4s linear ;"
		 @click="changemulu('ljms_hyyz')"></image>
		<!-- <image v-if="mulu_flag=='ljms'" class="pic_item" src="/static/index2/sjpd.png" style=" top: 500upx; animation: mymove 0.42s linear ;"
		 @click="changemulu('ljms_sjpd')"></image> -->

		<image v-if="mulu_flag=='bdms'" class="pic_item" src="/static/index2/srdy.png" style=" top: 300upx; animation: mymove 0.4s linear ;"
		 @click="changemulu('bdms_srdy')"></image>
		<image v-if="mulu_flag=='bdms'" class="pic_item" src="/static/index2/rjmspt.png" style=" top: 500upx; animation: mymove 0.42s linear ;"
		 @click="changemulu('bdms_rjmspt')"></image>
		<!-- <image v-if="mulu_flag=='bdms'" class="pic_item" src="/static/index2/rjmsdy.png" style=" top: 700upx; animation: mymove 0.45s linear ;"
		 @click="changemulu('bdms_rjmsdy')"></image> -->

		<!-- <view v-if="mulu_flag!='zml'" class="icontext" style=" position: absolute;top: 200upx; right: 150upx;font-size: 40upx;color: #DD524D;" @click="changemulu('zml')">&#xe669; </view> -->

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
				mulu_flag: 'zml',
				windowHeight: null,
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: "五子棋打谱",
				path: '/pages/index2/index2',

			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		onLoad: async function(option) {
			this.windowHeight = uni.getSystemInfoSync().windowHeight;
			console.log('onLoad')
			//初始化棋盘

		},
		methods: {

			changemulu(muluname) {
				var that = this
				//const self = getCurrentPages()[0];
				if (muluname == "zml" || muluname == "dplx" || muluname == "dpcs" || muluname == "ljms" || muluname == "bdms") {
					this.mulu_flag = muluname;
				} else if (muluname == "bdms_rjmsdy" || muluname == "ljms_sjpd") {
					uni.showModal({
						title: "sorry",
						content: "该模式测试中。。。",
						showCancel: false,
					})
				} else if (muluname == "ljms_hyyz") {
					var randnum = Math.floor(Math.random() * 90000) + 100000;
					var randnstr = (new Date().valueOf()) + String(randnum);
					that.upload_to_server({
						'form': 'new_wzq_dz_start',
						'userid': that.userInfo.userid,
						'nickName': that.userInfo.nickName,
						'phonenum': that.userInfo.phonenum,
						'avatarUrl': that.userInfo.avatarUrl,
						'openid': that.userInfo.openid,
						'card_id': that.card_id,
						'shuijishu': randnstr,
					});
					uni.reLaunch({
						url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=false&player=1&shuijishu=" + randnstr,
					})

				} else {
					uni.navigateTo({
						url: "../play/play?mulu_flag=" + muluname,
					})
				}
			},
			gotoindex1() {
				uni.reLaunch({
					url: "../index/index",
				})
			},
			gototiwen() {
				uni.navigateTo({
					url: "../item_question/item_question",
				})
			}
		}
	}
</script>

<style>
	.pic_item {
		width: 440upx;
		height: 130upx;
		z-index: 110;
		position: absolute;
		right: 150upx;
		animation-delay: 0.25s;
	}

	.pic_item :active {
		width: 440upx;
		height: 130upx;
		z-index: 110;
		position: absolute;
		opacity: 0.8;
		transform: scale(1.05);
	}

	.bc {
		justify-content: center;
		/* padding-top: 40upx; */
		/* position: absolute; */
		width: 750upx;
		z-index: 1;
		/* top: 0upx; */
		/* right: 0upx; */
		/* background-image: url('/static/index4bc.jpg'); */
	}



	@keyframes mymove {
		from {
			/* right: -420upx; */
			transform: translateX(420upx)
		}

		to {
			transform: translateX(0upx)
		}
	}
</style>
