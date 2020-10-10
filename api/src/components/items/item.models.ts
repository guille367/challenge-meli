interface IItemSearchResponse {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

interface IItem extends IItemSearchResponse {
  condition: string;
  free_shipping: boolean;
}

interface IAuthor {
  name: string;
  lastname: string;
}

class ItemSearchResponse implements IItemSearchResponse {
  id: string = "";
  title: string = "";
  price: IPrice = new Price();
  picture: string = "";
  condition: string = "";
  free_shipping: boolean = false;
}

class Author implements IAuthor {
  name: string = "";
  lastname: string = "";
}

class Item extends ItemSearchResponse {
  sold_quantity: number = 0;
  description: string = "";
}

class Price implements IPrice {
  currency: string = "";
  amount: number = 0;
  decimals: number = 0;
}

/////////////////// BY ID ///////////////////////

export interface IItemResponse {
  author: IAuthor;
  item: IItem;
}

export class ItemResponse implements IItemResponse {
  author: IAuthor = new Author();
  item: IItem = new Item();
}

/////////////////// SEARCH BY QUERY ///////////////////////

export interface ISearchResponse {
  categories: string[];
  items: IItemResponse[];
}

export class SearchResponse implements ISearchResponse {
  categories: string[] = [];
  items: IItemResponse[] = [];
}
