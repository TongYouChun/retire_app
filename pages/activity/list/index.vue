<!-- 新资讯 -->
<template>
	<view class="new_information">
		<view class="search_frame">
			<view class="search_input">
				<view class="input_Icon"></view>
				<input type="text" value="" placeholder="输入搜索资讯内容" />
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		<view class="new_information_ul">
			<view class="activity_li" v-for="(item,index) in dataList" :key='index' @click="detailsClick(index)">
				<view class="Imgs">
					<image :src="item.Imgs" mode=""></image>
				</view>
				<!-- 文字 -->
				<view class="activity_text">
					<view class="activity_Name">
						{{item.name}}
					</view>
					<view class="activity_within">
						{{item.text}}
					</view>
					<view class="activity_date">
						{{item.date}}
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
				dataList:[
					{
						Imgs:'../../../static/CpYIV2A1.jpg',
						name:'纪念馆里的党史',
						text:'中共一大会址纪念馆中珍藏着一枚警笛和一支口哨。看似很简单,却是一场波澜壮阔的历史的见证者。',
						date: '2021-08-7'
					},{
						Imgs:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.ewenku.net%2F8e902611c10a7a093d6dc095070ff9c0%2F3.png&refer=http%3A%2F%2Fimg.ewenku.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631438261&t=7bd59bedae6ddc11f7846d644a1c4064',
						name:'党史大事记',
						text:'中共一大会址纪念馆',
						date: '2021-08-7'
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
		// 新资讯
	.new_information{
		display: flex;
		flex-direction: column;
		// 搜索框
		.search_frame {
			height: 100upx;
			display: flex;
			justify-content: space-between;
			padding: 0 5%;
			align-items: center;
			background-color: #FFFFFF;
			border-bottom: 3upx solid #F1F1F1;
			// 地址
			.search_address {
				display: flex;
				// width: 120upx;
				// height: 60upx;
				// border: 1upx solid #F1F1F1;
				.address{
					// flex: 1;
					font-size: 28upx;
					color: #666;
				}
				.address_Icon{
					margin-left: 10upx;
					width: 30upx;
					height: 36upx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			// 搜索框
			.search_input{
				width: 70%;
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
				input{
					flex: 1;
					font-size: 28upx;
					margin-left: 15upx;
					height: 65upx;
				}
			}
			// 搜索按钮
			.search_Button{
				background-color: #2789D8;
				font-size: 28upx;
				color: #fff;
				width: 120upx;
				height: 65upx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 30upx;
			}
			.search_Button:active{
				background-color: #1B7BC8;
			}
		}
		
		
		.new_information_ul{
			margin-top: 10upx;
			display: flex;
			flex-direction: column;
			.activity_li{
				display: flex;
				align-items: center;
				height: 200upx;
				border-bottom: 1upx solid #F1F1F1;
				.Imgs{
					margin-left: 24upx;
					height: 160upx;
					width: 160upx;
					image{
						height: 160upx;
						width: 160upx;
						border-radius: 14upx;
					}
				}
				.activity_text{
					margin: 0 34upx 0 24upx;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					overflow: hidden;
					min-height: 140upx;
					.activity_Name{
						font-size: 28upx;
						font-weight: 700;
						color: #333;
					}
					.activity_within{
						width: 100%;
						margin-top: 10upx;
						font-size: 26upx;
						white-space:nowrap;
						overflow: hidden;
						text-overflow:ellipsis;
						color: #999;
					}
					.activity_date{
						font-size: 24upx;
						color: #999999;
					}
				}
			}
						
		}
		
	}
</style>
