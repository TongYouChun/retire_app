<!-- 学习 -->
<template>
	<view class="study">
		<!-- 选项 -->
		<view class="study_Option">
			<view class="Option_li" :class="[item.decide ? 'Option_te':'']" v-for="(item,index) in Option" :key="index"
				@click="optionClick(index)">
				{{item.name}}
			</view>
		</view>
		<!-- 内容 -->
		<view class="study_container">
			<view class="study_container_ul" v-if="estimate">
				<view class="study_container_label">
					党员：文献学习
				</view>
				<view class="study_container_article_ul">
					<view class="article_li" v-for="(item,index) in Article" :key="index" @click="detailsClick(index)">
						<view class="article_li_imgs">
							<image :src="item.imgs" mode=""></image>
						</view>
						<view class="article_li_name">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
			<view class="study_container_ul" v-else>
				<view class="study_container_label">
					党员：视频学习
				</view>
				<view class="study_container_article_ul">
					<view class="article_li" v-for="(item,index) in video" :key="index" @click="videoDetailsClick(index)">
						<view class="article_li_imgs">
							<image :src="item.imgs" mode=""></image>
						</view>
						<view class="article_li_name">
							{{item.name}}
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
				Option: [{
						name: '文献',
						decide: true
					},
					{
						name: '视频',
						decide: false
					}
				],
				estimate: true,
				video: [{
						imgs: '../../static/im3.png',
						name: '视频教学'
					}
				],
				Article: [{
						imgs: '../../static/im1.png',
						name: '学习文献'
					}
				],
			}
		},
		methods: {
			// 选项
			optionClick(index) {
				this.Option.map(ser => {
					ser.decide = false
				})
				this.Option[index].decide = true;
				if (this.Option[index].name === '文献') {
					this.estimate = true
				} else {
					this.estimate = false
				}
			},
			// 进入详情
			detailsClick(index) {
				// console.log('11')
				uni.navigateTo({
					url: '/pages/details/index',
				});
			},
			// 视频详情
			videoDetailsClick() {
				uni.navigateTo({
					url: '/pages/study/learningLnowledge/index',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	// 标题
	.study_container_label {
		height: 70upx;
		padding-left: 24upx;
		font-size: 30upx;
		font-weight: 700;
		color: #333;
		display: flex;
		align-items: center;
		background-color: #F1F1F1;
	}

	.study {
		height: 100%;
		// background-color: #F1F1F1;
		display: flex;
		flex-direction: column;
	}

	// 选项
	.study_Option {
		height: 85upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;

		.Option_li {
			width: 40%;
			height: 65upx;
			border: 1upx solid #eee;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.Option_te {
			background-color: #2789D8;
			color: #FFFFFF;
		}

		.Option_li:nth-child(1) {
			border-radius: 32upx 0 0 32upx;
		}

		.Option_li:nth-child(2) {
			border-left: none;
			border-radius: 0 32upx 32upx 0;
		}
	}

	// 内容
	.study_container {
		overflow-y: auto;
		display: flex;
		flex-direction: column;

		.study_container_ul {
			display: flex;
			flex-direction: column;

			.study_container_article_ul {
				display: flex;
				flex-wrap: wrap;
				background-color: #FFFFFF;

				.article_li {
					display: flex;
					flex-direction: column;
					margin-bottom: 10upx;
					width: 33.33333%;
					align-items: center;

					.article_li_imgs {
						margin-top: 20upx;
						margin-bottom: 10upx;
						height: 130upx;
						width: 80%;

						image {
							height: 130upx;
							width: 100%;
							border-radius: 10upx;
						}
					}

					.article_li_name {
						font-size: 26upx;
						color: #666;
						text-align: center;
					}
				}
			}

		}
	}

	// 隐藏滚动条
	.study_container::-webkit-scrollbar {
		display: none;
	}
</style>
