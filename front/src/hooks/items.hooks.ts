import { useCallback, useState } from "react";
import { IItem, ISearchItemResponse } from "../models/items.models";
import AxiosInstance from "../shared/axiosConfig";

export const searchItems = async (
  term: string
): Promise<ISearchItemResponse> => {
  return (await AxiosInstance.get<ISearchItemResponse>(`/items?q=${term}`))
    .data;
};

export const useSearchItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ISearchItemResponse>();

  const execute = async (term: string) => {
    try {
      setIsLoading(true);
      const response = await searchItems(term);
      setData(response);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []),
  };
};

export const searchItem = async (id: string): Promise<IItem> => {
  return (await AxiosInstance.get<IItem>(`/items/${id}`)).data;
};

export const useSearchItemDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IItem>();

  const execute = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await searchItem(id);
      setData(response);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []),
  };
};
