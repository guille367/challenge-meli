import { IItemResponse, ISearchResponse } from "./item.models";
import itemsDao from "./items.dao";
import { mapItem } from "./item.mapper";
class ItemsServices {
  async search(query: string): Promise<ISearchResponse> {
    return itemsDao.search(query);
  }

  async getById(id: string): Promise<IItemResponse> {
    const itemsResponse = await itemsDao.getById(id);
    const mappedItem = mapItem(itemsResponse);
    return mappedItem;
  }
}

export default new ItemsServices();
