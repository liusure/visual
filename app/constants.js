import {
  SearchEditor,
  SearchPreview,
  MessageEditor,
  MessagePreview,
  SwiperEditor,
  SwiperPreview,
  GoodsListEditor,
  GoodsListPreview,
  ImageListEditor,
  ImageListPreview,
} from "./components/components"

let componentsConfig = {
  '0': {
    type: "swiper",
    desc: "图片轮播",
    toComponent: (data) => {
      return {
        ...SwiperEditor.getInitialValue(),
        items: data.items.map(item => {
          return {
            ...item,
            url: item.resourcePic
          }
        })
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          ...item
        }
      })
    }
  },
  '1': {
    type: "nav",
    desc: "导航",
  },
  '6': {
    type: "image-list",
    desc: "大图展示",
    toComponent: (data) => {
      return {
        ...ImageListEditor.getInitialValue(),
        items: data.items.map(item => {
          return {
            ...item,
            url: item.resourcePic
          }
        }),
        columnCount: data.rowColCount
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          ...item,
          resourcePic: item.url
        }
      })
    }
  },
  '7': {
    type: "goods-list",
    desc: "图文上下",
    toComponent: (data) => {
      return {
        ...GoodsListEditor.getInitialValue(),
        items: data.items.map(item => {
          return {
            ...item,
            name: item.item.name,
            price: item.item.price,
            imageUrls: item.item.imageUrls
          }
        })
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          ...item
        }
      })
    }
  },
  '8': {
    type: "search",
    desc: "搜索框",
    toComponent: (data) => {
      return {
        ...SearchEditor.getInitialValue(),
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '9': {desc: "栏目图片"},
  '10': {desc: "栏目简介",},
  '11': {desc: "商品简介",},
  '12': {desc: "商品标签栏",},
  '13': {desc: "商品图文介绍",},
  '14': {desc: "商品图片轮播",},
  '15': {desc: "基本信息",},
  '16': {desc: "目录收缩",},
  '17': {desc: "简介收缩",},
  '18': {desc: "超屏滑动",},
  '19': {desc: "底部浮动",},
  '20': {desc: "消息滚动",},
  '21': {desc: "猜你喜欢",},
  '22': {desc: "同类推荐",},
  '23': {desc: "阅读中心",},
  '24': {desc: "视频",},
  '25': {desc: "跳店铺",},
  '26': {
    desc: "活动"
  }
}

let itemType = {
  ITEM_TYPE_COLUMN: 0,
  ITEM_TYPE_GOODS: 1,
  ITEM_TYPE_NEWS: 2,
  ITEM_TYPE_ACTIVITY: 3,
  ITEM_TYPE_Link: 4,
  ITEM_TYPE_Task: 5,
  ITEM_TYPE_PACKAGE: 6,
  ITEM_TYPE_TEXT: 7,
  ITEM_TYPE_STORE: 8,
}
export {componentsConfig, itemType}
