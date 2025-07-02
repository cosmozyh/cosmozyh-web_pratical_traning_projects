<template>
	<view class="content">
		<view class="search">
			<up-search placeholder="搜索" :bg-color="'#e3e3e3'" v-model="keyword"></up-search>
		</view>
		<up-swiper 
			:list="bannerList" 
			keyName="image" 
			show-title 
			:radius="8" 
			:autoplay="true" 
			:height="160"
		/>
		<up-notice-bar text="这是公告文字" mode="closable"></up-notice-bar>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getBanner } from '../../api/api';
import { onLoad } from '@dcloudio/uni-app';

const keyword = ref('');
const bannerList = ref([]);
const noticeText = ref('这是一个公告');

onLoad(async () => {
  try {
    const res = await getBanner();
    console.log("res结果:", res);

    if (res && res.code === 1 && res.data && Array.isArray(res.data.bannerList)) {
      bannerList.value = res.data.bannerList;
      console.log("设置到组件的 bannerList:", bannerList.value);
    } else {
      console.warn("接口返回数据格式不正确或 bannerList 为空");
    }
  } catch (err) {
    console.error("获取 Banner 出错:", err);
  }
});
</script>

<style lang="scss" scoped>
.content {
	padding: 20rpx;
}

.content .swiper {
	margin-bottom: 20rpx;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>