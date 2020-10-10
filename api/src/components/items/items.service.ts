import { IItem, ISearchResponse } from "./item.models";
import itemsDao from "./items.dao";
import ItemAdapter from "./item.adapter";
class ItemsServices {
  itemAdapter: ItemAdapter;

  constructor() {
    this.itemAdapter = new ItemAdapter();
  }

  async search(query: string): Promise<ISearchResponse> {
    const itemsResponse = await itemsDao.search(query);
    const mappedItems = this.itemAdapter.getItemList(itemsResponse);
    return mappedItems;
  }

  async getById(id: string): Promise<IItem> {
    const itemsResponse = await itemsDao.getById(id);
    const mappedItem = this.itemAdapter.getItem(itemsResponse);
    return mappedItem;
  }
}

export default new ItemsServices();
