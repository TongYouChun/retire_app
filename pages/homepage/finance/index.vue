<!-- 金融 -->
<template >
	<view class="finance_homepage">
		<view class="result_frame">
			<view class="search_input">
				<view class="input_Icon"></view>
				<input class="input" type="text" value="" placeholder="请输入银行名称"/>
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		
		<view class="service_container">
			<view class="result_ul">
				<view class="result_li"  @click="addressClick(index)">
					<view class="result_Imgs">
						<image src="https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-his.cdn.bcebos.com%2Fa5c27d1ed21b0ef4e7696658d0c451da81cb3e37.jpg" mode=""></image>
					</view>
					<view class="result_text">
						<view class="result_name">
							中国建设银行(滁州湖心路支行)
						</view>
						<view class="recommend_food">
							滁州市湖心路167号
						</view>
						<view class="recommend_Price">
							电话: (0550)3067683
						</view>
					</view>
				</view>
				<view class="result_li"  @click="addressClick(index)">
					<view class="result_Imgs">
						<image src="https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-his.cdn.bcebos.com%2F500fd9f9d72a605998925c912334349b023bbabf.jpg" mode=""></image>
					</view>
					<view class="result_text">
						<view class="result_name">
							中国农业银行(滁州市南谯支行)
						</view>
						<view class="recommend_food">
							滁州市琅琊区琅琊西路179号
						</view>
						<view class="recommend_Price">
							电话: (0550)3024245
						</view>
					</view>
				</view>
				<view class="result_li"  @click="addressClick(index)">
					<view class="result_Imgs">
						<image src="https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-his.cdn.bcebos.com%2F30adcbef76094b366dbe8992aecc7cd98d109da5.jpg" mode=""></image>
					</view>
					<view class="result_text">
						<view class="result_name">
							中国工商银行(清流分理处)
						</view>
						<view class="recommend_food">
							滁州市琅琊区清流中路大成国际领域北侧约50米
						</view>
						<view class="recommend_Price">
							电话: (0550)3024245
						</view>
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
			addressClick(index){
				uni.navigateTo({
					url: '/pages/homepage/finance/details/index',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.finance_homepage{
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background-color: #F1F1F1;
		.result_frame{
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
		.service_container{
			margin-top: 20upx;
			flex: 1;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;
			.result_ul{
				margin: 0 24upx;
				margin-top: 10upx;
				display: flex;
				flex-direction: column;
				.result_li{
					height: 200upx;
					border-bottom: 1upx solid #e1e1e1;
					position: 0 10upx;
					display: flex;
					align-items: center;
					.result_Imgs{
						margin-left: 20upx;
						height: 140upx;
						width: 160upx;
						border: 1upx solid #eee;
						image{
							height: 140upx;
							width: 160upx;
							border-radius: 8upx;
						}
					}
					.result_text{
						margin-left: 24upx;
						display: flex;
						flex-direction: column;
						min-height: 120upx;
						justify-content: space-around;
						.result_name{
							font-size: 32upx;
							color: #333;
						}
						.recommend_food{
							font-size: 26upx;
							color: #999;
						}
						.recommend_Price{
							font-size: 26upx;
							color: #aaa;
							text{
								text-decoration:line-through
							}
						}
						.recommend_fracture{
							font-size: 28upx;
							font-weight: 700;
							color: #f00;
						}
					}
				}
			}
		}
	}
</style>
