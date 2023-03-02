<script setup>

  import { getBanner } from '@/request/api/home.js'
  import { reactive, onMounted } from 'vue';

  onMounted(async ()=>{
    let res = await getBanner()
    state.images = res.data.banners
  })

  const state = reactive({
    images:{}
    })
</script>

<template>
  <div class="swipeTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .van-swipe{
    width: 100%;
    height: 3rem;
    .van-swipe-item{
      padding: 0 0.2rem;
      img{
          width: 100%;
          height: 100%;
          border-radius: 0.2rem;
      }
    }
    /deep/ .van-swipe__indicator--active{
      background-color: rgb(219, 130, 130);
    }
  }
</style>
