export interface ICategory {
  id: string;
  name: string;
  path: string[];
}

export interface IAuthor {
  name: string;
  lastname: string;
}

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface IItemSearch {
  author?: IAuthor;
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ISearchCategories {
  id: string;
  name: string;
  results: number;
}

export interface ISearchItemResponse {
  author?: IAuthor;
  categories: ISearchCategories[];
  items: IItemSearch[];
}

export interface IItem extends IItemSearch {
  author?: IAuthor;
  sold_quantity: number;
  description: string;
  category_id: string;
}
