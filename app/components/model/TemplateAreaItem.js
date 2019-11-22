class TemplateAreaItem {
  constructor({id, name, imgIconUrl, iconUrl, resourcePic, orderId, targetId, itemType, areaId, linkUrl, shopStoreId, item}) {
    this.id = id;
    this.name = name;
    this.imgIconUrl = imgIconUrl;
    this.iconUrl = iconUrl;
    this.resourcePic = resourcePic;
    this.orderId = orderId;
    this.targetId = targetId;
    this.itemType = itemType;
    this.areaId = areaId;
    this.linkUrl = linkUrl;
    this.shopStoreId = shopStoreId;
    this.item = item;
  }
}

export default TemplateAreaItem;