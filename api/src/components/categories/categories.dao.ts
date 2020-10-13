import axios from "axios";
import { ENDPOINTS } from "@shared/constants";
import { IMeliCategoryResponse } from "@components/items/items.models";

class CategoriesDAO {
  constructor() {}

  async getById(id: string): Promise<IMeliCategoryResponse> {
    const response = await axios.get<IMeliCategoryResponse>(
      `${ENDPOINTS.CATEGORIES}/${id}`
    );

    return response.data as IMeliCategoryResponse;
  }
}

export default CategoriesDAO;
