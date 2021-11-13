<!-- 服务机构 -->
<template>
	<view class="service_mechanism">
		<view class="details_title">
			滁州市退役军人医疗服务示范单位在明光市挂牌
		</view>
		<view class="details_container">
			<text>
				1月21日，滁州市退役军人医疗服务示范单位分别在明光市中医院、惠民医院挂牌成立，并举行揭牌仪式。
			</text>
			<image src="../../../../static/CpYIV.jpg" mode=""></image>
			<text>
				中医院党委书记杨萍、惠民医院院长杜克武一致表示：我们保证不辱使命，积极承接优抚对象的医疗康养服务，为每一位优抚对象建立健康管理档案，全力做好优抚对象的健康体检、医疗咨询、康复治疗及疗养修养等服务项目，为优抚对象和退役军人提供高效优质服务。在挂号、就诊、检查、体检、住院等全方位开通专门窗口和绿色通道，全部减免挂号费用，对行动不便的优抚对象开通上门服务通道。
			</text>
			<image src="../../../../static/CpYIV2A.jpg" mode=""></image>
			<text>
				 梁茂生局长高度赞扬明光市中医院、明光市惠民医院，以科学态度积极承接优抚对象的医疗康养服务精神。希望两家挂牌医院要充分利用现有医疗资源优势，营造“让军人成为全社会尊崇职业”的浓厚氛围，增强服务意识、完善服务手段、提高服务质量，以良好的示范效应推动我市退役军人医疗服务体系建设，更好地服务退役军人。
			</text>
		</view>
		<view class="address_map" style="padding: 20upx 5%;">
			<map style="width: 100%; height: 200px;" :latitude="latitude" :longitude="longitude"
				:markers="covers"></map>
		</view>
		<view class="details_edit">
			<view class="edit">
				<text>来源：滁州市退役军人事务局</text>
			</view>
			<view class="date">
				<text>2021-8-4</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,

				latitude: 32.351182,

				longitude: 118.176873,

				covers: [

					{

						latitude: 32.351182, //纬度，范围为-90~90，负数表示南纬

						longitude: 118.176873, //经度，范围为-180~180，负数表示西经

					}

				]
			}
		},
		created() {
			// uni.getLocation({
			// type: 'gcj02',
			// success: (res) => {
			// this.latitude=res.latitude;
			// this.longitude=res.longitude;
			// console.log(this.latitude);
			// console.log(this.longitude);
			// console.log(res);
			// }
			// });
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.service_mechanism {
		background-color: #fff;
		padding-bottom: 20upx;

		.details_title {
			margin: 20upx 4%;
			display: flex;
			font-size: 38upx;
			font-weight: 700;
			color: #333;
			text-align: center;
		}

		.details_container {
			display: flex;
			flex-direction: column;

			image {
				margin: 10upx 5%;
				width: 90%;
			}

			text {
				text-indent: 2em;
				margin: 10upx 5%;
				color: #666;
			}
		}

		.details_edit {
			margin: 10upx 5%;
			margin-top: 40upx;
			display: flex;
			flex-direction: column;

			.edit {
				width: 42%;
				margin-left: auto;
				display: flex;

				text {
					font-size: 24upx;
					color: #999;
				}
			}

			.date {
				width: 40%;
				margin-left: auto;
				font-size: 24upx;
				height: 42upx;
				line-height: 42upx;
				color: #999;
				text-align: center;
			}
		}
	}
</style>
