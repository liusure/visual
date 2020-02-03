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
  GoodsInfoEditor,
  GoodsTagsEditor,
  GoodsIndexEditor,
  GoodsInfoMiniEditor,
  GoodsStoreEditor,
  GoodsRecommendEditor,
  ReadingCenterEditor,
  FixedEditor,
  GuessYouLikeEditor,
  ActivityEditor,
  GoodsScrollEditor,
  VideoEditor,
  NavigationEditor,
  FlashSaleEditor,
  GoodsMessageEditor
} from "./components/components"
import ImageScrollEditor from "@/components/components/imageScroll/ImageScrollEditor";

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
    type: "navigation",
    desc: "导航",
    toComponent: (data) => {
      return {
        ...NavigationEditor.getInitialValue(),
        ...data,
        items: data.items.map(item => {
          return {
            ...item,
          }
        })
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
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
        rowColCount: data.rowColCount || 2
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          ...item,
          resourceUrl: item.url,
          resourcePic: item.url,
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
            imageUrls: item.item.imageUrls,
            price: item.item.price,
            goodsName: item.item.name
          }
        })
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          itemType: itemType.ITEM_TYPE_GOODS,
          targetId: item.targetId,
          name: item.name,
          id: item.id
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
        ...GoodsInfoEditor.getInitialValue(),
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
        ...GoodsIndexEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '17': {
    type: "goods-info-mini",
    desc: "简介收缩",
    toComponent: (data) => {
      return {
        ...GoodsInfoMiniEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '18': {
    type: "image-scroll",
    desc: "超屏滑动",
    toComponent: (data) => {
      return {
        ...ImageScrollEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '19': {
    type: "fixed",
    desc: "底部浮动",
    toComponent: (data) => {
      return {
        ...FixedEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
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
    type: "guess-like",
    desc: "猜你喜欢",
    toComponent: (data) => {
      return {
        ...GuessYouLikeEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '22': {
    type: "goods-recommend",
    desc: "同类推荐",
    toComponent: (data) => {
      return {
        ...GoodsRecommendEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '23': {
    type: "reading-center",
    desc: "阅读中心",
    toComponent: (data) => {
      return {
        ...ReadingCenterEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '24': {
    type: "video",
    desc: "视频",
    toComponent: (data) => {
      return {
        ...VideoEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          ...item,
          resourceUrl: item.url
        }
      })
    }
  },
  '25': {
    type: "goods-store",
    desc: "跳店铺",
    toComponent: (data) => {
      return {
        ...GoodsStoreEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '26': {
    type: "activity",
    desc: "活动",
    toComponent: (data) => {
      return {
        ...ActivityEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '27': {
    type: "goods-message",
    desc: "诱导订单滚动",
    toComponent: (data) => {
      return {
        ...GoodsMessageEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  },
  '28': {
    type: "goods-scroll",
    desc: "拼团商品",
    toComponent: (data) => {
      return {
        ...GoodsScrollEditor.getInitialValue(),
        ...data,
        items: data.items.map(item => {
          return {
            ...item,
            imageUrls: item.item.imageUrls,
            groupPrice: item.item.groupPrice,
            goodsName: item.item.name
          }
        })
      }
    },
    mapTemplateItem: (data) => {
      return data.items.map(item => {
        return {
          itemType: itemType.ITEM_TYPE_GOODS,
          targetId: item.targetId,
          name: item.name,
          id: item.id
        }
      })
    }
  },
  '29': {
    type: "flash-sale",
    desc: "秒杀专区",
    toComponent: (data) => {
      return {
        ...FlashSaleEditor.getInitialValue(),
        ...data,
      }
    },
    mapTemplateItem: (data) => {
      return null
    }
  }
}
let mediaUrl = "http://image.tenfenbook.com/cms/"
let itemType = {
  ITEM_TYPE_COLUMN: 0,
  ITEM_TYPE_GOODS: 1,
  ITEM_TYPE_NEWS: 2,
  ITEM_TYPE_ACTIVITY: 3,
  ITEM_TYPE_Link: 4,
  ITEM_TYPE_TASK: 5,
  ITEM_TYPE_PACKAGE: 6,
  ITEM_TYPE_TEXT: 7,
  ITEM_TYPE_STORE: 8,
}
let contentType = {
  CUSTOM: 0,
  INHERIT: 1
}
export {componentsConfig, itemType, contentType, mediaUrl}
