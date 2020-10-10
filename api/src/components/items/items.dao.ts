import { IItemResponse, ISearchResponse } from "./item.models";
import axios from "axios";
import { ENDPOINTS } from "@shared/constants";

class ItemsDAO {
  constructor() {}

  async search(query: string): Promise<ISearchResponse> {
    const response = await axios.get<ISearchResponse>(
      `${ENDPOINTS.SEARCH}?q=${query}`
    );

    return response.data as ISearchResponse;
  }

  async getById(id: string): Promise<IItemResponse | void> {
    const response = axios.get<IItemResponse>(`${ENDPOINTS.ITEMS}/${id}`);
    const responseDescription = axios.get<IItemResponse>(
      `${ENDPOINTS.ITEMS}/${id}/description`
    );
    const [item, description] = await Promise.all([
      response,
      responseDescription,
    ]);

    const fullItem = {
      ...item.data,
      ...description.data,
    };

    return fullItem as IItemResponse;
  }
}

export default new ItemsDAO();
