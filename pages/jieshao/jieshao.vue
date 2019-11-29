<template>
	<view style="width: 750upx; height: 100%;background-color: #EFEFEF;margin: 25upx;border-radius: 29upx;	box-shadow: 6px 6px 6px rgba(0, 0, 0, .2);">
		<scroll-view scroll-y class="bac_view" :style="'height:'+height+'px'">


			<view class="" style="width: 100%; font-size: 40upx;justify-content: center;padding: 5upx 10upx;color:#1482D1;margin: 10upx;">
				关于五子棋
			</view>
			<view class="text_item">
				现代竞技五子棋一共有26个开局，以蒲月花月为首。本打谱软件旨在帮助大家以最快的速度背熟其中一种,大杀四方。
			</view>
			<image src="../../static/jieshao/kj1.jpg" mode="aspectFit"></image>
			<image src="../../static/jieshao/kj2.jpg" mode="aspectFit"></image>

			<view class="" style="width: 100%; font-size: 33upx;justify-content: center;padding: 5upx 10upx;color:black;margin: 10upx;">
				提示说明
			</view>

			<image src="../../static/jieshao/tips1.png" style="width: 300upx; height: 300upx;margin-left: 40upx;"></image>
			<view class="text_item">
				蓝色标注是指棋谱中存在的可下白子范围，大一点的蓝色标注表示后续棋谱比较多，如果执白子应优先下大蓝点（可以撑的更久）
				小一点的蓝色标注表示后续棋谱比较少，可以优先背熟。
			</view>

			<image src="../../static/jieshao/tips2.png" style="width: 300upx; height: 300upx;margin-left: 40upx;"></image>
			<view class="text_item">
				黑色标注是指棋谱中存在的可下黑子范围，大一点的红色色标注表示后续棋谱比较多，击杀和背诵难度较大。
				小一点的红色标注表示后续棋谱比较少，如果执黑子应优先小红点，可以更快获胜。
			</view>

			<image src="../../static/jieshao/tips4.png" style="width: 300upx; height: 300upx;margin-left: 40upx;"></image>
			<view class="text_item">
				淡蓝色标志是粘连点，同一个棋盘布局会有不同的走棋顺序，棋谱只会保留其中一种走琪顺序，粘连点就是不同走棋顺序汇聚的关键点，
				点击粘连点会改变之前的走起顺序，悔棋也会随之改变。粘连点本身也是白子的一种落子范围。

			</view>

			<image src="../../static/jieshao/tips3.png" style="width: 300upx; height: 300upx;margin-left: 40upx;"></image>
			<view class="text_item">
				淡黄渐变色标注是在打谱练习模式下才有的点，点击求助按键会自动计算10层深度 5000步以内，黑棋的vcf 和vct赢法。
				如果存在必胜走法就会用淡黄渐变色标注。每次求助都会从头算起并不能拓展广度和深度，如果可能性较多会比较耗时。
				（VCT是连续活三，最后胜，VCF是连续冲四，最后胜）
			</view>

	        <image src="../../static/jieshao/tips5.png" style="width: 300upx; height: 300upx;margin-left: 40upx;"></image>
			<view class="text_item">
				在联机模式下，为防止对战时的误触，点击一次会出现黑色圆圈提示，再点击一次才会确认。
			</view>

             <view class="" style="width: 100%; font-size: 33upx;justify-content: center;padding: 5upx 0upx;color:black;margin: 10upx;color: #0000FF;">
			    打谱测试模式说明
			</view>
            <view class="text_item">
				 打谱测试模式中，轮到白棋会有蓝色提示，轮到黑棋下则不会有红色提示，如果下棋点非棋谱点就会提示出错并记入我的错题。
				 在我的错题中回答正确则会剔除记录。
			</view>


			<view class="text_item">
				更多功能敬请期待!
			</view>
			<view class="text_item">
				目前在做功能有，错题记录功能，随机匹配功能和五子棋机器人无敌版。
			</view>
			<view class="text_item">
				更多需求欢迎在留言板上提出建议
			</view>


		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
			};
		},
		onLoad() {
			this.height = uni.getSystemInfoSync().windowHeight - 20 * (uni.getSystemInfoSync().windowWidth / 750);
		}


	}
</script>

<style>
	.text_item {
		width: 600upx;
		font-size: 25upx;
		padding: 20upx 20upx;
		color: #222222;
	}

	.bac_view {
		width: 100%;
		height: 900upx;
		padding: 5upx 0upx 10upx 30upx;
		background: white;
		flex-flow: column;
	}
</style>
