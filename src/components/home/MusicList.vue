<script setup>

import { reactive, onMounted } from 'vue'
import { getMusicList } from '@/request/api/home';
const state = reactive({musicList:{}})

function changeCount(num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + "亿";
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
}

onMounted(async ()=>{
    let res = await getMusicList()
    state.musicList = res.data.result
  })


</script>
<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="130" class="my-swipe" :show-indicators=false>
        <van-swipe-item v-for="item in state.musicList">
          <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofangliang"></use>
              </svg>
              {{changeCount(item.playCount)}}
            </span>
            <span class="name">{{item.name}}</span>
        </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<style lang="less" scoped>
.musicList{
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop{
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title{
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more{
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent{
    width: 100%;
    height: 3.6rem;
    .van-swipe-item {
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img{
        width: 100%;
        height: 2.4rem;        
        border-radius: 0.2rem;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        font-size: .24rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
        font-size: 0.26rem;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
        overflow:hidden;             //超出部分隐藏
		    text-overflow:ellipsis;
        color:rgb(51,51,51);
      }
    }
  }
}

</style>