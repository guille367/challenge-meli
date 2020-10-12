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

export interface ISearchItemResponse {
  author?: IAuthor;
  categories: string[];
  items: IItemSearch[];
}
