export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      const htmlElement = this._renderer(item);
      this.addItem(htmlElement);
    });
  }
}
