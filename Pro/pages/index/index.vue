<template>
  <view class="content">
    <up-search placeholder="搜索" bg-color="#e3e3e3" v-model="keyword"></up-search>
    <view class="swiper">
      <up-swiper :list="bannerList" keyName="image" showTitle radius="8" :autoplay="true" height="160"></up-swiper>
    </view>
    <up-notice-bar text="这是一个公告." mode="closable"></up-notice-bar>
	
    <view class="list">
      <up-waterfall v-model="flowList">
        <template v-slot:left="{leftList}">
          <view class="demo-water" v-for="(item, index) in leftList" :key="index">
            <up-lazy-load threshold="-450" border-radius="10" :image="item.img" :index="index"></up-lazy-load>
            <view class="demo-title">{{ item.title }}</view>
            <view class="demo-times">{{ item.times }}</view>
            <view class="demo-tag">
              <view class="demo-tag-owner">{{ item.tag[0] }}</view>
              <view class="demo-tag-text">{{ item.tag[1] }}</view>
            </view>
            <view class="isDot" v-if="item.isDot">{{ item.isDot }}</view>
          </view>
        </template>
        <template v-slot:right="{rightList}">
          <view class="demo-water" v-for="(item, index) in rightList" :key="index">
            <up-lazy-load threshold="-450" border-radius="10" :image="item.img" :index="index"></up-lazy-load>
            <view class="demo-title">{{ item.title }}</view>
            <view class="demo-times">{{ item.times }}</view>
            <view class="demo-tag">
              <view class="demo-tag-owner">{{ item.tag[0] }}</view>
              <view class="demo-tag-text">{{ item.tag[1] }}</view>
            </view>
            <view class="isDot" v-if="item.isDot">{{ item.isDot }}</view>
          </view>
        </template>
      </up-waterfall>
    </view>
  </view>
	
  <view class="topClass" v-if="showTopBtn" @click="Totop">
    <up-icon name="arrow-upward" color="#ffff" size="28"></up-icon>
  </view>
</template>

<script setup>
  import { ref } from 'vue';
  import { getBanner, getHomeList } from '../../api/api';
  import { onLoad, onReachBottom, onPageScroll } from '@dcloudio/uni-app'
  
  const keyword = ref("")
  const bannerList = ref([])
  const flowList = ref([])
  
  const showTopBtn = ref(0)
  
  onLoad(() => {
    getBanner().then(res => {
      bannerList.value = res.bannerList
    })
    getHomeList().then(res => {
      flowList.value = Array.isArray(res) ? res : []
    })
  })
  
  onReachBottom(() => {
    setTimeout(() => {
      addRadomData()
    }, 1000)
  })
    
  const addRadomData = () => {
    for (let i = 0; i < 10; i++) {
      if (flowList.value.length === 0) return
      
      let index = uni.$u.random(0, flowList.value.length - 1)
      let item = flowList.value[index]
      item.id = uni.$u.guid()
      flowList.value.push(item)
    }
  }
  
  onPageScroll((e) => {
    if (e.scrollTop > 600) {
      showTopBtn.value = 1
    } else {
      showTopBtn.value = 0
    }
  })
</script>

<style>
	page{
		background-color: rgb(240,250,240);
	}
</style>

<style lang="scss">
  .content {
    padding: 20rpx;
  }
  .content .swiper {
    margin: 20rpx 0;
  }
  
  .list {
    margin: 30rpx 0;
    .demo-water {
      margin: 10rpx;
      background-color: #fff;
      border-radius: 16rpx;
      padding: 16rpx;
      position: relative;
    }
    .demo-title {
      font-size: 30rpx;
      margin-top: 10rpx;
      color: #333;
    }
    .demo-times {
      font-size: 24rpx;
      color: #777;
      margin-top: 10rpx;
    }
    .demo-tag {
      display: flex;
      margin-top: 10rpx;
      .demo-tag-owner {
        border: 1px solid rgb(255, 163, 129);
        color: #ffaa00;
        font-size: 20rpx;
        display: flex;
        align-items: center;
        padding: 4rpx 14rpx;
        border-radius: 50rpx;
      }
      .demo-tag-text {
        border: 1px solid #00aaff;
        color: #00aaff;
        font-size: 20rpx;
        display: flex;
        align-items: center;
        padding: 4rpx 14rpx;
        border-radius: 50rpx;
      }
    }
    .isDot {
      position: absolute;
      top: 20rpx;
      right: 20rpx;
      font-size: 24rpx;
      color: #fff;
      line-height: 32rpx;
      background-color: #ff0000;
      text-align: center;
      border-radius: 10rpx;
      padding: 10rpx;
    }
  }
  .topClass {
    position: fixed;
    bottom: 100rpx;
    right: 20rpx;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20rpx;
    width: 64rpx;
    height: 64rpx;
    border-radius: 60rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>