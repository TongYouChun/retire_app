<!-- 主页 -->
<template>
	<view class="homepage">
		<!-- 搜索 + 二维码 -->
		<view class="homepage_search">
			<view class="homepage_name">
				<image src="../../static/Icon/icon_n3ku9rtfima/wode2.png" mode=""></image>
			</view>
			<view class="search_Button" @click="searchClick()">
				<view class="search_Icon"></view>
				<view class="search_input">
					请输入搜索内容
				</view>
			</view>
			<view class="QR_code">

			</view>
		</view>
		<view class="homepage_content_container">
			<!-- 轮播图 开始-->
			<view class="Carousel">
				<swiper indicator-dots circular autoplay interval=3000 indicator-active-color="#2789D8"
					indicator-color="rgba(191, 191, 191, 1)">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src="item.imgs"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播图 结束 -->
			
			<!-- 选项栏 -->
			<view class="Options">
				<view class="Options_ul">
					<view class="Options_li" v-for="(item,index) in Options"  @click="optionClick(index)" :key="index">
						<image :src="item.imgs" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			
			<!-- 分类 内容 -->
			<view class="classification_content">
				<!-- 推荐 -->
				<view class="recommend_content">
					<!-- <view class="homepage_label">
						<text>推荐公告</text>
					</view> -->
					<view class="recommend_Ul">
						<view class="recommend_li"  @click="detailsClick(index)">
							<view class="recommend_text">
								全省退役军人参与乡村振兴基层治理暨重点工作推进会召开
							</view>
							<view class="Imgs">
								<image src="../../static/1im.jpg" mode=""></image>
								<image src="../../static/2im.jpg" mode=""></image>
								<image src="../../static/3im.jpg" mode=""></image>
							</view>
						</view>
						<view class="recommend_li_video" @click="videoDetailsClick(index)">
							<view class="recommend_text">
								国家再次提高退役军人的待遇
							</view>
							<view class="recommend_video">
								<image class="video" src="https://img0.baidu.com/it/u=2054016466,1917648380&fm=26&fmt=auto&gp=0.jpg" mode=""></image>
								<view class="recommend_Button_Icon">
									<view class="Button_Icon"></view>
								</view>
							</view>
						</view>
						<view class="recommend_li"  @click="detailsClick(index)">
							<view class="recommend_text">
								全省退役军人参与乡村振兴基层治理暨重点工作推进会召开
							</view>
							<view class="Imgs">
								<image src="../../static/1im.jpg" mode=""></image>
								<image src="../../static/2im.jpg" mode=""></image>
								<image src="../../static/3im.jpg" mode=""></image>
							</view>
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
				swipers: [{
					imgs: '../../static/imgs1.png'
				}, {
					imgs: '../../static/imgs2.png'
				}, {
					imgs: '../../static/imgs3.png'
				}],
				Options: [{
						imgs: '../../static/Icon/icon_m8g/im1.png',
						name: '服务机构'
					}, {
						imgs: '../../static/Icon/icon_m8g/im2.png',
						name: '商家优惠'
					}, {
						imgs: '../../static/Icon/icon_m8g/im3.png',
						name: '求职应聘'
					}, {
						imgs: '../../static/Icon/icon_m8g/im4.png',
						name: '优军政策',
					}
					, {
						imgs: '../../static/Icon/icon_m8g/im5.png',
						name: '金融服务'
					}, {
						imgs: '../../static/Icon/icon_m8g/im6.png',
						name: '创业服务'
					}, {
						imgs: '../../static/Icon/icon_m8g/im7.png',
						name: '志愿者服务'
					}, {
						imgs: '../../static/Icon/icon_m8g/im8.png',
						name: '更多'
					},

				]
			}
		},
		methods:{
			// 选项栏
			optionClick (index) {
				let Url = '';
				// console.log(index)
				if(this.Options[index].name == '服务机构'){
					Url = '/pages/homepage/service/index'
				}else if(this.Options[index].name == '商家优惠'){
					Url = '/pages/homepage/business/index'
				}else if(this.Options[index].name == '求职应聘') {
					window.location.href = "http://123.60.12.193:9888/recruit/index.html#/"
				}else if(this.Options[index].name == '优军政策') {
					Url = '/pages/homepage/Youjun/index'
				}else if(this.Options[index].name == '金融服务') {
					Url = '/pages/homepage/finance/index'
				}else if(this.Options[index].name == '创业服务') {
					Url = '/pages/homepage/establish/index'
				}else if(this.Options[index].name == '志愿者服务') {
					Url = '/pages/homepage/volunteer/index'
				}
				uni.navigateTo({
					url: Url,
				});
				
			},
			// 进入详情
			detailsClick(index) {
				// console.log('11')
				uni.navigateTo({
					url: '/pages/details/index',
				});
			},
			// 视频详情
			videoDetailsClick (index) {
				uni.navigateTo({
					url: '/pages/study/learningLnowledge/index',
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
	// 标题
	.homepage_label {
		margin-left: 20upx;
		height: 80upx;
		display: flex;
		align-items: center;

		text {
			padding-left: 15upx;
			height: 40upx;
			line-height: 40upx;
			font-size: 32upx;
			font-weight: 600;
			color: #444;
			border-left: 10upx solid #2789D8;
		}
	}

	.homepage {
		height: 100%;
		background-color: #F1F1F1;
		position: relative;
		display: flex;
		flex-direction: column;

		// 搜索 + 二维码
		.homepage_search {
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			height: 85upx;
			width: 100%;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: space-between;

			// 用户头像
			.homepage_name {
				margin: 0 15upx;
				width: 65upx;
				height: 65upx;
				border-radius: 50%;
				overflow: hidden;
				// background-color: #aaa;
				border: 1upx solid #ddd;
				image{
					width: 65upx;
					height: 65upx;
				}
			}

			// 搜索
			.search_Button {
				width: 65%;
				height: 60upx;
				background-color: #f1f1f1;
				border-radius: 5upx;
				display: flex;
				align-items: center;
				border-radius: 30upx;

				.search_Icon {
					margin-left: 20px;
					width: 40upx;
					height: 40upx;
					background: url(../../static/Icon/sousuo.png);
					background-size: 100% 100%;
				}

				.search_input {
					margin-left: 6upx;
					font-size: 28upx;
					color: #999;
				}
			}

			// 二维码
			.QR_code {
				margin: 0 20upx;
				width: 65upx;
				height: 65upx;
				background: url(../../static/Icon/qrcode.png);
				background-size: 100% 100%;
			}
		}
		.homepage_content_container{
			margin-top: 85upx;
			overflow-y: auto;
		}
		.homepage_content_container::-webkit-scrollbar {
			display: none;
		}
		// 轮播图
		.Carousel {
			// display: none;
			margin: 0 20upx;
			margin-top: 10upx;
			border-radius: 15upx;
			overflow: hidden;
			background-color: #666;
		}

		// 选项栏
		.Options {
			// display: none;
			margin-top: 10upx;
			background-color: #FFFFFF;

			.Options_ul {
				display: flex;
				flex-wrap: wrap;

				.Options_li {
					width: 25%;
					height: 160upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					image {
						height: 80upx;
						width: 80upx;
						// border-radius: 50%;
					}

					text {
						font-size: 24upx;
						height: 40upx;
						line-height: 40upx;
						color: #777;
					}
				}
			}
		}

		// 推荐内容 (分类)
		.classification_content {
			margin-top: 10upx;
			display: flex;
			flex-direction: column;
			margin-bottom: 10upx;
			// display: none;
			// 推荐内容
			.recommend_content {
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
					.recommend_li_video{
						margin: 0 5%;
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
						.recommend_video{
							margin-top: 20upx;
							display: flex;
							flex-direction: column;
							position: relative;
							border-radius: 6upx;
							overflow: hidden;
							.recommend_Button_Icon{
								position: absolute;
								top: 0;
								left: 0;
								bottom: 0;
								right: 0;
								margin: auto;
								width: 140upx;
								height: 140upx;
								border-radius: 50%;
								background-color: rgba(0,0,0,0.5);
								display: flex;
								justify-content: center;
								align-items: center;
								.Button_Icon{
									margin-left: 16upx;
									width: 50upx;
									height: 60upx;
									background: url(../../static/Icon/bf.png);
									background-size: 100% 100%;
								}
							}
							.video{
								height: 400upx;
								width: 100%;
							}
						}
					}
					.recommend_li_video:active{
						background-color: #F1F1F1;
					}
				}
			}
		}
	}
</style>

<style>
	.Carousel swiper {
		width: 100%;
		height: 260upx;
	}

	.Carousel image {
		width: 100%;
		height: 260upx;
	}
</style>
