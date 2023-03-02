import { Swipe, SwipeItem } from 'vant'

let plugins = [
  Swipe,SwipeItem
]

export default function getVant(app){
  plugins.forEach((item) => {
    return app.use(item)
  })
}