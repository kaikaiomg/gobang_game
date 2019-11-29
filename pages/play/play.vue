<template>

	<view class="container" style=" width: 750upx; align-content: center;align-items: center; padding-top:160upx ;flex-flow: column nowrap;">

		<image src="../../static/index2bc.png" style="position: absolute;width: 750upx; height: 250upx; z-index:-1; bottom: 0upx;right: 0upx;"
		 mode=""></image>


		<view v-if="winLoc.whowin!=0" style="position: absolute; top: 30upx; width: 120upx;left: 360upx; font-size: 53upx; font-weight: bold; color: red;">
			{{winLoc.whowin_title}}</view>


		<view v-if="tips_group.show_tips_last_flag" style="position: absolute; top: 50upx; width: 320upx;left: 60upx; font-size: 23upx; color: black;  ">
			剩余提示数:{{userInfo.tips_last}}</view>
		<view v-if="tips_group.show_tips_last_flag" class="icontext" style="position: absolute; top: 100upx; width: 130upx; border-radius: 10upx; border: solid 2upx orange;  left: 60upx; font-size: 25upx; color: orange;font-weight: bold; justify-content: center; "
		 @click="buy_vip">&#xe661;&nbsp;购买vip</view>

		<view v-if="tips_group.show_dftx_flag" style="position: absolute; top: 50upx; left: 40upx; width: 160upx;justify-content: space-between;align-items: center;border: #000000 dashed 1upx;padding: 20upx;">
			<image v-if="tips_group.show_dftx_flag==1" class="logo-img2" src="../../static/robot.jpg"></image>
			<image v-if="tips_group.show_dftx_flag==2" class="logo-img2" src="../../static/zjz.jpg"></image>
			<view class="now-stone2 bak_black"> </view>
		</view>


		<image class="" src="../../static/gzsm2.png" style="position: absolute; top: 50upx; right: 30upx; width:170upx;   height: 40upx; "
		 @click="tap_jieshao"></image>
		<!-- <view class="icontext" style="position: absolute; top: 110upx; width: 80upx; right: 40upx; font-size: 25upx; color: black;font-weight: bold; justify-content: center;  "
		 @click=" gotozml()">&#xe88c;</view> -->

		<view v-if="tips_group.show_wrong_choice_flag " class="icontext" style="z-index: 100; position: absolute; top: 210upx;  left: 80upx; font-size: 55upx; color: red;font-weight:900;  ">&#xe711;</view>

		<view v-if="tips_group.show_right_choice_flag " class="icontext" style="z-index: 100; position: absolute; top: 210upx;  left: 80upx; font-size: 55upx; color: LawnGreen;font-weight:900;  ">&#xe66d;</view>




		<!-- 棋盘 -->
		<view id="chess-board" class="chess-board" @ontouchstart="onChessBoardTouchStart" @ontouchmove="onChessBoardTouchMove"
		 @click="onChessBoardTouchEnd" :style="'width:'+fiveStone.chessboardSizePX+'px;height:'+fiveStone.chessboardSizePX+'px;background-color:#FFE153;position:relative;left:'+fiveStone.halfCellSizePX+'px;'">
			<view class="row" v-for="(row,itemy) in 15" :key="itemy" style="">
				<view class="cell" v-for="(cell,itemx) in 15" :key="itemx" style="position: relative;">
					<view v-if="(itemy==3 || itemy==7 || itemy==11 ) && (itemx==3 || itemx==7 || itemx==11 ) " :style="'background-color: black; width: 6px;height: 6px;border-radius:6px; position:absolute; left:-3px;top:-3px;'"></view>
					<view v-if="fiveStone.chessBoard[itemx][itemy].stoneType>0" :style="'width:'+fiveStone.cellSizePX+'px;height:'+fiveStone.cellSizePX+'px; border:1px solid #000000;position:absolute;border-radius:'+fiveStone.halfCellSizePX+'px;  left:-'+(fiveStone.halfCellSizePX+1)+'px;top:-'+(fiveStone.halfCellSizePX+1)+'px;transform:scale(0.80);'"
					 :class="[fiveStone.chessBoard[itemx][itemy].stoneType == 1 ? 'bak_black':'bak_white']">
					</view>
					<view v-if="fiveStone.chessBoardtips[itemx][itemy].stoneType>0 && tips_group.show_tips_flag" :style="' width:'+fiveStone.cellSizePX+'px;height:'+fiveStone.cellSizePX+'px; position:absolute;border-radius:'+fiveStone.halfCellSizePX+'px; left:-'+(fiveStone.halfCellSizePX+1)+'px;top:-'+(fiveStone.halfCellSizePX+1)+'px;transform:scale('+(fiveStone.chessBoardtips[itemx][itemy].num>300 ?'0.40':'0.27')+');'"
					 :class="{'bak_cyan':fiveStone.chessBoardtips[itemx][itemy].stoneType==3
					 ,'colorful': (fiveStone.chessBoardtips[itemx][itemy].stoneType==1 && fiveStone.chessBoardtips[itemx][itemy].num==1234)
					 ,'bak_red':(fiveStone.chessBoardtips[itemx][itemy].stoneType==1 && tips_group.show_black_tips_flag  && fiveStone.chessBoardtips[itemx][itemy].num!=1234)
					 ,'bak_blue':fiveStone.chessBoardtips[itemx][itemy].stoneType==2}">
					</view>
				</view>
			</view>
			<!-- :class="[fiveStone.chessBoardtips[itemx][itemy].stoneType == 1 ? 'bak_red':'bak_blue']"> -->
			<!-- 胜利标识 -->

			<!-- 胜利标识 -->
			<!-- 		<view  class="win_tip" 
					:style="'width:'+winLoc.width+'px;top:'+winLoc.start.y+fiveStone.halfCellSizePX-2+'px;left:'+winLoc.start.x +fiveStone.halfCellSizePX+'px;transform-origin:0% 50%;transform:rotateZ('+winLoc.angle+'rad); z-index:100;'">
					</view> -->
			<!-- v-if="winLoc.start != null && winLoc.end != null" 
			 -->
			<!-- <view  class="win_tip" v-if="winLoc.start != null && winLoc.end != null" :style="{width:(winLoc.width+'px'),top:(winLoc.start.y+fiveStone.halfCellSizePX-2+'px'),left:(winLoc.start.x +fiveStone.halfCellSizePX+'px'),transform:('rotateZ('+winLoc.angle+'rad)')}"></view> -->

		</view>

		<!-- 		<view id="chess-board" class="chess-board"  :style="'width:'+fiveStone.chessboardSizePX+'px;height:10px;position:relative;left:'+fiveStone.halfCellSizePX+'px;justify-content: space-between;flex-flow:row nowrap '">
			
			ABCDEFGHIJKLMNO
		</view>
		 -->
		<!-- 状态栏 -->
		<view class="" style=" flex-flow: row nowrap; width: 750upx; display: flex;">
			<view class="" style="width: 190upx;justify-content: space-between;align-items: center;border: #000000 dashed 1upx;margin: 0 10upx 0 40upx ;padding: 10upx 18upx;">
				<view class="" style="flex-flow: column nowrap; width: 120upx; align-items: center;">
					<image class="logo-img" :src="userInfo.hasLogin ? userInfo.avatarUrl :loacal_avatarUrl_loc"></image>
					<!-- <text class="uer-name">{{userInfo.hasLogin ? userInfo.nickName : '**'}}</text> -->
				</view>
				<view v-if="tips_group.show_dftx_flag" class="now-stone bak_white"> </view>
				<view v-if="!tips_group.show_dftx_flag" :class="['now-stone',fiveStone.stone == 1 ? 'bak_black':'bak_white']">
				</view>
			</view>
			<view class="" style="width: 400upx; height: 100upx;margin: 20upx; flex-flow: row nowrap; display: flex;align-items: center;align-content: center; justify-content: space-between;">
				<!-- 	<view style="width: 200upx; height: 80upx; font-size: 40upx; align-content: center; align-items: center;justify-content: center;  background-color: white; border-radius: 10upx;margin: 10upx;"
				 @click="restart">重来</view>
				<view style="width: 200upx; height: 80upx; font-size: 40upx; align-content: center; align-items: center; justify-content: center; background-color: white; border-radius: 10upx;margin: 10upx;"
				 @click="undo">悔棋</view> -->
				<image v-if="tips_group.show_restart_flag" class="minbutton_style" src="../../static/chongwan.png" @click="restart"></image>
				<image v-if="tips_group.show_qiuzhu_flag" class="minbutton_style" src="../../static/qiuzhu.png" @click="qiuzhu"></image>
				<image v-if="tips_group.show_undo_flag" class="minbutton_style" src="../../static/huiqi.png" @click="undo"></image>

			</view>
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
				wuziqitips: [],
				mistakes_collection_list: [],
				mistakes_collection_newlist: [],
				fiveStone: null,
				winLoc: {
					whowin: 0,
					whowin_title: "",
					start: null,
					end: null,
					width: null,
					angle: null
				},
				loc: null,
				data_flag: null,

				tips_group: {
					cuoti_num: 0,
					cuoti_total_num: 0,
					mulu_flag: null,
					show_tips_flag: true,
					show_black_tips_flag: true,
					get_tips_flag: true,
					steps_limit: 600,
					table_name: "",
					show_wrong_choice_flag: false,
					show_right_choice_flag: false,
					show_tips_last_flag: false,
					show_dftx_flag: false,
					double_undo_flag: false,
					show_qiuzhu_flag: false,
					show_restart_flag: true,
					show_undo_flag: true,
					show_find_duishou_flag: false,
				}
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		onLoad: async function(option) {

			var that = this;

			console.log('初始化棋盘')
			that.fiveStone = new FiveStone(15, 0.98);
			that.fiveStone.setWinCallback(that.winCallback);
			that.loc = null;
			that.tips_group.mulu_flag = option.mulu_flag;
			console.log(that.tips_group.mulu_flag)
			await this.get_storage_data("mistakes_collection", "mistakes_collection_list");
			that.mistakes_collection_newlist = that.mistakes_collection_list.concat();
			console.log('mistakes_collection_list_new', that.mistakes_collection_list_new);
			switch (option.mulu_flag) {
				case "dplx_hykj":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.show_qiuzhu_flag = true;
					that.tips_group.table_name = "wzq_hy_data";
					that.fiveStone.changehistory("H8H9I9");
					uni.setNavigationBarTitle({
						title: '打谱练习-花月'
					});
					break;
				case "dplx_pykj":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.show_qiuzhu_flag = true;
					that.tips_group.table_name = "wzq_py_data";
					that.fiveStone.changehistory("H8I9I7");
					uni.setNavigationBarTitle({
						title: '打谱练习-蒲月'
					});
					break;
				case "dplx_kjwb":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.table_name = "wzq_kjwb_data";
					that.tips_group.steps_limit = 11;
					uni.setNavigationBarTitle({
						title: '打谱练习-开局五步'
					});
					break;
				case "dpcs_hykj":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.show_black_tips_flag = false;
					that.tips_group.table_name = "wzq_hy_data";
					that.fiveStone.changehistory("H8H9I9");
					uni.setNavigationBarTitle({
						title: '打谱测试-花月'
					});
					break;
				case "dpcs_pykj":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.show_black_tips_flag = false;
					that.tips_group.table_name = "wzq_py_data";
					that.fiveStone.changehistory("H8I9I7");
					uni.setNavigationBarTitle({
						title: '打谱测试-蒲月'
					});
					break;
				case "dpcs_kjwb":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.show_black_tips_flag = false;
					that.tips_group.table_name = "wzq_kjwb_data";
					that.tips_group.steps_limit = 11;
					uni.setNavigationBarTitle({
						title: '打谱测试-开局五步'
					});
					break;
				case "dpcs_wdct":
					that.tips_group.show_tips_last_flag = true;
					that.tips_group.show_black_tips_flag = true;
					that.tips_group.get_tips_flag = false;
					that.tips_group.cuoti_total_num = that.mistakes_collection_list.length;
					that.winLoc.whowin = 1;
					that.tips_group.cuoti_num = 0;
					that.tips_group.show_restart_flag = false;
					that.tips_group.show_undo_flag = false;
					that.winLoc.whowin_title = (that.tips_group.cuoti_num + 1) + "/" + that.tips_group.cuoti_total_num;
					that.fiveStone.changehistory(that.mistakes_collection_list[0].total_line);
					// that.fiveStone.chessBoardtips=that.mistakes_collection_list[0].tips;
					uni.setNavigationBarTitle({
						title: '打谱测试-我的错题'
					});
					break;

				case "bdms_srdy":
					that.tips_group.get_tips_flag = false;
					that.tips_group.show_tips_flag = false;
					uni.setNavigationBarTitle({
						title: '双人本地对弈'
					});
					break;
				case "bdms_rjmspt":
					that.tips_group.show_dftx_flag = 1;
					that.tips_group.double_undo_flag = true;
					that.tips_group.get_tips_flag = false;
					that.tips_group.show_tips_flag = false;
					that.fiveStone.changehistory("H8");
					uni.setNavigationBarTitle({
						title: '人机模式-普通'
					});
					break;
				case "bdms_rjmsdy":
					that.tips_group.show_dftx_flag = 2;
					that.tips_group.double_undo_flag = true;
					that.tips_group.get_tips_flag = false;
					that.tips_group.show_tips_flag = false;
					that.fiveStone.changehistory("H8");
					uni.setNavigationBarTitle({
						title: '人机模式-地狱'
					});
					break;
				case "ljms_hyyz":
					that.tips_group.show_dftx_flag = 3;
					that.tips_group.get_tips_flag = false;
					that.tips_group.show_tips_flag = false;
					that.tips_group.show_find_duishou_flag = true;
					uni.setNavigationBarTitle({
						title: '巅峰对决'
					});
					break;
				default:
					break;
			}


			if (that.tips_group.get_tips_flag) {
				that.get_tips();
			}
			that.$forceUpdate();

		},
		methods: {
			...mapMutations(['settipslast', 'cuttipslast']),
			handleTip(e) {
				//const self = getCurrentPages()[0];
				if (!this.fiveStone.canStep()) {
					return;
				}

				this.fiveStone.getStepPosition(e);
				this.loc = this.fiveStone.getStepLocation(e);

			},

			/**
			 * 胜利之后的回调
			 */
			winCallback(winStone) {
				// console.log(startLoc,endLoc);
				// const startLocation = this.fiveStone.chessBoard[startLoc.x][startLoc.y].pos;
				// const endLocation = this.fiveStone.chessBoard[endLoc.x][endLoc.y].pos;
				// const long = Math.sqrt(Math.pow(startLocation.x - endLocation.x, 2) +
				// 	Math.pow(startLocation.y - endLocation.y, 2));
				// const tipAngle = Math.acos((endLocation.x - startLocation.x) / long);
				// console.log(tipAngle);
				// this.winLoc.start = startLocation;
				// this.winLoc.end = endLocation;
				// this.winLoc.width = long;
				// this.winLoc.angle = tipAngle;
				//              console.log(this.winLoc);
				//已经成功以后禁止再下子
				this.winLoc.whowin = (3 - this.fiveStone.stone);
				if (this.winLoc.whowin == 1) {
					this.winLoc.whowin_title = "黑胜"
				};
				if (this.winLoc.whowin == 2) {
					this.winLoc.whowin_title = "白胜"
				};
				this.$forceUpdate();
				this.fiveStone.preventStep();

			},
			buy_vip: function(e) {
				uni.showModal({
					title: "内测期间无需购买",
					showCancel: false,
				})
			},
			onChessBoardTouchStart: function(e) {
				handleTip(e);
			},
			onChessBoardTouchMove: function(e) {
				handleTip(e);
			},
			onChessBoardTouchEnd: async function(e) {
				//	console.log(e);
				var that = this;
				that.handleTip(e);
				const loc = that.loc;
				// console.log(this.loc);

				if (that.fiveStone.history.length > that.tips_group.steps_limit) {
					that.fiveStone.preventStep();
					uni.showModal({
						title: '',
						content: '五步训练最多只能走11步',
						showCancel: false,
					})
				}


				if (loc != null) {
					var gettips_flag = that.fiveStone.canStepAt(loc.x, loc.y)

					//打谱测试模式
					if (that.fiveStone.chessBoardtips[loc.x][loc.y].stoneType != 1 && that.tips_group.show_black_tips_flag == false &&
						that.fiveStone.stone == 1) {


						var total_line = "";
						var lochistory = that.fiveStone.history;
						if (lochistory.length > 0) {
							for (var i = 0; i < lochistory.length; i++) {
								total_line += that.upchangetoabc(lochistory[i].x);
								total_line += (15 - lochistory[i].y).toString();
							}
						}
						console.log(total_line)


						var has_tips_falg = false;
						for (var m = 0; m < 15; m++) {
							for (var n = 0; n < 15; n++) {
								if (that.fiveStone.chessBoardtips[m][n].stoneType != 0) {
									has_tips_falg = true;
								}
							}
						}
						if (that.mistakes_collection_list[that.mistakes_collection_list.length - 1] != total_line && has_tips_falg) {
							that.mistakes_collection_list.push({
								total_line: total_line,
								tips: that.fiveStone.chessBoardtips,
							})
							uni.setStorage({
								key: 'mistakes_collection',
								data: that.mistakes_collection_list,
							})
							console.log(that.mistakes_collection_list)
						}



						that.tips_group.show_wrong_choice_flag = true;
						setTimeout(function() {
							that.tips_group.show_wrong_choice_flag = false;
						}, 1000)
					}
					//我的错题
					if (that.tips_group.mulu_flag == 'dpcs_wdct') {

						if (that.mistakes_collection_list[that.tips_group.cuoti_num].tips[loc.x][loc.y].stoneType != 1) {

							that.tips_group.show_wrong_choice_flag = true;
							that.fiveStone.chessBoardtips = that.mistakes_collection_list[that.tips_group.cuoti_num].tips;
							setTimeout(function() {

								if ((that.tips_group.cuoti_num + 1) < that.tips_group.cuoti_total_num) {
									that.tips_group.cuoti_num++;
								} else {
									that.tips_group.cuoti_num = 0;
									that.mistakes_collection_list = that.mistakes_collection_newlist.concat();
									that.tips_group.cuoti_total_num = that.mistakes_collection_list.length;
								}
								that.tips_group.show_wrong_choice_flag = false;
								that.winLoc.whowin_title = (that.tips_group.cuoti_num + 1) + "/" + that.tips_group.cuoti_total_num;
								that.fiveStone.changehistory(that.mistakes_collection_list[that.tips_group.cuoti_num].total_line);
								that.fiveStone.resetchessBoardtips();
							}, 4000)

						} else {
							that.tips_group.show_right_choice_flag = true;
							console.log('delete_tips', that.tips_group.cuoti_num)
							that.mistakes_collection_newlist.splice(that.tips_group.cuoti_num, 1);
							setTimeout(function() {
								that.tips_group.show_right_choice_flag = false;
								if ((that.tips_group.cuoti_num + 1) < that.tips_group.cuoti_total_num) {
									that.tips_group.cuoti_num++;
								} else {
									that.tips_group.cuoti_num = 0;
									that.mistakes_collection_list = that.mistakes_collection_newlist.concat();
									that.tips_group.cuoti_total_num = that.mistakes_collection_list.length;
									if(that.tips_group.cuoti_total_num==0){
										that.winLoc.whowin_title =="0/0";
										that.fiveStone.changehistory("H8");
										that.fiveStone.resetchessBoardtips();
										return;
									}
								}
								that.winLoc.whowin_title = (that.tips_group.cuoti_num + 1) + "/" + that.tips_group.cuoti_total_num;
								that.fiveStone.changehistory(that.mistakes_collection_list[that.tips_group.cuoti_num].total_line);
								uni.setStorage({
									key: 'mistakes_collection',
									data: that.mistakes_collection_newlist,
								})
								that.fiveStone.resetchessBoardtips();
							}, 1000)
						}
						return;
					}
					that.fiveStone.step(loc.x, loc.y);
					// console.log(this.fiveStone.chessBoard);
					// var treearray =this.fiveStone.computerAItreesearch(this.fiveStone.stone,this.fiveStone.blackWin,this.fiveStone.whiteWin,this.fiveStone.chessBoard);
					// console.log(treearray);



					if (this.tips_group.get_tips_flag && gettips_flag) {
						that.get_tips();
						that.$forceUpdate();
					}

					//人机模式
					//console.log(this.fiveStone.stone)
					if (this.tips_group.mulu_flag == "bdms_rjmspt" && this.fiveStone.stone == 1) {
						//this.fiveStone.preventStep();
						var info = this.fiveStone.computerAI(1);
						that.fiveStone.step(parseInt(info['x']), parseInt(info['y']));
						//this.fiveStone.allowStep();
						//console.log("computerai",this.fiveStone.chessBoard[info['x']][info['y']].stoneType );

					}

					//this.get_tips();
					//this.$forceUpdate();
				}
			},
			/** * 重来*/
			restart: function() {
				this.fiveStone.restart();
				//this.refreshFiveStoneAndClearWinTip();
				this.winLoc.whowin = 0;
				this.winLoc.whowin_title = "";
				this.winLoc.start = null;
				this.winLoc.end = null;
				if (this.tips_group.double_undo_flag) {
					this.fiveStone.changehistory("H8");
				}
				if (this.tips_group.mulu_flag == 'dplx_hykj') {
					this.fiveStone.changehistory("H8H9I9");
				}
				if (this.tips_group.mulu_flag == 'dplx_pykj') {
					this.fiveStone.changehistory("H8I9I7");
				}


				if (this.tips_group.get_tips_flag) {
					this.get_tips();
				}
				this.$forceUpdate();
			},
			/**悔棋 */
			undo: function() {
				this.fiveStone.undo();
				if (this.tips_group.double_undo_flag) {
					this.fiveStone.undo();
				}

				this.winLoc.whowin = 0;
				this.winLoc.whowin_title = "";
				this.winLoc.start = null;
				this.winLoc.end = null;
				if (this.tips_group.get_tips_flag) {
					this.get_tips();
				}
				this.$forceUpdate();
			},


			get_tips: async function() {
				var that = this;
				if (that.userInfo.vip_flag == false) {
					that.fiveStone.resetchessBoardtips();
					if (that.userInfo.tips_last == 1) {

						uni.showModal({
							title: '说明',
							content: '今日提示步数已经用完,请前往购买vip获得全部功能',
							showCancel: false,
						})
					}
					if (that.userInfo.tips_last < 1) {
						return;
					}
					// that.tips_group.tips_last -= 1;
					that.cuttipslast();
					var nowdate = new Date().getDate();
					var tips_last_time_str = that.userInfo.tips_last + "," + nowdate;
					uni.setStorage({
						key: 'tips_last_time',
						data: tips_last_time_str,
						success: function() {
							console.log('setdata_tips_last_time_success', tips_last_time_str);
						}
					});
				}
				if (that.tips_group.get_tips_flag == false || that.fiveStone.history.length > that.tips_group.steps_limit) {
					console.log("超过五步限制或者不能获得提示");
					that.fiveStone.resetchessBoardtips();
					return;
				}

				var total_line = "";
				var total_line_char = "";
				var lochistory = that.fiveStone.history;
				var step = 0;
				//console.log("history", lochistory);
				if (lochistory.length == 0) {
					total_line = "none"
				} else {
					for (var i = 0; i < lochistory.length; i++) {
						total_line += that.upchangetoabc(lochistory[i].x);
						total_line += (15 - lochistory[i].y).toString();
						total_line_char += that.upchangetoabc(lochistory[i].x) + "-";
						total_line_char += (15 - lochistory[i].y).toString() + "-";
						step += 1;
					}
				}
				console.log(total_line);
				that.fiveStone.resetchessBoardtips();
				if (tipsdic[total_line] == null) {
					var post_data = {
						'form': 'get_wzq_data',
						'table_name': that.tips_group.table_name,
						'total_line': total_line,
						'total_line_char': total_line_char,
						'step': (step + 1),
					};
					await that.download_from_server(post_data, 'wuziqitips', 'data_flag');
					setTimeout(() => this.deal_with_data(), 600);


				} else {
					var tipsdiclist = tipsdic[total_line][0];
					//console.log("tipsdiclist", tipsdiclist);
					for (var i = 0; i < tipsdiclist.length; i++) {
						var xloc = that.downchangetoabc(tipsdiclist[i].substring(0, 1));
						var yloc = 15 - parseInt(tipsdiclist[i].substring(1));
						//console.log(xloc, yloc);
						if (that.fiveStone.stone == 1) {
							that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 1;
							that.fiveStone.chessBoardtips[xloc][yloc].num = tipsdic[total_line][1][i];
						}
						if (that.fiveStone.stone == 2) {
							that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 2;
							that.fiveStone.chessBoardtips[xloc][yloc].num = tipsdic[total_line][1][i];
						}
					}
				}

				return 200;
			},
			tap_jieshao: function() {
				uni.navigateTo({
					url: "../jieshao/jieshao",

				})
			},
			gotozml: function() {
				uni.reLaunch({
					url: "../index2/index2",
				})

			},
			deal_with_data: function() {
				var that = this
				var total_line = "";
				var insertarray1 = [];
				var insertarray2 = [];
				var lochistory = this.fiveStone.history;
				if (lochistory.length > 0) {
					for (var i = 0; i < lochistory.length; i++) {
						total_line += this.upchangetoabc(lochistory[i].x);
						total_line += (15 - lochistory[i].y).toString();
					}
				}
				if (that.wuziqitips != null && that.data_flag == 200) {


					//tipsdic[total_line]=new Array();
					for (var k = 0; k < that.wuziqitips.length; k++) {
						//tipsdic[total_line][0][k]=that.wuziqitips[k]['step'];
						//tipsdic[total_line][1][k]=that.wuziqitips[k]['num'];
						if (that.wuziqitips[k]['step'].length > 1 && that.wuziqitips[k]['num'] > 0) {
							insertarray1.push(that.wuziqitips[k]['step'])
							insertarray2.push(that.wuziqitips[k]['num'])
						}



						var xloc = that.downchangetoabc(that.wuziqitips[k]['step'].substring(0, 1));
						var yloc = 15 - parseInt(that.wuziqitips[k]['step'].substring(1));

						if (that.fiveStone.stone == 1 && xloc && yloc) {
							that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 1;
							that.fiveStone.chessBoardtips[xloc][yloc].num = that.wuziqitips[k]['num'];
							if (that.wuziqitips[k]['change_line'].length > 4) {
								that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 3;
							}
						}
						if (that.fiveStone.stone == 2 && xloc && yloc) {
							that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 2;
							that.fiveStone.chessBoardtips[xloc][yloc].num = that.wuziqitips[k]['num'];
							if (that.wuziqitips[k]['change_line'].length > 4) {
								that.fiveStone.chessBoardtips[xloc][yloc].stoneType = 3;
							}
						}
					}
					// tipsdic[total_line] = [insertarray1, insertarray2];



				} else if (that.data_flag == 300) {
					that.fiveStone.changehistory(that.wuziqitips[0]['change_line']);
					setTimeout(function() {
						that.get_tips();
						console.log('更改历史，重新获取');
					}, 400)
				}
				if (insertarray1[0] != null) {
					console.log('insertarray1', insertarray1)
					tipsdic[total_line] = [insertarray1, insertarray2];
				}


			},
			qiuzhu: async function() {

				//var info=this.fiveStone.computerAI(this.fiveStone.stone);
				//this.fiveStone.step(parseInt(info['x']), parseInt(info['y']));

				//算n步
				var chessBoardcopy = []
				for (var i = 0; i < 15; i++) {
					chessBoardcopy[i] = [];
					for (var j = 0; j < 15; j++) {
						chessBoardcopy[i][j] = 0;
						if (this.fiveStone.chessBoard[i][j].stoneType == 1) {
							chessBoardcopy[i][j] = 1;
						}
						if (this.fiveStone.chessBoard[i][j].stoneType == 2) {
							chessBoardcopy[i][j] = 2;
						}
					}
				}
				uni.showLoading({
					title: '计算中',
					mask: 'true',
				})
				var deepthinksteps_answer = this.fiveStone.deepthinkshuansha(this.fiveStone.stone, this.fiveStone.blackWin, this.fiveStone
					.whiteWin, chessBoardcopy);
				uni.hideLoading()

				if (deepthinksteps_answer.length > 0) {
					var total_line = "";
					var insertarray1 = [];
					var insertarray2 = [];
					var lochistory = this.fiveStone.history;
					if (lochistory.length > 0) {
						for (var i = 0; i < lochistory.length; i++) {
							total_line += this.upchangetoabc(lochistory[i].x);
							total_line += (15 - lochistory[i].y).toString();
						}
					}
					console.log(total_line);
					for (var i = 0; i < deepthinksteps_answer.length; i++) {
						var str1 = deepthinksteps_answer[i].split("|")
						var str2 = str1[1].split("-")
						var str3 = str2[0].split(",")
						var x = this.upchangetoabc(str3[0]);
						var y = 15 - parseInt(str3[1]);
						var word = "" + x + y;
						insertarray1.push(word)
						insertarray2.push(1234)
						// 'H8I9I7L12':[['G9',],[1,]],
						console.log(word);


					}
					tipsdic[total_line] = [insertarray1, insertarray2];
					this.get_tips()
				} else {
					uni.showToast({
						icon: 'none',
						title: '未求出解'
					})

				}











				// console.log(chessBoardcopy);
				//console.log(treearray);
				// console.log(this.fiveStone.blackWin);
				// console.log(this.fiveStone.whiteWin);



				//算1步	 
				//var treearray =this.fiveStone.computerAItreesearch(this.fiveStone.stone,this.fiveStone.blackWin,this.fiveStone.whiteWin,chessBoardcopy);
				//console.log(treearray);
				// console.log(treearray.length);
			}

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
		background: rgba(30, 144, 255, .8);
		margin: 60upx 0upx;
		border-radius: 30upx;
		padding: 30upx 90upx;
		border: 1upx solid black;
		font-size: 35upx;
		color: white;
	}


	.uer-name {
		font-size: 30upx;
	}

	.colorful {
		background: radial-gradient(#EA0000, #FFD306);
		/* transform:scale(1.05); */
	}

	.minbutton_style {
		width: 180upx;
		height: 80upx;
		z-index: 10;
	}

	.minbutton_style:active {
		width: 180upx;
		height: 80upx;
		z-index: 10;
		opacity: 0.5;
	}


	page {
		background-color: #f3f3f3;
	}
</style>
