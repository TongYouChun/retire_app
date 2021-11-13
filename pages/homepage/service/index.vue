<!-- 退役服务 -->
<template>
	<view class="service">
		<view class="result_frame">
			<view class="search_input">
				<view class="input_Icon"></view>
				<input class="input" type="text" value="" placeholder="请输入服务地区名称" />
			</view>
			<view class="search_Button">
				搜索
			</view>
		</view>
		<!-- 城市分类 -->
		<view class="cityClassification">
			<view class="uni-list-cell-db">
				<picker class="pickerList" mode="multiSelector" :range="newCategotyDataList" :value="multiIndex"
					range-key="name" @change="bindPickerChange" @columnchange="pickerColumnchange">
					<!-- <view>{{newCategotyDataList[0].name}}--{{newCategotyDataList[0].child[0].name}}--{{newCategotyDataList[0].child[0].child[0].name}}</view> -->
					<view class="">{{select}}</view>
				</picker>
			</view>
		</view>
		<view class="service_container">
			<view class="result_ul">
				<view class="result_li" v-for="(item,index) in service" :key="index" @click="addressClick(index)">
					<view class="result_Imgs">
						<image :src="item.imgs" mode=""></image>
					</view>
					<view class="result_text">
						<view class="result_name">
							{{item.name}}
						</view>
						<view class="recommend_food">
							地址：{{item.address}}
						</view>
						<view class="recommend_Price" v-if="item.Telephone">
							电话号：{{item.Telephone}}
						</view>
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
				service: [{
					imgs: 'https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Flbsugc.cdn.bcebos.com%2Fimages%2FB5f4c788ae39b413fb8.jpeg',
					name: '安徽省滁州市全椒县武岗镇退役军人服务站',
					address: '安徽省滁州市全椒县S206(武全路)',
					Telephone: '18355055679'
				}, {
					imgs: 'https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-pic-gz.cdn.bcebos.com%2Fbos_gz_6fe86d70dbb7b95b587ecf610b5f6afd.jpg',
					name: '南谯区龙蟠街道紫薇南路社区居委会',
					address: '西起南谯中路，东抵京沪铁路，北自稻香路，南至湖心东路。',
					Telephone: ''
				}, {
					imgs: 'https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-his.cdn.bcebos.com%2F50da81cb39dbb6fd79f777100024ab18972b3753.jpg',
					name: '南谯区凤凰西路社区居委会',
					address: '滁州市琅琊区琅琊西路56号',
					Telephone: '3027316'
				}, {
					imgs: 'https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Flbsugc.cdn.bcebos.com%2Fimages%2FB5f4c788ae39b413fb8.jpeg',
					name: '南谯区凤凰西路社区居委会',
					address: '滁州市琅琊区琅琊西路56号',
					Telephone: '3027316'
				}, {
					imgs: 'https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Ftaojin-pic-gz.cdn.bcebos.com%2Fbos_gz_0e19fee366fea0e327691a40aadeff07.jpg',
					name: '琅琊区琅琊街道站北社区居委会',
					address: '滁州市琅琊区',
					Telephone: '0550-3115520'
				}, {
					imgs: 'https://webmap0.bdimg.com/client/services/thumbnails?width=132&height=104&align=center,center&quality=100&src=https%3A%2F%2Flbsugc.cdn.bcebos.com%2Fimages%2FB5f4c788ae39b413fb8.jpeg',
					name: '琅琊区琅琊街道花园街社区居委会',
					address: '滁州市琅琊区北湖小区内?',
					Telephone: '0550-3010920'
				}, {
					imgs: 'https://img1.baidu.com/it/u=2889082087,985128177&fm=26&fmt=auto&gp=0.jpg',
					name: '琅琊区北门街道胜利社区居委会',
					address: '安徽省滁州市琅琊区北湖小区内',
					Telephone: '0550—2125030'
				}, {
					imgs: 'https://img2.baidu.com/it/u=1124588530,578182291&fm=26&fmt=auto&gp=0.jpg',
					name: '琅琊区西门街道古马路社区居委会',
					address: '滁州市琅琊区西城根29号',
					Telephone: '0550-3115520'
				}, {
					imgs: 'https://img1.baidu.com/it/u=3648071327,4273396974&fm=26&fmt=auto&gp=0.jpg',
					name: '琅琊区西门街道西大街社区居委会',
					address: '滁州市琅琊区四牌楼街',
					Telephone: '0550-3115520'
				}, ],
				categoryArr: [{
					name: "滁州市",
					value: "A",
					child: [{
						name: "琅琊区",
						value: "A01",
						child: [{
							value: "A01001",
							name: "琅琊区退役军人事务局",
						}, {
							value: "A01002",
							name: "扬子街道",
						}, {
							value: "A01003",
							name: "西涧街道",
						}, {
							value: "A01004",
							name: "东门公共服务中心",
						}, {
							value: "A01005",
							name: "南门公共服务中心",
						}, {
							value: "A01006",
							name: "西门公共服务中心",
						}, {
							value: "A01007",
							name: "北门公共服务中心",
						}, {
							value: "A01008",
							name: "琅琊公共服务中心",
						}, {
							value: "A01009",
							name: "清流公共服务中心",
						}]
					}, {
						name: "南谯区",
						value: "A02",
						child: [{
							value: "A02001",
							name: "龙蟠社管中心",
						}, {
							value: "A02002",
							name: "乌衣镇",
						}, {
							value: "A02003",
							name: "沙河镇",
						}, {
							value: "A02004",
							name: "腰铺镇",
						}, {
							value: "A02005",
							name: "章广镇",
						}, {
							value: "A02006",
							name: "施集镇",
						}, {
							value: "A02007",
							name: "珠龙镇",
						}, {
							value: "A02008",
							name: "黄泥岗镇",
						}, {
							value: "A02009",
							name: "大柳镇",
						}]
					},{
						name: "来安县",
						value: "A03",
						child: [{
							value: "A03001",
							name: "",
						}]
					},{
						name: "全椒县",
						value: "A04",
						child: [{
							value: "A04001",
							name: "",
						}]
					},{
						name: "定远县",
						value: "A05",
						child: [{
							value: "A05001",
							name: "",
						}]
					},{
						name: "凤阳县",
						value: "A06",
						child: [{
							value: "A06001",
							name: "",
						}]
					},{
						name: "天长市",
						value: "A07",
						child: [{
							value: "A07001",
							name: "",
						}]
					},{
						name: "明光市",
						value: "A08",
						child: [{
							value: "A08001",
							name: "",
						}]
					}
					]
				}],
				multiIndex: [0, 0, 0],
				newCategotyDataList: [
					[],
					[],
					[]
				],
				select: "请选择城市地区",
				selectObj: {}
			}
		},
		created() {
			for (let i = 0; i < this.categoryArr.length; i++) {
				// console.log(this.categoryArr[i].name);
				this.newCategotyDataList[0].push(this.categoryArr[i].name);
			}
			for (let i = 0; i < this.categoryArr[0].child.length; i++) {
				// console.log(this.categoryArr[0].city[i].name)
				this.newCategotyDataList[1].push(this.categoryArr[0].child[i].name);
			}
			for (let i = 0; i < this.categoryArr[0].child[0].child.length; i++) {
				// console.log(this.categoryArr[0].city[0].area)
				this.newCategotyDataList[2].push(this.categoryArr[0].child[0].child[i]);
			}
		},
		methods: {
			pickerColumnchange(e) {
				// 第几列滑动
				// console.log(e.detail.column);
				// 第几列滑动的下标
				// console.log(e.detail.value)
				// 第一列滑动
				if (e.detail.column === 0) {
					this.multiIndex[0] = e.detail.value
					// console.log('第一列滑动');
					// this.newCategotyDataList[1] = [];
					this.newCategotyDataList[1] = this.categoryArr[this.multiIndex[0]].child.map((item, index) => {
						// console.log(item)
						return item.name
					})
					// console.log(this.multiIndex)
					if (this.categoryArr[this.multiIndex[0]].child.length === 1) {
						this.newCategotyDataList[2] = this.categoryArr[this.multiIndex[0]].child[0].child.map((item,
							index) => {
								// console.log(item)
								return item
							})
					} else {
						this.newCategotyDataList[2] = this.categoryArr[this.multiIndex[0]].child[this.multiIndex[1]].child
							.map((item, index) => {
								// console.log(item)
								return item
							})
					}
					// 第一列滑动  第二列 和第三列 都变为第一个
					this.multiIndex.splice(1, 1, 0)
					this.multiIndex.splice(2, 1, 0)
				}
				// 第二列滑动
				if (e.detail.column === 1) {
					this.multiIndex[1] = e.detail.value
					// console.log('第二列滑动');
					// console.log(this.multiIndex)
					this.newCategotyDataList[2] = this.categoryArr[this.multiIndex[0]].child[this.multiIndex[1]].child.map(
						(item, index) => {
							// console.log(item)
							return item
						})
					// 第二列 滑动 第三列 变成第一个
					this.multiIndex.splice(2, 1, 0)
				}
				// 第三列滑动
				if (e.detail.column === 2) {
					this.multiIndex[2] = e.detail.value
					// console.log('第三列滑动')
					// console.log(this.multiIndex)
				}
			},
			bindPickerChange(e) {
				this.multiIndex = e.detail.value;
				// 数组内的下标
				// console.log(this.multiIndex);
				// 获取一级类目
				// console.log(this.newCategotyDataList[0][this.multiIndex[0]])
				// 获取二级类目
				// console.log(this.newCategotyDataList[1][this.multiIndex[1]])
				// 获取三级类目
				// console.log(this.newCategotyDataList[2][this.multiIndex[2]])
				this.select = `${this.newCategotyDataList[0][this.multiIndex[0]]} / ${this.newCategotyDataList[1][this.multiIndex[1]]} / ${this.newCategotyDataList[2][this.multiIndex[2]].name}`;
				this.selectObj = this.newCategotyDataList[2][this.multiIndex[2]];
			},
			addressClick(index) {
				uni.navigateTo({
					url: '/pages/homepage/service/details/index',
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.service {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background-color: #F1F1F1;

		.result_frame {
			height: 100upx;
			display: flex;
			width: 84%;
			justify-content: space-between;
			padding: 0 8%;
			align-items: center;
			background-color: #FFFFFF;

			// 搜索框
			.search_input {
				width: 80%;
				display: flex;
				height: 70upx;
				background-color: #F1F1F1;
				border-radius: 35upx;
				align-items: center;
				padding: 0 25upx;

				.input_Icon {
					width: 40upx;
					height: 40upx;
					background-image: url(../../../static/Icon/sousuo.png);
					background-size: 100% 100%;
				}

				.input {
					flex: 1;
					font-size: 28upx;
					margin-left: 15upx;
					height: 65upx;
					line-height: 65upx;
					color: #999999;
				}
			}

			// 搜索按钮
			.search_Button {
				font-size: 28upx;
				color: #2789D8;
			}
		}

		// 选择城市
		.cityClassification {
			width: 100%;
			display: flex;
			justify-content: center;
			font-size: 28upx;
			color: #666;
			background-color: #F1F1F1;
			overflow: hidden;
			.uni-list-cell-db{
				margin: 10upx 0;
				width: 90%;
				text-align: center;
				background-color: #FFFFFF;
				padding: 18upx;
				border-radius: 18upx;
				border: 1upx solid #eee;
				font-weight: 700;
			}
		}

		.service_container {
			flex: 1;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;

			.result_ul {
				margin: 0 24upx;
				margin-top: 10upx;
				display: flex;
				flex-direction: column;

				.result_li {
					height: 200upx;
					border-bottom: 1upx solid #e1e1e1;
					position: 0 10upx;
					display: flex;
					align-items: center;

					.result_Imgs {
						margin-left: 20upx;
						height: 140upx;
						width: 160upx;
						border: 1upx solid #eee;

						image {
							height: 140upx;
							width: 160upx;
							border-radius: 8upx;
						}
					}

					.result_text {
						margin-left: 24upx;
						display: flex;
						flex-direction: column;
						min-height: 120upx;
						justify-content: space-around;

						.result_name {
							font-size: 32upx;
							color: #333;
						}

						.recommend_food {
							font-size: 26upx;
							color: #999;
						}

						.recommend_Price {
							font-size: 26upx;
							color: #aaa;

							text {
								text-decoration: line-through
							}
						}

						.recommend_fracture {
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
