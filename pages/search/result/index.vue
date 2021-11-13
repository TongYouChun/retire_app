<!-- 搜索结果 -->
<template>
	<view class="result">
		<view class="result_frame">
			<view class="search_input" @click="searchClick">
				<view class="input_Icon"></view>
				<view class="input">
					输入搜索内容
				</view>
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		<view style="height: 100upx;"></view>
		<!-- 内容 -->
		<view class="result_content">
			<view class="recommend_Ul">
				<view class="recommend_li" v-for="(item,index) in 1" :key="index" @click="detailsClick(index)">
					<view class="recommend_text">
						全省退役军人参与乡村振兴基层治理暨重点工作推进会召开
					</view>
					<view class="Imgs">
						<image src="../../../static/1im.jpg" mode=""></image>
						<image src="../../../static/2im.jpg" mode=""></image>
						<image src="../../../static/3im.jpg" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			// 进入详情
			detailsClick() {
				uni.navigateTo({
					url: '/pages/details/index',
				});
			},
			// 搜索
			searchClick() {
				uni.navigateTo({
					url: '/pages/search/index',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.result{
		display: flex;
		flex-direction: column;
		background-color: #F1F1F1;
		min-height: 100%;
		.result_frame{
			position: fixed;
			top: 0;
			left: 0;
			height: 100upx;
			display: flex;
			width: 84%;
			justify-content: space-between;
			padding: 0 8%;
			align-items: center;
			background-color: #FFFFFF;
			// 搜索框
			.search_input{
				width: 80%;
				display: flex;
				height: 70upx;
				background-color: #F1F1F1;
				border-radius: 35upx;
				align-items: center;
				padding: 0 25upx;
				.input_Icon{
					width: 40upx;
					height: 40upx;
					background-image: url(../../../static/Icon/sousuo.png);
					background-size: 100% 100%;
				}
				.input{
					flex: 1;
					font-size: 28upx;
					margin-left: 15upx;
					height: 65upx;
					line-height: 65upx;
					color: #999999;
				}
			}
			// 搜索按钮
			.search_Button{
				font-size: 28upx;
				color: #2789D8;
			}
		}
		.result_content{
			display: flex;
			flex-direction: column;
			.recommend_Ul {
				display: flex;
				flex-direction: column;
				// justify-content: center;
				background-color: #FFFFFF;
			
				.recommend_li {
					padding: 0 5%;
					padding-bottom: 30upx;
					border-bottom: 1upx solid #e1e1e1;
					display: flex;
					flex-direction: column;
					.recommend_text{
						margin-top: 15upx;
						display: flex;
						font-size: 32upx;
						color: #333;
					}
					.Imgs{
						margin-top: 20upx;
						display: flex;
						justify-content: space-between;
						image{
							width: 30%;
							height: 120upx;
						}
					}
				}
				.recommend_li:active{
					background-color: #F1F1F1;
				}
			}
		}
	}
</style>
