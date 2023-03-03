import service  from "..";

export function getMusicItemList(id){
  return service({
      method:"GET",
      url:`/playlist/detail?id=${id}`
  })
}

export function getItemList(data){
  return service({
    method: 'GET',
    url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
  })
}