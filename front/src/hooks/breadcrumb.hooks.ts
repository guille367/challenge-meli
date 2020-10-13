import { useCallback, useState } from "react";
import { ICategory } from "src/models/items.models";
import AxiosInstance from "../shared/axiosConfig";

const searchCategory = async (id: string): Promise<ICategory> => {
  return (await AxiosInstance.get<ICategory>(`/categories/${id}`)).data;
};

export const useSearchCategory = () => {
  const [categoryData, setCategoryData] = useState<ICategory>();

  const execute = async (id: string) => {
    try {
      const response = await searchCategory(id);
      setCategoryData(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    categoryData,
    execute: useCallback(execute, []),
  };
};
