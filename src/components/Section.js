export default class Section {
  constructor({items, renderer}, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._selectorContainer = document.querySelector(selectorContainer);
  }

  // Содержит публичный метод, который отвечает за отрисовку всех элементов.
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  // Содержит публичный метод, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(item, method) {
    if (method === 'append') {
      this._selectorContainer.append(item);
    } else this._selectorContainer.prepend(item);
  }
}
