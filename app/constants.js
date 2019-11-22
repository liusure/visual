import {
  SearchEditor,
  MessageEditor,
  SwiperEditor,
  GoodsListEditor,
  ImageListEditor,
  ColumnDescEditor,
  ColumnImageEditor,
  GoodsDescEditor,
  GoodsRichTextEditor,
  GoodsSwiperEditor,
  GoodsTagsEditor,
} from "./components/components"

let componentsConfig = {
  '0': {
    type: "swiper",
    desc: "图片轮播",
    toComponent: (data) => {
      return {
        ...SwiperEditor.getInitialValue(),
        ...data,
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
        ...data,
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
        ...data,
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
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '9': {
    type: "column-image",
    desc: "栏目图片",
    toComponent: (data) => {
      return {
        ...ColumnImageEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '10': {
    type: "column-desc",
    desc: "栏目简介",
    toComponent: (data) => {
      return {
        ...ColumnDescEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '11': {
    type: "goods-desc",
    desc: "商品简介",
    toComponent: (data) => {
      return {
        ...GoodsDescEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '12': {
    type: "goods-tags",
    desc: "商品标签栏",
    toComponent: (data) => {
      return {
        ...GoodsTagsEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '13': {
    type: "goods-richText",
    desc: "商品图文介绍",
    toComponent: (data) => {
      return {
        ...GoodsRichTextEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '14': {
    type: "goods-swiper",
    desc: "商品图片轮播",
    toComponent: (data) => {
      return {
        ...GoodsSwiperEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '15': {
    type: "goods-info",
    desc: "基本信息",
    toComponent: (data) => {
      return {
        ...GoodsSwiperEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '16': {
    type: "goods-index",
    desc: "目录收缩",
    toComponent: (data) => {
      return {
        ...GoodsSwiperEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '17': {desc: "简介收缩",},
  '18': {desc: "超屏滑动",},
  '19': {desc: "底部浮动",},
  '20': {
    type: "message",
    desc: "消息滚动",
    toComponent: (data) => {
      return {
        ...MessageEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '21': {
    type: "search",
    desc: "猜你喜欢",
  },
  '22': {
    type: "search",
    desc: "同类推荐",
  },
  '23': {
    type: "search",
    desc: "阅读中心",
  },
  '24': {
    type: "search",
    desc: "视频",
  },
  '25': {
    type: "search",
    desc: "跳店铺",
  },
  '26': {
    type: "search",
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
let contentType = {
  CUSTOM: 0,
  INHERIT: 1
}
export {componentsConfig, itemType, contentType}
