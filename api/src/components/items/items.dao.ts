import Item from "./item";

class ItemsDAO {
  async getAll(): Promise<Item[]> {
    return [new Item()];
  }

  async getById(id: number): Promise<Item> {
    return new Item();
  }
}

export default new ItemsDAO();
