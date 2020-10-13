import {
  ICategory,
  IMeliCategoryResponse,
} from "@components/items/items.models";

export default class CategoriesAdapter {
  getCategory(meliCategory: IMeliCategoryResponse): ICategory {
    const category: ICategory = {
      id: meliCategory.id,
      name: meliCategory.name,
      path: meliCategory.path_from_root.map((path) => path.name),
    };

    return category;
  }
}
