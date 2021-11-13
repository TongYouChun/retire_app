<!-- 视频教程 -->
<template>
	<view class="learningLnowledge">
		<!-- 视频 -->
		<view class="learningLnowledge_video">
			<video class="video" :src="src"></video>
		</view>
		<!-- 评论 -->
		<view class="learningLnowledge_comment">
			<view class="learningLnowledge_introduce">
				<view class="learningLnowledge_label">
					详情
				</view>
				<view class="learningLnowledge_content">
					<view class="learningLnowledge_Name">
						退役士兵安置条例
					</view>
					<view class="learningLnowledge_news">
						<text>第一条　为了规范退役士兵安置工作，保障退役士兵的合法权益，根据《中华人民共和国兵役法》，制定本条例。</text>
						<text>第二条　本条例所称退役士兵，是指依照《中国人民解放军现役士兵服役条例》的规定退出现役的义务兵和士官。</text>
						<text>第三条　国家建立以扶持就业为主，自主就业、安排工作、退休、供养等多种方式相结合的退役士兵安置制度，妥善安置退役士兵。</text>
					</view>
				</view>
			</view>
			<view class="learningLnowledge_frame" v-if="commentDecide">
				<view class="learningLnowledge_input">
					<input class="input " type="text" value="" placeholder="输入评论内容"/>
				</view>
				<view class="learningLnowledge_Button">
					发送
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentDecide: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.learningLnowledge{
		display: flex;
		flex-direction: column;
		min-height: 100%;
		.learningLnowledge_video{
			width: 100%;
			height: 360upx;
			.video{
				width: 100%;
				height: 360upx;
			}
		}
		.learningLnowledge_comment{
			flex: 1;
			display: flex;
			flex-direction: column;
			// background-color: #F1F1F1;
			.learningLnowledge_introduce{
				display: flex;
				flex-direction: column;
				.learningLnowledge_label{
					font-size: 30upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: 700;
					color: #333;
					height: 86upx;
					// background-color: #FFFFFF;
				}
				.learningLnowledge_content{
					border-top: 2upx solid #eee;
					// background-color: #FFFFFF;
					border-bottom: 5upx solid #eee;
					display: flex;
					flex-direction: column;
					.learningLnowledge_Name{
						margin: 0 24upx;
						margin-top: 10upx;
						height: 70upx;
						line-height: 70upx;
						font-size: 28upx;
						font-weight: 700;
						color: #333;
					}
					.learningLnowledge_news{
						margin: 0upx 24upx 30upx 24upx;
						
						display: flex;
						flex-direction: column;
						text{
							margin-top: 5upx;
							text-indent: 2em;
							font-size: 24upx;
							color: #999;
						}
					}
				}
			}
			.learningLnowledge_frame{
				display: flex;
				background-color: #FFFFFF;
				height: 96upx;
				padding: 0 24upx;
				justify-content: space-between;
				align-items: center;
				.learningLnowledge_input{
					width: 76%;
					height: 66upx;
					background-color: #F1F1F1;
					border-radius: 33upx;
					.input {
						padding: 0 5%;
						height: 100%;
						width: 90%;
						font-size: 26upx;
						color: #666;
					}
				}
				.learningLnowledge_Button{
					width: 18%;
					height: 66upx;
					background-color: #2789D8;
					text-align: center;
					line-height: 66upx;
					color: #FFFFFF;
					border-radius: 33upx;
				}
				.learningLnowledge_Button:active{
					background-color: #1670B8;
				}
			}
		}
	}
</style>
