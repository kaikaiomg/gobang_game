<template>




	<form @submit="formSubmit" @reset="formReset">
		<view class="white_bac">

			<view class="linestyle" style="">

				<view class="linestyle_left"> 类&nbsp;&nbsp;&nbsp;型:</view>
				<view class="linestyle_right">
					<radio-group class="" name="radio" @change="radioChange">
						<label style="font-size: 24upx;color: EFEFEF;">
							<radio value="new_question" checked="true" />提问&nbsp;&nbsp;</label>
						<label style="font-size: 24upx;color: EFEFEF;">
							<radio value="new_suggestion" checked="true" />建议&nbsp;&nbsp;</label>
						<label style="font-size: 24upx;color: EFEFEF;">
							<radio value="new_conclusion" />总结</label>
					</radio-group>
				</view>
			</view>



			<view v-for="(item1,index1) in new_question_list" :key="index1" style="flex-flow: column;">
				<view class="linestyle" style="">
					<view class="linestyle_left"> {{question_or_conclusion_zhongwen}}&nbsp;{{item1.ziduan_id}}:</view>
					<view class="linestyle_right">
						<view class="jianhao icontext" @click="shanchu_ziduan(index1)">&#xe68f;</view>
					</view>
				</view>
				
				<textarea class="text_view_bigtext "  maxlength="500" @input="bigtext_input" :id="index1" :name="item1.ziduan_id" :placeholder="placeholder_world" /></textarea>
				


			</view>
		</view>
		<view class="jiahao icontext" @click="add_ziduan">
			&#xe629;
		</view>

		<view class="" style="flex-flow: column;position: fixed;bottom: 50upx;">
			<view class="biaoqing_view1 ">
				<image class="image_view" :src="image_select=='1' ? '../../static/biaoqing/z1.png':'../../static/biaoqing/1.png' " @click="tap_bqImage('1')"></image>
				<image class="image_view" :src="image_select=='2' ? '../../static/biaoqing/z2.png':'../../static/biaoqing/2.png' " @click="tap_bqImage('2')"></image>
				<image class="image_view" :src="image_select=='3' ? '../../static/biaoqing/z3.png':'../../static/biaoqing/3.png' " @click="tap_bqImage('3')"></image>
				<image class="image_view" :src="image_select=='14'  ? '../../static/biaoqing/z14.png':'../../static/biaoqing/14.png' " @click="tap_bqImage('14')"></image>
				<image class="image_view" :src="image_select=='15'  ? '../../static/biaoqing/z15.png':'../../static/biaoqing/15.png' " @click="tap_bqImage('15')"></image>
				<image class="image_view" :src="image_select=='16'  ? '../../static/biaoqing/z16.png':'../../static/biaoqing/16.png' " @click="tap_bqImage('16')"></image>

			</view>

			<button formType="submit" class="tijiao_button_style">
				提交并保存
			</button>
		</view>

	</form>



</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() { 
			return {
				card_id: null,
				luyouData_ziduan: null,
				new_question_list: [{
					'ziduan_id': 1,
					'ziduan_zhongwen': "",
				}],
				ziduan_num: 2,
				new_question_num: 1,
				question_or_conclusion_flag: 'new_question',
				question_or_conclusion_zhongwen: "问题",
				placeholder_world: "请输入问题描述..",
				image_select: 0,
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		onLoad: async function(option1) {

			this.card_id = 999;
			console.log("item_detail：card_id:" + option1.card_id)
             //await this.get_storage_data("app_hot_list_ziduan","luyouData_ziduan")

		},


		methods: {


			radioChange: function(e) {
				console.log('radio发生change事件，携带value值为：' + e.detail.value)
				this.question_or_conclusion_flag = e.detail.value;
				if (this.question_or_conclusion_flag == 'new_question') {
					this.question_or_conclusion_zhongwen = "问题";
					this.placeholder_world = "请输入问题描述.."
				}
				if (this.question_or_conclusion_flag == 'new_conclusion') {
					this.question_or_conclusion_zhongwen = "总结";
					this.placeholder_world = "请输入总结的内容.."
				}
				if (this.question_or_conclusion_flag == 'new_suggestion') {
					this.question_or_conclusion_zhongwen = "建议";
					this.placeholder_world = "请输入建议.."
				}
				
				
			},

			tap_bqImage(imagenum) {
				var that = this;
				this.image_select = imagenum;
			},
			bigtext_input(evt) {
				this.new_question_list[evt.currentTarget.id]['ziduan_zhongwen'] = evt.detail.value;
				// console.log(this.new_question_list)
			},

			add_ziduan() {
				if (this.new_question_num < 2) {
					this.new_question_list.push({
						'ziduan_id': this.ziduan_num,
						'ziduan_zhongwen': "",
					})
					this.ziduan_num++;
					this.new_question_num++;
				}
				// console.log(this.new_question_list)
				this.$forceUpdate();
			},

			shanchu_ziduan(index1) {

				this.new_question_list.splice(index1, 1);
				// this.ziduan_num--;
				this.new_question_num--;
				this.$forceUpdate();
			},



			formSubmit: function(e) {
				var that = this;
                var randnum = Math.floor(Math.random() * 90000) + 100000;
				var randnstr = (new Date().valueOf()) + String(randnum);

				for (let i = 0; i < that.new_question_list.length; i++) {

					if (that.new_question_list[i]['ziduan_zhongwen'] == "") {
						uni.showToast({
							title: "请输入内容后上传",
							icon: "none"
						})
						return 0;
					}

					if (i == (that.new_question_list.length - 1)) {

						uni.showLoading({
							title: '上传中',
						})
						setTimeout(function() {
							uni.hideLoading();
							uni.navigateBack({})
						}, 1000);
						for (let i = 0; i < that.new_question_list.length; i++) {
							// that.upload_modify(that.new_question_list[i], that.question_or_conclusion_flag)
							that.upload_to_server({
								'form': 'modify_or_build_item',
								'userid': that.userInfo.userid,
								'nickName': that.userInfo.nickName,
								'phonenum': that.userInfo.phonenum,
								'avatarUrl': that.userInfo.avatarUrl,
								'openid': that.userInfo.openid,
								'card_id': that.card_id,
								'ziduan_id': that.new_question_list[i].ziduan_id,
								'ziduan_zhongwen': that.new_question_list[i].ziduan_zhongwen,
								'modify_or_new_flag':  that.question_or_conclusion_flag,
								'biaoqing_num': that.image_select,
								'shuijishu': randnstr,
							});
							
						}
					}


				}

			},

			

		}
	}
</script>

<style>











	.biaoqing_view1 {
		flex-flow: row;
		width: 80%;
		height: 100upx;
		margin: 0 auto;
		justify-content: space-between;


	}

	.image_view {

		height: 74upx;
		width: 74upx;
	}
	
	.white_bac {
		width: 710upx;
		margin: 20upx 16upx 20upx 20upx;
		padding-bottom: 20upx;
		border-radius: 15upx;
		flex-flow: column nowrap;
		background-color: white;
	}
	
	
	
	.linestyle {
		width: 650upx;
		min-height: 80upx;
		/* line-height: 80upx; */
		flex-flow: row;
		align-items: center;
		font-size: 30upx;
		overflow: hidden;
		border-bottom: 1upx solid #EFEFEF;
		margin: 0upx 30upx 0upx 30upx;
	}
	
	.linestyle_left {
		font-weight: bold;
		justify-content: flex-start;
		align-items: center;
		flex-flow: row;
		width: 40%;
		/* background-color: #0000FF; */
	}
	
	.linestyle_right {
		font-weight: bold;
		color: gray;
		justify-content: flex-end;
		width: 60%;
		flex-flow: row;
		align-items: center;
		overflow: hidden;
		/* background-color: yellow; */
	}
	
	.linestyle_right_right {
		flex-flow: row;
		width: 90%;
		display: inline;
		justify-content: flex-end;
	}
	
	.text_view_bigtext {
		color: #555555;
		font-size: 22upx;
		font-weight: bold;
		min-height: 150upx;
		overflow: hidden;
		margin: 10upx 30upx;
		/* border-bottom: 10upx solid #EFEFEF; */
	}
	
	.jianhao {
		color: red;
		width: 33upx;
		font-size: 35upx;
	}
	
	.jiahao {
		margin: 10upx auto;
	
		width: 100%;
		color: black;
		border-radius: 40upx;
		width: 33upx;
		height: 33upx;
		font-size: 35upx;
		line-height: 33upx;
		align-content: center;
		justify-content: center;
	}
	
	.tijiao_button_style {
		font-size: 34upx;
		color: #F7F7F7;
		background-color: #007AFF;
		border-radius: 10upx;
		width: 670upx;
		margin: 10upx 40upx;
		height: 70upx;
		justify-content: center;
		align-items: center;
		line-height: 70upx;
	}
	
</style>
