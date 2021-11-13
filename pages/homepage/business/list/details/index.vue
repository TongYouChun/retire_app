<!-- 详情 -->
<template>
	<view class="details">
		<view class="details_Imgs">
			<image src="https://img1.baidu.com/it/u=3888996048,1948636523&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
		</view>
		<view class="details_content">
			<view class="details_Name">
				<view class="name">
					五一饭店(鲜鱼巷口店)
				</view>
				<view class="address">
					滁州市琅琊区南谯北路振业小区东侧
				</view>
				<view class="Telephone">
					电话号: (0550)3115151
				</view>
			</view>
			<view class="details_information">
				<view class="name">
					商家详情
				</view>
				<view class="date">
					<text>营业时间:</text> 9:00- 18:00
				</view>
				<view class="introduce">
					<text>介绍: </text>中餐馆 西餐厅 日本 菜韩国料理 东南亚菜 快餐甜点 冷饮火锅
				</view>
			</view>
			<view class="details_coupon">
				<view class="label">
					商家优惠券
				</view>
				<view class="coupon">
					<view class="Imgs">
						<image src="https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Fpoi-pic.cdn.bcebos.com%2F010ae38ffa442809442133c0e1895078.jpg" mode=""></image>
					</view>
					<view class="name">
						<text>五一饭店(鲜鱼巷口店)</text>
						<text>5.0折</text>
						<text>折扣券</text>
					</view>
					<view class="collar">
						领取
					</view>
				</view>
				<view class="activity">
					<view class="start li">
						<text>开始日期:</text> 2021-08-02
					</view>
					<view class="end li">
						<text>结束日期:</text> 2021-11-02
					</view>
					<view class="rule li">
						<text>使用规则:</text> 一个月只能领一次
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.details{
		display: flex;
		flex-direction: column;
		.details_Imgs{
			width: 100%;
			height: 400upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.details_content{
			flex: 1;
			display: flex;
			flex-direction: column;
			.details_Name{
				margin-top: 20upx;
				padding-left: 30upx;
				padding-bottom: 40upx;
				border-bottom: 18upx solid #F1F1F1;
				.name{
					font-size: 32upx;
					font-weight: 700;
					color: #333;
				}
				.address{
					margin-top: 10upx;
					font-size: 26upx;
					color: #999;
				}
				.Telephone{
					margin-top: 10upx;
					font-size: 26upx;
					color: #999;
				}
			}
			.details_information{
				display: flex;
				flex-direction: column;
				padding:24upx;
				border-bottom: 15upx solid #F1F1F1;
				.name{
					font-size: 32upx;
					font-weight: 700;
					color: #333;
				}
				.date{
					margin-top: 20upx;
					font-size: 26upx;
					color: #999;
					text{
						color: #333;
						font-size: 28upx;
						font-weight: 700;
						margin-right: 10upx;
					}
				}
				.introduce{
					margin-top: 10upx;
					font-size: 26upx;
					color: #999;
					text{
						color: #333;
						font-size: 28upx;
						font-weight: 700;
						margin-right: 10upx;
					}
				}
			}
			.details_coupon{
				display: flex;
				flex-direction: column;
				padding:24upx;
				.label{
					font-size: 32upx;
					font-weight: 700;
					margin-bottom: 24upx;
					color: #333;
				}
				.coupon{
					display: flex;
					align-items: center;
					height: 200upx;
					border: 1upx solid #e1e1e1;
					box-shadow: 0upx 10upx 10upx  #aaa;
					border-radius: 20upx;
					position: relative;
					.Imgs{
						margin-left: 20upx;
						height: 150upx;
						width: 180upx;
						image{
							height: 150upx;
							width: 180upx;
							border-radius: 5upx;
						}
					}
					.name{
						margin-left: 24upx;
						display: flex;
						flex-direction: column;
						text:nth-child(1){
							font-size: 26upx;
							color: #333;
							font-weight: 700;
						}
						text:nth-child(2){
							margin-top: 30upx;
							font-size: 26upx;
							color: #666;
						}
						text:nth-child(3){
							margin-top: 10upx;
							font-size: 26upx;
							color: #f00;
							padding: 10upx;
							// background-color: #F1F1F1;
						}
					}
					.collar{
						position: absolute;
						bottom: 30upx;
						right: 30upx;
						width: 140upx;
						height: 57upx;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #FFFFFF;
						font-size: 28upx;
						background-color: #2A89D5;
						border-radius: 28upx;
					}
					.collar:active{
						background-color: #1D72B6;
					}
				}
				.activity{
					margin-top: 25upx;
					margin-left: 18upx;
					display: flex;
					flex-direction: column;
					.li{
						margin-top: 10upx;
						display: flex;
						align-items: center;
						font-size: 26upx;
						color: #999;
						text{
							margin-right: 10upx;
							font-weight: 700;
							color: #333;
						}
					}
				}
			}
		}
	}
</style>
