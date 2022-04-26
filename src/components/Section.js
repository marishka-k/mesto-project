export default class Section {
  // Первым параметром конструктора принимает объект с двумя свойствами: items и renderer.
  // Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса. Вы получаете эти данные от Api.
  // Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
  // Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({items, renderer}, selectorContainer) {
    this._items = items; // получаем с api
    this._renderer = renderer; // получаем с класса карточек
    this._selectorContainer = document.querySelector(selectorContainer);
  }
  // Содержит публичный метод, который отвечает за отрисовку всех элементов.
  // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  // Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(item, method) {
    if (method === 'append') {
      this._selectorContainer.append(item);
    } else this._selectorContainer.prepend(item);
  }
}
