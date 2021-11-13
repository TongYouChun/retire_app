<!-- 商家 -->
<template>
	<view class="business_list">
		<view class="result_frame">
			<view class="search_input">
				<view class="input_Icon"></view>
				<input class="input" type="text" value="" placeholder="请输入类型"/>
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		<view class="result_list">
			<view class="result_ul">
				<view class="result_li" v-for="(item,index) in businessClassification" :key="index" @click="businessClick(index)">
					<view class="Imgs">
						<image :src="item.Imgs" mode=""></image>
					</view>
					<view class="Name">
						{{item.Name}}
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
				// 商家 分类
				businessClassification:[
					{
						Imgs:'https://img1.baidu.com/it/u=698752941,3501152920&fm=26&fmt=auto&gp=0.jpg',
						Name:'餐饮美食'
					},{
						Imgs:'https://img1.baidu.com/it/u=2415189081,3969568211&fm=26&fmt=auto&gp=0.jpg',
						Name:'酒店住宿'
					},{
						Imgs:'https://img0.baidu.com/it/u=213443162,3693706363&fm=26&fmt=auto&gp=0.jpg',
						Name:'超市百货'
					},{
						Imgs:'https://img0.baidu.com/it/u=3182424923,1238323010&fm=26&fmt=auto&gp=0.jpg',
						Name:'服装鞋帽'
					},{
						Imgs:'https://img2.baidu.com/it/u=1759572689,2452812279&fm=26&fmt=auto&gp=0.jpg',
						Name:'教育培训'
					},{
						Imgs:'https://img2.baidu.com/it/u=204178378,2140359940&fm=26&fmt=auto&gp=0.jpg',
						Name:'金融服务'
					},{
						Imgs:'https://img0.baidu.com/it/u=1891272626,1453158541&fm=26&fmt=auto&gp=0.jpg',
						Name:'农副产品'
					},{
						Imgs:'https://img2.baidu.com/it/u=457844207,759119517&fm=26&fmt=auto&gp=0.jpg',
						Name:'汽车服务'
					},{
						Imgs:'https://img2.baidu.com/it/u=3031797697,2756438954&fm=26&fmt=auto&gp=0.jpg',
						Name:'手机电脑'
					},{
						Imgs:'https://img1.baidu.com/it/u=607452216,719910472&fm=26&fmt=auto&gp=0.jpg',
						Name:'房产销售'
					},{
						Imgs:'https://img0.baidu.com/it/u=3041921687,42462373&fm=26&fmt=auto&gp=0.jpg',
						Name:'建材家具'
					},{
						Imgs:'https://img1.baidu.com/it/u=2020716999,1230276424&fm=26&fmt=auto&gp=0.jpg',
						Name:'房屋装修'
					},{
						Imgs:'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00559-3567.jpg',
						Name:'家用电器'
					},{
						Imgs:'https://img0.baidu.com/it/u=683526961,1690704200&fm=26&fmt=auto&gp=0.jpg',
						Name:'医疗健康'
					},{
						Imgs:'https://img2.baidu.com/it/u=3674456933,2912231191&fm=26&fmt=auto&gp=0.jpg',
						Name:'结婚摄影'
					},{
						Imgs:'https://img0.baidu.com/it/u=2017168342,1106477879&fm=26&fmt=auto&gp=0.jpg',
						Name:'美容美发'
					},{
						Imgs:'https://img1.baidu.com/it/u=2482787508,1637339077&fm=26&fmt=auto&gp=0.jpg',
						Name:'娱乐健身'
					},{
						Imgs:'https://img0.baidu.com/it/u=2331304782,2354492807&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=450',
						Name:'景区门票'
					},{
						Imgs:'https://img0.baidu.com/it/u=1106479904,268216372&fm=26&fmt=auto&gp=0.jpg',
						Name:'文体用品'
					},{
						Imgs:'https://img0.baidu.com/it/u=1106479904,268216372&fm=26&fmt=auto&gp=0.jpg',
						Name:'婴童用品'
					},{
						Imgs:'https://img1.baidu.com/it/u=2513330907,2473836950&fm=26&fmt=auto&gp=0.jpg',
						Name:'本地特色'
					},{
						Imgs:'https://img0.baidu.com/it/u=2373273729,3044798413&fm=26&fmt=auto&gp=0.jpg',
						Name:'其他分类'
					}
				]
			}
		},
		methods:{
			// 列表
			businessClick (index) {
				uni.navigateTo({
					url: '/pages/homepage/business/list/index',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.business_list{
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
		.result_list{
			margin-top: 15upx;
			padding: 15upx 20upx;
			flex: 1;
			background-color: #FFFFFF;
			.result_ul{
				margin-top: 20upx;
				display: flex;
				flex-wrap: wrap;
				.result_li{
					margin: 0 1%;
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 23%;
					// background-color: #007AFF;
					.Imgs{
						height: 150upx;
						width: 150upx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 15upx;
						}
					}
					.Name{
						margin-top: 18upx;
						margin-bottom: 30upx;
						font-size: 28upx;
						color: #999;
					}
				}
			}
		}
	
	}
</style>
