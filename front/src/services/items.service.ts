import { ISearchItemResponse } from "../models/items.models";
import AxiosInstance from "../shared/axiosConfig";

export const getItemByQuery = async (
  term: string
): Promise<ISearchItemResponse> => {
  return (await AxiosInstance.get<ISearchItemResponse>(`/items?q=${term}`))
    .data;
};
