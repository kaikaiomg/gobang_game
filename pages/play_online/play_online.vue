<template>

	<view class="container" style=" width: 750upx; align-content: center;align-items: center; padding-top:160upx ;flex-flow: column nowrap;">

		<image src="../../static/index2bc.png" style="position: absolute;width: 750upx; height: 250upx; z-index:-1; bottom: 0upx;right: 0upx;"
		 mode=""></image>

		<view v-if="winLoc.whowin!=0" style="position: absolute; top: 30upx; width: 120upx;left: 360upx; font-size: 53upx; font-weight: bold; color: red;">
			{{winLoc.whowin_title}}</view>



		<view v-if="tips_group.show_dftx_flag" style="position: absolute; top: 50upx; left: 40upx; width: 160upx;justify-content: space-between;align-items: center;padding: 20upx;">
			<image v-if="tips_group.show_dftx_flag==1" class="logo-img2" src="../../static/robot.jpg"></image>
			<image v-if="tips_group.show_dftx_flag==2" class="logo-img2" src="../../static/zjz.jpg"></image>
			<image v-if="tips_group.show_dftx_flag==3" class="logo-img2" :src="play_group[3-whichplayer].player_avatarUrl"></image>
			<view :class="['now-stone',whichplayer == 2 ? 'bak_black':'bak_white']"></view>

		</view>


		<!-- 	<image class="" src="../../static/gzsm2.png" style="position: absolute; top: 50upx; right: 30upx; width:170upx;   height: 40upx; "
		 @click="tap_jieshao"></image> -->
		<view class="icontext" style="position: absolute; top: 80upx; width: 80upx; right: 40upx; font-size: 40upx; color: orange;font-weight: bold; justify-content: center;  "
		 @click=" gotozml()">&#xe745;</view>





		<!-- 棋盘 -->
		<view id="chess-board" class="chess-board" @ontouchstart="onChessBoardTouchStart" @ontouchmove="onChessBoardTouchMove"
		 @click="onChessBoardTouchEnd" :style="'width:'+fiveStone.chessboardSizePX+'px;height:'+fiveStone.chessboardSizePX+'px;background-color:#FFE153;position:relative;left:'+fiveStone.halfCellSizePX+'px;'">
			<view class="row" v-for="(row,itemy) in 15" :key="itemy" style="">
				<view class="cell" v-for="(cell,itemx) in 15" :key="itemx" style="position: relative;">
					<view v-if="(itemy==3 || itemy==7 || itemy==11 ) && (itemx==3 || itemx==7 || itemx==11 ) " :style="'background-color: black; width: 6px;height: 6px;border-radius:6px; position:absolute; left:-3px;top:-3px;'"></view>
					<view v-if="fiveStone.chessBoard[itemx][itemy].stoneType>0" :style="'width:'+fiveStone.cellSizePX+'px;height:'+fiveStone.cellSizePX+'px; border:1px solid #000000;position:absolute;border-radius:'+fiveStone.halfCellSizePX+'px;  left:-'+(fiveStone.halfCellSizePX+1)+'px;top:-'+(fiveStone.halfCellSizePX+1)+'px;transform:scale(0.80);'"
					 :class="[fiveStone.chessBoard[itemx][itemy].stoneType == 1 ? 'bak_black':'bak_white']">
					</view>
					<!-- 		<view v-if="fiveStone.chessBoardtips[itemx][itemy].stoneType>0 && tips_group.show_tips_flag" :style="' width:'+fiveStone.cellSizePX+'px;height:'+fiveStone.cellSizePX+'px; position:absolute;border-radius:'+fiveStone.halfCellSizePX+'px; left:-'+fiveStone.halfCellSizePX+'px;top:-'+ fiveStone.halfCellSizePX+'px;transform:scale('+(fiveStone.chessBoardtips[itemx][itemy].num>300 ?'0.45':'0.3')+');'"
					 :class="{'bak_cyan':fiveStone.chessBoardtips[itemx][itemy].stoneType==3
					 ,'bak_red':(fiveStone.chessBoardtips[itemx][itemy].stoneType==1 && tips_group.show_black_tips_flag)
					 ,'bak_blue':fiveStone.chessBoardtips[itemx][itemy].stoneType==2}">
					</view> -->

					<view v-if="loc1.x==itemx && loc1.y==itemy" :style="' width:'+fiveStone.cellSizePX+'px;height:'+fiveStone.cellSizePX+'px;  position:absolute; border-radius:'+fiveStone.halfCellSizePX+'px; left:-'+(fiveStone.halfCellSizePX+5)+'px;top:-'+(fiveStone.halfCellSizePX+5)+'px;transform:scale(0.58);'"
					 :class="[fiveStone.stone == 1 ? 'board_bak_black':'board_bak_white']">

					</view>

				</view>
			</view>
		</view>


		<!-- 状态栏 -->
		<view class="" style=" flex-flow: row nowrap; width: 750upx; display: flex;">
			<view class="" style="width: 190upx;justify-content: space-between;align-items: center;border: #000000 dashed 1upx;margin: 0 10upx 0 40upx ;padding: 10upx 18upx;">
				<view class="" style="flex-flow: column nowrap; width: 120upx; align-items: center;">
					<image class="logo-img" :src="userInfo.hasLogin ? userInfo.avatarUrl :loacal_avatarUrl_loc"></image>
					<!-- <text class="uer-name">{{userInfo.hasLogin ? userInfo.nickName : '**'}}</text> -->
				</view>

				<view :class="['now-stone',whichplayer == 1 ? 'bak_black':'bak_white']">
				</view>
			</view>
			<view class="" style="width: 400upx; height: 100upx;margin: 20upx; flex-flow: row nowrap; display: flex;align-items: center;align-content: center; justify-content: space-between;">

				<image class="minbutton_style" src="../../static/chongwan.png" @click="restart"></image>
				<image class="minbutton_style" src="../../static/huiqi.png" @click="undo"></image>
				<image v-if="tips_group.show_qiuzhu_flag" class="minbutton_style" src="../../static/qiuzhu.png" @click="qiuzhu"></image>
			</view>
		</view>
		<view class="menu_view" v-if="tips_group.show_menu_flag">
			<!-- <button class="menu_item_view" @click="start_play">开始游戏</button> -->
			<view class="icontext" style="position: absolute; top: 80upx; width: 80upx; right: 40upx; font-size: 40upx; color: orange;font-weight: bold; justify-content: center;  "
			 @click=" gotozml()">&#xe745;</view>
			<button class="menu_item_view" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">开始游戏</button>
			<button v-if="tips_group.has_yaoqing_flag=='false'" class="menu_item_view" open-type="share">邀请好友</button>
		</view>




	</view>


</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	import FiveStone from '../../FiveStone/FiveStone.js';
	// import computerAI from '../../FiveStone/computerai.js';
	import {
		tipsdic
	} from '../../data/wuziqi.js';
	export default {
		data() {
			return {

				loacal_avatarUrl_loc: "../../static/nobody.png",

				fiveStone: null,
				winLoc: {
					whowin: 0,
					whowin_title: "",
					start: null,
					end: null,
					width: null,
					angle: null
				},
				setTime: null,
				loc1: null,
				loc: null,
				data_flag: null,
				whichplayer: 0,
				shuijishu: null,
				agree_next_play: false,
				next_tablenbr: null,
				play_group: [{},
					{
						player: 1,
						state: 'none',
						player_nickname: null,
						player_avatarUrl: null,
					},
					{
						player: 1,
						state: 'none',
						player_nickname: null,
						player_avatarUrl: null,
					}
				],

				tips_group: {
					cantouch_flag: true,
					mulu_flag: null,
					show_tips_flag: true,
					show_black_tips_flag: true,
					get_tips_flag: true,
					steps_limit: 60,
					table_name: "",
					show_wrong_choice_flag: false,
					show_tips_last_flag: false,
					show_dftx_flag: false,
					double_undo_flag: false,
					show_qiuzhu_flag: false,
					show_find_duishou_flag: false,
					show_menu_flag: false,
					has_yaoqing_flag: 'false',
					agreeundo_flag: false,
				},
				sever_play_data: null,
			}
		},
		computed: {
			...mapState(['userInfo'])
		},



		onShareAppMessage(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: "朋友，来一局五子棋",
				path: "/pages/play_online/play_online?mulu_flag=ljms_hyyz&player=2&shuijishu=" + this.shuijishu,
				// path: "/pages/index/index?mulu_flag=ljms_hyyz&player=2&shuijishu=" + this.shuijishu,
			}
		},

		onLoad: async function(option) {



			var that = this;

			console.log('初始化棋盘')
			that.fiveStone = new FiveStone(15, 0.98);
			that.fiveStone.setWinCallback(that.winCallback);
			that.loc = null;
			that.tips_group.mulu_flag = option.mulu_flag;
			that.tips_group.has_yaoqing_flag = option.has_yaoqing_flag;
			that.whichplayer = option.player;
			that.shuijishu = option.shuijishu;


			console.log(that.tips_group.mulu_flag)
			switch (option.mulu_flag) {

				case "ljms_hyyz":
					that.tips_group.show_dftx_flag = 3;
					that.tips_group.get_tips_flag = false;
					that.tips_group.show_tips_flag = false;
					that.tips_group.show_find_duishou_flag = true;
					that.tips_group.show_menu_flag = true;
					uni.setNavigationBarTitle({
						title: '巅峰对决'
					});
					break;
				case "ljms_sjpd":
					that.tips_group.show_dftx_flag = 3;
					that.tips_group.get_tips_flag = false;
					that.tips_group.show_tips_flag = false;
					that.tips_group.show_find_duishou_flag = true;
					that.tips_group.show_menu_flag = true;
					uni.setNavigationBarTitle({
						title: '随机配对'
					});
					break;

				default:
					break;
			}

			that.$forceUpdate();
			that.play_group[that.whichplayer].state = 'ready';
			that.update_play_date();
			that.setTime = setInterval(function() {
				that.play_circle()
			}, 2000);
		},
		methods: {
			...mapMutations(['settipslast', 'cuttipslast', 'login', 'logout', 'setopenid', 'settipslast', 'setphonenum',
				'setdbuserifo'
			]),
			handleTip(e) {
				//const self = getCurrentPages()[0];
				if (!this.fiveStone.canStep()) {
					return;
				}
				this.fiveStone.getStepPosition(e);
				this.loc = this.fiveStone.getStepLocation(e);

			},
			winCallback(winStone) {
				var that=this;
				that.winLoc.whowin = (3 - that.fiveStone.stone);
				if (that.winLoc.whowin == 1) {
					that.winLoc.whowin_title = "黑胜"
				};
				if (that.winLoc.whowin == 2) {
					that.winLoc.whowin_title = "白胜"
				};
				if (that.whichplayer == that.winLoc.whowin) {
					that.play_group[that.whichplayer].state = 'win';
					that.update_play_date();
				}
				if (that.whichplayer != that.winLoc.whowin) {
					that.play_group[that.whichplayer].state = 'loss';
					that.update_play_date();
				}
				that.$forceUpdate();
				that.fiveStone.preventStep();
				setTimeout(function() {
					that.restartnewgame();
				}, 3000)

			},
			onChessBoardTouchStart: function(e) {
				handleTip(e);
			},
			onChessBoardTouchMove: function(e) {
				handleTip(e);
			},
			onChessBoardTouchEnd: function(e) {
				//	console.log(e);

				if (!this.tips_group.cantouch_flag) {
					return;
				}
				var that = this;
				that.handleTip(e);
				//const loc = that.loc;


				if (that.loc != null && that.loc1 != null) {

					console.log('loc', that.loc.x, that.loc.y);
					console.log('loc1', that.loc1.x, that.loc1.y);
					if (that.loc1.x == that.loc.x && that.loc1.y == that.loc.y) {
						//var gettips_flag = that.fiveStone.canStepAt(loc.x, loc.y);
						that.fiveStone.step(that.loc.x, that.loc.y);
						that.update_play_date();
						that.loc1.x = 100;
						that.loc1.y = 100;
						that.tips_group.cantouch_flag = false;
						that.$forceUpdate();
						return;
					}
				}
				if ((that.loc1 != that.loc || that.loc1 == null) && that.fiveStone.chessBoard[that.loc.x][that.loc.y].stoneType ==
					0) {
					that.loc1 = JSON.parse(JSON.stringify(that.loc));
				}

			},
			/** * 重来*/
			restart: function() {
				var that = this;
				uni.showModal({
					title: "警告",
					content: "是否确定重新开始，重新开始后本局判输",
					success: function(res) {
						if (res.confirm) {
							that.play_group[that.whichplayer].state = 'renshu';
							that.update_play_date();
							that.winLoc.whowin = that.fiveStone.stone;
							that.winLoc.whowin_title = "认输";
							that.winLoc.start = null;
							that.winLoc.end = null;
							that.fiveStone.preventStep();
							that.$forceUpdate();
							// clearInterval(that.setTime)
							setTimeout(function() {
								that.restartnewgame();
							}, 3000)
						} else if (res.cancel) {

						}
					}
				})

				//this.refreshFiveStoneAndClearWinTip();
			},
			/**悔棋 */
			undo: function() {
				this.play_group[this.whichplayer].state = 'huiqi';
				this.update_play_date();
				uni.showLoading({
					mask: true,
					title: "等待对方回复"
				})
				// 				this.$forceUpdate();
			},



			tap_jieshao: function() {
				uni.navigateTo({
					url: "../jieshao/jieshao",

				})
			},
			gotozml: function() {
				var that = this;
				uni.showModal({
					title: "警告",
					content: "是否确定要离开本局游戏，离开后无法继续",
					success: function(res) {
						if (res.confirm) {
							that.play_group[that.whichplayer].state = 'renshu';
							clearInterval(that.setTime)
							that.update_play_date();
							uni.reLaunch({
								url: "../index2/index2",
							})
						} else if (res.cancel) {

						}
					}
				})


			},

			start_play: async function() {
				var that = this
				
				if (this.tips_group.has_yaoqing_flag=='false') {
					uni.showToast({
						title: '等待对手中。。。',
						icon:'none',
					});
					return;
				}
                else{
					that.tips_group.show_menu_flag = false;
					that.tips_group.cantouch_flag = false;
					that.$forceUpdate();
				}
			
				
				

				

			},
			play_circle: async function() {
				var that = this;
				var post_data = {
					'form': 'get_wzq_dz_data',
					'shuijishu': that.shuijishu,
				};
				await that.download_from_server(post_data, 'sever_play_data');

				if (that.whichplayer == 1 && that.agree_next_play == true) {
					if (that.sever_play_data[0]['next_tablenbr'].length > 5) {
						clearInterval(that.setTime)
						uni.reLaunch({
							url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu=" + that.sever_play_data[
								0]['next_tablenbr'],
						})
					}
				}

				that.play_group[1].player_nickname = that.sever_play_data[0].nickName1;
				that.play_group[1].player_avatarUrl = that.sever_play_data[0].avatarUrl1;

				that.play_group[2].player_nickname = that.sever_play_data[0].nickName2;
				that.play_group[2].player_avatarUrl = that.sever_play_data[0].avatarUrl2;

				if (that.whichplayer == 1) {
					that.play_group[2].state = that.sever_play_data[0].state2;
				}
				if (that.whichplayer == 2) {
					that.play_group[1].state = that.sever_play_data[0].state1;
				}
				that.$forceUpdate()
				console.log(that.play_group)


				if( (that.fiveStone.chessboard_total_line.length< that.sever_play_data[0].chessboard.length)||(that.play_group[3-that.whichplayer].state == 'agreehuiqi'))
				{
					console.log('change_history', that.fiveStone.chessboard_total_line)
					that.fiveStone.changehistory(that.sever_play_data[0].chessboard);
				}

				if (that.play_group[3 - that.whichplayer].state != 'none') {
					that.tips_group.has_yaoqing_flag = true;
					if (that.play_group[3 - that.whichplayer].state == 'renshu') {
						that.play_group[that.whichplayer].state == 'win';
						// this.play_group[3-this.whichplayer].player_nickname == '';
						// this.play_group[3-this.whichplayer].player_avatarUrl == '';
						that.update_play_date();
						that.winLoc.whowin = that.whichplayer;
						that.winLoc.whowin_title = "对方认输";
						that.tips_group.cantouch_flag = false;
						that.$forceUpdate()
						setTimeout(function() {
							that.restartnewgame();
						}, 3000)
					} else if (that.play_group[3 - that.whichplayer].state == 'ok') {
						that.play_group[that.whichplayer].state = 'ok';
						that.update_play_date();
						if (that.fiveStone.stone == that.whichplayer) {
							that.tips_group.cantouch_flag = true;
						}
					} else if (that.play_group[3 - that.whichplayer].state == 'huiqi' &&
						that.play_group[that.whichplayer].state != 'agreehuiqi' && that.play_group[that.whichplayer].state !=
						'notagreehuiqi') {
						uni.showModal({
							content: "对方请求悔棋是否同意？",
							success: function(res) {
								if (res.confirm) {

									that.fiveStone.undo();
									if (that.fiveStone.stone == that.whichplayer) {
										that.fiveStone.undo();
									}
									that.winLoc.whowin = 0;
									that.winLoc.whowin_title = "";
									that.winLoc.start = null;
									that.winLoc.end = null;
									that.$forceUpdate();
									that.play_group[that.whichplayer].state = 'agreehuiqi';
									that.update_play_date();
								} else if (res.cancel) {
									that.play_group[that.whichplayer].state = 'notagreehuiqi';
									that.update_play_date();
								}
							}
						})
					} else if (that.play_group[3 - that.whichplayer].state == 'notagreehuiqi'&& that.play_group[that.whichplayer].state != 'ok') {
						uni.hideLoading();
						uni.showToast({
							title: "对方不同意"
						})
						that.play_group[that.whichplayer].state = 'ok';
						that.update_play_date();
					} else if (that.play_group[3 - that.whichplayer].state == 'agreehuiqi'&& that.play_group[that.whichplayer].state != 'ok') {
						uni.hideLoading();
						uni.showToast({
							title: "对方同意"
						})
						that.play_group[that.whichplayer].state = 'ok';
						that.update_play_date();
					} else {
						if (that.fiveStone.stone == that.whichplayer) {
							that.tips_group.cantouch_flag = true;
						}
					}


				}


				// console.log('stone',that.fiveStone.stone)
				// console.log('whichplayer',that.whichplayer)

				// that.tips_group.cantouch_flag = true;





			},

			update_play_date: async function() {
				var that = this;
				var total_line = ""
				// var lochistory = that.fiveStone.history;
				// if (lochistory.length > 0) {
				// 	for (var i = 0; i < lochistory.length; i++) {
				// 		total_line += that.upchangetoabc(lochistory[i].x);
				// 		total_line += (15 - lochistory[i].y).toString();
				// 	}
				// }
				// console.log(total_line)
				var update_form = 'new_wzq_dz_play' + this.whichplayer + '_update'
				that.upload_to_server({
					'form': update_form,
					'nickName': that.userInfo.nickName,
					'avatarUrl': that.userInfo.avatarUrl,
					'openid': that.userInfo.openid,
					'shuijishu': that.shuijishu,
					'state': that.play_group[that.whichplayer].state,
					'chessboard': that.fiveStone.chessboard_total_line,
					'next_tablenbr': that.next_tablenbr,

				});

			},

			restartnewgame: async function(e) {
				var that = this;
				uni.showModal({
					content: "是否再来一局？",
					success: function(res) {
						if (res.confirm) {
							that.agree_next_play = true;
							if (that.whichplayer == 1) {

								if (that.sever_play_data[0]['next_tablenbr'].length > 5) {
									uni.reLaunch({
										url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=2&shuijishu=" + that.sever_play_data[
											0]['next_tablenbr'],
									})
								}
							} else if (that.whichplayer == 2) {
								var randnum = Math.floor(Math.random() * 90000) + 100000;
								var randnstr = (new Date().valueOf()) + String(randnum);
								that.next_tablenbr = randnstr;
								that.update_play_date();
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
								clearInterval(that.setTime)
								uni.reLaunch({
									url: "../play_online/play_online?mulu_flag=ljms_hyyz&has_yaoqing_flag=true&player=1&shuijishu=" +
										randnstr,
								})
							}

						} else if (res.cancel) {
							clearInterval(that.setTime)
						}
					}
				})

			},

			wxGetUserInfo: function(e) {
				var that = this;
				if (that.userInfo.hasLogin) {
					that.start_play()
				} else {
					console.log(e.detail.userInfo)
					if (e.detail.userInfo) {
						// 发送 res.code 到后台换取 openId, sessionKey, unionId
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								console.log("code:", loginRes.code);
								that.login(e.detail.userInfo, loginRes.code)
								that.upload_oauthData(e.detail.userInfo, loginRes.code)
								that.start_play()
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

						}
					},
				})
			},

		}
	}
</script>

<style>
	view {
		display: flex;
	}

	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/** 棋盘 */
	.chess-board {
		margin: 20upx auto;
		display: flex;
		flex-direction: column;
		/* 	width: 100%;
        padding:40upx 40upx; */
	}

	/** 棋盘的每一行 */
	.chess-board .row {

		display: flex;
		flex-direction: row;
		height: 100%;

	}

	/** 棋盘的每一个格 */
	.chess-board .cell {
		border-bottom: 1px solid #000000;
		border-right: 1px solid #000000;
		flex: 1;
	}

	/** 每一行的第一个格子 */
	.chess-board .row .cell:first-child {
		border-left: 1px solid #000000;

	}

	/** 第一行的每一个格子 */
	.chess-board .row:first-child .cell {
		border-top: 1px solid #000000;

	}

	.chess-board .row .cell:last-child {
		border: 0px solid #000000;
		background-color: #f3f3f3;
	}

	/** 第一行的每一个格子 */
	.chess-board .row:last-child .cell {
		border: 0px solid #000000;
		background-color: #f3f3f3;
	}


	/** 下子的提示区域 */
	.step-tip {
		border: 1px solid #ff0000;
		position: absolute;
	}

	/** 棋盘的状态栏 */
	.chess-board-status-bar {
		margin-top: 15px;
		margin-left: 10px;
		margin-right: 10px;
		height: 90px;
		border: 1px dashed #000000;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
	}

	/** 当前下的棋子类型 */
	.now-stone-bar {
		height: 200upx;
		width: 90px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/** 当前子的类型 */
	.now-stone {
		width: 50upx;
		height: 50upx;
		border: 1px solid #000000;
		border-radius: 25upx;
	}

	.logo-img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}


	.now-stone2 {
		width: 40upx;
		height: 40upx;
		border: 1px solid #000000;
		border-radius: 25upx;
	}

	.logo-img2 {
		width: 40px;
		height: 40px;
		border-radius: 40px;
	}

	/** 控制按钮栏 */
	.five-stone-control-bar {
		flex: 1;
		height: 100%;
		border-left: 1px dashed #000000;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	/** 控制按钮 */
	/* button {
		flex: 1;
		margin: 0 5px 0 5px;
	} */

	/** 胜利之后提示五连子的位置 */
	.win_tip {
		background-color: #ff0000;
		height: 4px;
		position: absolute;
		transform-origin: '0% 50%'
	}


	.bak_black {
		background-color: black;

	}

	.bak_white {
		background-color: white;

	}

	.bak_black {
		background-color: black;

	}

	.bak_red {
		background-color: red;

	}

	.bak_blue {
		background-color: blue;

	}

	.bak_cyan {
		background-color: Cyan;
	}



	.black {
		color: #000000;
	}

	.white {
		color: #FFFFFF;
	}

	.menu_view {
		position: fixed;
		top: 0upx;
		width: 750upx;
		height: 100%;
		background: rgba(200, 200, 200, .5);
		flex-flow: column;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}

	.menu_item_view {
		background: rgba(30, 144, 255, .9);
		margin: 60upx 0upx;
		border-radius: 20upx;
		justify-content: center;
		align-content: center;
		border: 1upx solid black;
		font-size: 35upx;
		color: white;
		font-weight: bold;
		height: 90upx;
		width: 200upx;
	}


	.uer-name {
		font-size: 30upx;
	}


	.board_bak_black {

		border: 5px solid black;
	}

	.board_bak_white {

		border: 5px solid white;
	}

	.minbutton_style {
		width: 180upx;
		height: 80upx;
		z-index: 10;
	}

	.minbutton_style:active {
		width: 180upx;
		height: 80upx;
		opacity: 0.5;
		z-index: 10;
	}




	page {
		background-color: #f3f3f3;
	}
</style>
