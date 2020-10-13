export interface IAuthor {
  name: string;
  lastname: string;
}

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface IItem extends IItemSearch {
  author?: IAuthor;
  sold_quantity: number;
  description: string;
  category_id: string;
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

export interface ISearchResponse {
  author?: IAuthor;
  categories: ISearchCategories[];
  items: IItemSearch[];
}

export class Price implements IPrice {
  currency: string = "";
  amount: number = 0;
  decimals: number = 0;
}

export class ItemSearch implements IItemSearch {
  id: string = "";
  title: string = "";
  price: IPrice = new Price();
  picture: string = "";
  condition: string = "";
  free_shipping: boolean = false;
}

export class Item extends ItemSearch implements IItem {
  sold_quantity: number = 0;
  description: string = "";
}

export class SearchResponse implements ISearchResponse {
  author?: IAuthor;
  categories: ISearchCategories[] = [];
  items: IItemSearch[] = [];
}

export interface IMeliItemDescriptionResponse {
  plain_text: string;
  text: string;
}

export interface IMeliCategoryResponse {
  id: string;
  name: string;
  results: number;
}

export interface IMeliItemResponse {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  decimals: number;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  pictures: [
    {
      url: string;
    }
  ];
  sold_quantity: number;
  description: IMeliItemDescriptionResponse;
}

export interface IMeliSearchItem {
  category_id: string;
  id: string;
  title: string;
  currency_id: string;
  price: number;
  decimals: number;
  thumbnail: string;
  condition: string;
  free_shipping: boolean;
}

export interface IMeliSearchItemResponse {
  available_filters: [
    {
      id: string;
      name: string;
      values: [
        {
          id: string;
          name: string;
          results: number;
        }
      ];
    }
  ];
  results: IMeliSearchItem[];
}
