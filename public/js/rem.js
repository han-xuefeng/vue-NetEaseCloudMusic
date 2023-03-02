function remSize(){
    // 获取设备的宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth > 750) {
      deviceWidth = 750
    }
    if (deviceWidth < 320) {
      deviceWidth = 320
    }

    // 设置rem
    document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px'
    // 设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()
// 当窗口发生变化去适配
window.onresize=function(){
  remSize()
}