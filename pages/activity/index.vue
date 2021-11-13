<!-- 活动 -->
<template>
	<view class="activity">
		<view class="search_frame">
			<view class="search_input">
				<view class="input_Icon"></view>
				<input type="text" value="" placeholder="输入搜索活动内容" />
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		<view class="activity_top">
			<!-- 轮播图 开始-->
			<view class="Carousel">
				<swiper indicator-dots circular autoplay interval=3000 indicator-active-color="#2789D8"
					indicator-color="rgba(191, 191, 191, 1)">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item.imgs"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 菜单 -->
			<view class="menu">
				<view class="menu_li" :class="[item.judge ? 'menu_te' : '']" v-for="(item,index) in activityMenu" :key="index" @click="clickMenu(index)">
					{{item.name}}
					<view class="manu_Icon"></view>
				</view>
			</view>
		</view>
		<!-- 活动内容 -->
		<view class="activity_bottom">
			<view class="activity_ul">
				<view class="activity_label" @click="newsClisk">
					<text>
						最新资讯
					</text>
				</view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图
				swipers: [{
					imgs: '../../static/imgs1.png'
				}, {
					imgs: '../../static/imgs2.png'
				}, {
					imgs: '../../static/imgs3.png'
				}],
				activityMenu:[
					{
						judge: true,
						name: '学党史'
					},{
						judge: false,
						name: '军事知识'
					},{
						judge: false,
						name: '文化长廊'
					}
				],
				dataList:[
					{
						Imgs:'../../static/CpYIV2A1.jpg',
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
		},
		methods:{
			// 菜单
			clickMenu (index) {
				this.activityMenu.map(ser =>{
					ser.judge = false
				});
				this.activityMenu[index].judge = true
			},
			// 新闻列表
			newsClisk () {
				uni.navigateTo({
					url: '/pages/activity/list/index',
				});
			},
			// 进入详情
			detailsClick(index) {
				// console.log('11')
				uni.navigateTo({
					url: '/pages/details/index',
				});
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.activity{
		display: flex;
		flex-direction: column;
		min-height: 100%;
		// background-color: #F1F1F1;
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
					background-image: url(../../static/Icon/sousuo.png);
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
		
		
		.activity_top{
			display: flex;
			flex-direction: column;
			.Carousel {
				// display: none;
				margin: 0 20upx;
				margin-top: 15upx;
				margin-bottom: 15upx;
				border-radius: 15upx;
				overflow: hidden;
				background-color: #666;
			}
			// 菜单
			.menu{
				border-top: 5upx solid #F1F1F1;
				border-bottom: 1upx solid #F1F1F1;
				height: 100upx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.menu_li{
					font-size: 28upx;
					color: #333;
					line-height: 110upx;
					height: 100upx;
					position: relative;
					.manu_Icon{
						position: absolute;
						bottom: 0;
						left: 0;
						height: 6upx;
						width: 100%;
						
					}
				}
				.menu_te{
					font-weight: 700;
					color: #4199E0;
					.manu_Icon{
						background-color: #4199E0;
					}
				}
				
			}
		}
		.activity_bottom{
			display: flex;
			flex-direction: column;
			.activity_ul{
				display: flex;
				flex-direction: column;
				.activity_label{
					margin: 10upx 24upx;
					display: flex;

					text{
						margin-left: auto;
						font-size: 24upx;
						color: #4199E0;
					}
				}
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
	}
</style>

<style>
	.activity .Carousel swiper {
		width: 100%;
		height: 340upx;
	}

	.activity .Carousel image {
		width: 100%;
		height: 340upx;
	}
</style>