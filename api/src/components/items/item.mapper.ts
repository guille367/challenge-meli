import {
  IItemResponse,
  ISearchResponse,
  ItemResponse,
  SearchResponse,
} from "./item.models";

export const mapItem = (data: any): IItemResponse => {
  const item: IItemResponse = new ItemResponse();

  const mappedItem = Object.keys(item).reduce((item, prop) => {
    return {
      ...item,
      [prop]: data[prop],
    };
  }, {}) as ItemResponse;
  debugger;
  return mappedItem;
};

export const mapSearch = (data: any): ISearchResponse => {
  const items: SearchResponse = new SearchResponse();

  return items;
};
