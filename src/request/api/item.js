import service  from "..";

export function getMusicItemList(id){
  return service({
      method:"GET",
      url:`/playlist/detail?id=${id}`
  })
}