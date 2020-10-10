import {
  IItem,
  IMeliItemDescriptionResponse,
  IMeliItemResponse,
  IMeliSearchItemResponse,
} from "./item.models";
import axios from "axios";
import { ENDPOINTS } from "@shared/constants";

class ItemsDAO {
  constructor() {}

  async search(query: string): Promise<IMeliSearchItemResponse> {
    const response = await axios.get<IMeliSearchItemResponse>(
      `${ENDPOINTS.SEARCH}?q=${query}`
    );

    return response.data as IMeliSearchItemResponse;
  }

  async getById(id: string): Promise<IMeliItemResponse> {
    const response = axios.get<IMeliItemResponse>(`${ENDPOINTS.ITEMS}/${id}`);
    const responseDescription = axios.get<IMeliItemDescriptionResponse>(
      `${ENDPOINTS.ITEMS}/${id}/description`
    );

    const [item, description] = await Promise.all([
      response,
      responseDescription,
    ]);

    const fullItem = {
      ...item.data,
      description: description.data,
    };

    return fullItem as IMeliItemResponse;
  }
}

export default new ItemsDAO();
