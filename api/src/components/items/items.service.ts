import Item from "./item";
import itemsDao from "./items.dao";

class ItemsServices {
  async getAll(): Promise<Item[]> {
    return itemsDao.getAll();
  }

  async getById(id: number): Promise<Item> {
    return itemsDao.getById(id);
  }
}

export default new ItemsServices();
