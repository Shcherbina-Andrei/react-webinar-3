import {codeGenerator} from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: [],
      currentProduct: null,
      totalItems: 0
    }
  }

  async load(currentPage = 0) {
    const response = await fetch(`/api/v1/articles?limit=10&skip=${currentPage * 10}&fields=items(_id, title, price),count`);
    const json = await response.json();
    this.setState({
       ...this.getState(),
       list: json.result.items,
       totalItems: json.result.count
    }, 'Загружены товары из АПИ');
  }

  async loadCurrentProduct(id) {
    const response = await fetch(`api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      currentProduct: json.result
    })
  }
}

export default Catalog;
