<!-- 创业 -->
<template >
	<view class="establish_homepage">
		<view class="result_frame">
			<view class="search_input">
				<view class="input_Icon"></view>
				<input class="input" type="text" value="" placeholder="请输入创业内容"/>
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		
		<view class="service_container">
			<view class="result_ul">
				<view class="policy_menu">
					<view class="policy_li" :class="[item.judge ? 'policy_te' : '']" v-for="(item,index) in policyMenu" :key="index" @click="clickMenu(index)">
						{{item.name}}
						<view class="policy_Icon"></view>
					</view>
					
				</view>
				<view class="result_li" v-for="(item,index) in 1" :key="index" @click="addressClick(index)">
					<view class="result_Imgs">
						<image src="https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-his.cdn.bcebos.com%2F0eb30f2442a7d93326612386a44bd11372f0017e.jpg" mode=""></image>
					</view>
					<view class="result_text">
						<view class="result_name">
							滁州科技创业中心
						</view>
						<view class="recommend_food">
							滁州市南谯区琅琊街道花园西路82号
						</view>
						<!-- <view class="recommend_Price">
							电话: (0550)3067683
						</view> -->
						<!-- <view class="recommend_fracture">
							现价 ： ￥28元
						</view> -->
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
				policyMenu: [
					{
						judge: true,
						name: '创业孵化基地'
					},{
						judge: false,
						name: '创业政策'
					}
				]
				
			}
		},
		methods:{
			// 菜单
			clickMenu(index) {
				this.policyMenu.map(ser =>{
					ser.judge = false
				})
				this.policyMenu[index].judge = true;
			},
			addressClick(index){
				uni.navigateTo({
					url: '/pages/homepage/establish/details/index',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.establish_homepage{
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
			margin-top: 15upx;
			flex: 1;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;
			.policy_menu{
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 90upx;
				background-color: #FFFFFF;
				border-bottom: 3upx solid #F1F1F1;
				.policy_li{
					font-size: 28upx;
					color: #666;
					height: 90upx;
					line-height: 90upx;
					position: relative;
					.policy_Icon{
						position: absolute;
						bottom: 0;
						left: 0;
						height: 6upx;
						width: 100%;
					}
				}
				.policy_te{
					font-weight: 700;
					color: #4199E0;
					.policy_Icon{
						background-color: #4199E0;
					}
				}
			}
			
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
