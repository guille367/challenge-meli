import { IItemsResponse } from "./item";
import itemsDao from "./items.dao";

class ItemsServices {
  async search(query: string): Promise<IItemsResponse[] | void> {
    return itemsDao.search(query);
  }

  async getById(id: string): Promise<IItemsResponse | void> {
    return itemsDao.getById(id);
  }
}

export default new ItemsServices();
