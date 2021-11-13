<!-- 我的 -->
<template>
	<view class="My">
		<view class="My_user">
			<view class="my_Imgs">
				<image src="../../static/Icon/icon_1g4cljd522x/wode2.png" mode=""></image>
			</view>
			<view class="my_text">
				<view class="name">
					张三
				</view>
				<view class="text_name">
					某某地区书记
				</view>
			</view>
			<view class="my_QR_code">
				
			</view>
			<view class="my_arrow">
				
			</view>
		</view>
		<!-- 内容 -->
		<view class="My_container">
			<view class="My_classification">
				<view class="my_title">
					<text>我的服务</text>
				</view>
				<view class="classification_ul">
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/renzheng.png" mode=""></image>
						</view>
						<view class="classification_text">
							退役军人认证
						</view>
					</view>
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/jiangbei.png" mode=""></image>
						</view>
						<view class="classification_text">
							收藏店铺
						</view>
					</view>
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/youhui.png" mode=""></image>
						</view>
						<view class="classification_text">
							我的领券
						</view>
					</view>
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/tousu.png" mode=""></image>
						</view>
						<view class="classification_text">
							诉求通道
						</view>
					</view>
				</view>
			</view>
			<view class="My_classification">
				<view class="my_title">
					<text>商家服务</text>
				</view>
				<view class="classification_ul">
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/publish.png" mode=""></image>
						</view>
						<view class="classification_text">
							发布店铺
						</view>
					</view>
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/dianpu2.png" mode=""></image>
						</view>
						<view class="classification_text">
							我的店铺
						</view>
					</view>
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/dianquan.png" mode=""></image>
						</view>
						<view class="classification_text">
							发布优惠券
						</view>
					</view>
					<view class="classification_li">
						<view class="Imgs">
							<image src="../../static/Icon/icon_pdlm/youhui.png" mode=""></image>
						</view>
						<view class="classification_text">
							我的优惠卷
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.my_title{
		margin: 0 20upx;
		height: 60upx;
		display: flex;
		align-items: center;
		font-weight: 700;
		border-bottom: 1upx solid #e1e1e1;
		text{
			padding-left: 26upx;
			border-left: 8upx solid #2789D8;
			height: 32upx;
			line-height: 32upx;
			font-size: 32upx;
			font-weight: 600;
			color: #444;
		}
	}
	.My{
		min-height: 100%;
		background-color: #F1F1F1;
		.My_user{
			height: 200upx;
			background-color: #2789D8;
			display: flex;
			align-items: center;
			.my_Imgs{
				margin-left: 20upx;
				height: 120upx;
				width: 120upx;
				border-radius: 50%;
				overflow: hidden;
				image{
					height: 120upx;
					width: 120upx;
				}
			}
			.my_text{
				margin-left: 20upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 80upx;
				padding: 20upx 0;
				.name{
					font-size: 28upx;
					color: #FFFFFF;
				}
				.text_name{
					font-size: 24upx;
					color: #FFFFFF;
				}
			}
			.my_QR_code{
				margin-left: auto;
				margin-right: 40upx;
				// margin: 0 20upx;
				width: 80upx;
				height: 80upx;
				background: url(../../static/Icon/erweima.png);
				background-size: 100% 100%;
			}
		}
		.My_container{
			margin-top: 20upx;
			.My_classification{
				overflow: hidden;
				margin-top: 20upx;
				background-color: #FFFFFF;
				.classification_ul{
					margin:  20upx 0;
					display: flex;
					flex-wrap: wrap;
					.classification_li{
						width: 25%;
						display: flex;
						flex-direction: column;
						align-items: center;
						.Imgs{
							height: 80upx;
							width: 80upx;
							image{
								height: 80upx;
								width: 80upx;
							}
						}
						.classification_text{
							margin:10upx 0;
							font-size: 26upx;
							color: #666;
						}
						
					}
				}
			}
		}
	}
</style>
