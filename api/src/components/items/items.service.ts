import { IItem, ISearchResponse } from "./item.models";
import ItemAdapter from "./item.adapter";
import ItemsDAO from "./items.dao";
class ItemsService {
  itemsDao: ItemsDAO;
  itemAdapter: ItemAdapter;

  constructor() {
    this.itemsDao = new ItemsDAO();
    this.itemAdapter = new ItemAdapter();
  }

  async search(query: string): Promise<ISearchResponse> {
    const itemsResponse = await this.itemsDao.search(query);
    const mappedItems = this.itemAdapter.getItemList(itemsResponse);
    return mappedItems;
  }

  async getById(id: string): Promise<IItem> {
    const itemsResponse = await this.itemsDao.getById(id);
    const mappedItem = this.itemAdapter.getItem(itemsResponse);
    return mappedItem;
  }
}

export default ItemsService;
