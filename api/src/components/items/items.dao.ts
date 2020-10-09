import { IItemsResponse } from "./item";
import axios from "axios";
import { ENDPOINTS } from "@shared/constants";

class ItemsDAO {
  constructor() {}

  async search(query: string): Promise<IItemsResponse[]> {
    const response = await axios.get<IItemsResponse[]>(
      `${ENDPOINTS.SEARCH}?q=${query}`
    );

    return response.data as IItemsResponse[];
  }

  async getById(id: string): Promise<IItemsResponse | void> {
    debugger;
    const response = await axios.get<IItemsResponse>(
      `${ENDPOINTS.ITEMS}/${id}`
    );
    const responseDescription = await axios.get<IItemsResponse>(
      `${ENDPOINTS.ITEMS}/${id}/description`
    );

    const item = {
      ...response.data,
      ...responseDescription.data,
    };

    return item as IItemsResponse;
  }
}

export default new ItemsDAO();
