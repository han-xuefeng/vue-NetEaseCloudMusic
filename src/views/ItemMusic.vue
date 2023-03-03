<script setup>
  import { useRoute } from 'vue-router'
  import { onMounted, reactive } from 'vue'
  import { getMusicItemList,getItemList } from '@/request/api/item'
  import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
  import ItemMusicList from '@/components/item/ItemMusicList.vue'

  const route = useRoute()

  const state = reactive({
    playlist: {},
    itemList: []
  })

  onMounted(async ()=>{
    let id = route.query.id
      let res = await getMusicItemList(id)
      state.playlist = res.data.playlist

      let result = await getItemList({ id, limit: 10, offset: 0 })
      state.itemList = result.data.songs
  })

</script>
<template>
  <ItemMusicTop :playlist=state.playlist />
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
    :trackCount="state.playlist.trackCount"
  />
</template>