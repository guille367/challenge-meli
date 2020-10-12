import { useCallback, useState } from "react";
import { ISearchItemResponse } from "../models/items.models";
import AxiosInstance from "../shared/axiosConfig";

const searchItems = async (term: string): Promise<ISearchItemResponse> => {
  return (await AxiosInstance.get<ISearchItemResponse>(`/items?q=${term}`))
    .data;
};

export const useSearchItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<ISearchItemResponse>();

  const execute = async (term: string) => {
    try {
      setIsLoading(true);
      const response = await searchItems(term);
      setData(response);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []),
  };
};
