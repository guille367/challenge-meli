import { ICategory } from "@components/items/items.models";
import CategoriesAdapter from "./categories.adapter";
import CategoriesDAO from "./categories.dao";

class CategoriesService {
  categoriesDao: CategoriesDAO;
  categoriesAdapter: CategoriesAdapter;

  constructor() {
    this.categoriesDao = new CategoriesDAO();
    this.categoriesAdapter = new CategoriesAdapter();
  }

  async getById(id: string): Promise<ICategory> {
    const categoryResponse = await this.categoriesDao.getById(id);
    const mappedCategory = this.categoriesAdapter.getCategory(categoryResponse);
    return mappedCategory;
  }
}

export default CategoriesService;
