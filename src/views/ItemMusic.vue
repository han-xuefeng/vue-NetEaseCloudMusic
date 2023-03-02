<script setup>
  import { useRoute } from 'vue-router'
  import { onMounted, reactive } from 'vue'
  import { getMusicItemList } from '@/request/api/item'
  import ItemMusicTop from '@/components/item/ItemMusicTop.vue'

  const route = useRoute()

  const state = reactive({
    playlist: {}
  })

  onMounted(async ()=>{
      let res = await getMusicItemList(route.query.id)
      state.playlist = res.data.playlist
      console.log(state.playlist);
  })

</script>
<template>
  <ItemMusicTop :playlist=state.playlist />
</template>