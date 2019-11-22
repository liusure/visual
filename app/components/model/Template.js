class Template {
  item;

  constructor({id,name, descContent, ctype}) {
    this.id = id;
    this.name = name;
    this.descContent = descContent;
    this.ctype = ctype;
    this.items = [];
  }
}

export default Template;