class TemplateArea {
  constructor({id, tmplId, name, ctype, orderId, rowColCount, filedOne, filedTwo, filedThree, contentType}) {
    this.id = id;
    this.tmplId = tmplId;
    this.name = name;
    this.ctype = ctype;
    this.orderId = orderId;
    this.rowColCount = rowColCount;
    this.filedOne = filedOne;
    this.filedTwo = filedTwo;
    this.filedThree = filedThree;
    this.contentType = contentType;
    this.items = [];
  }
}

export default TemplateArea;