import { useCallback, useState } from "react";
import { ICategory } from "src/models/items.models";
import AxiosInstance from "../shared/axiosConfig";

export const searchCategory = async (id: string): Promise<ICategory> => {
  return (await AxiosInstance.get<ICategory>(`/categories/${id}`)).data;
};

export const useSearchCategory = () => {
  const [categoryData, setCategoryData] = useState<ICategory>();
  const [error, setError] = useState<string>("");

  const execute = async (id: string) => {
    try {
      const response = await searchCategory(id);
      setCategoryData(response);
      return response;
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    error,
    categoryData,
    execute: useCallback(execute, []),
  };
};
