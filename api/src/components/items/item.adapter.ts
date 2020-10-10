import {
  IItem,
  IItemSearch,
  IMeliItemResponse,
  IMeliSearchItemResponse,
  ISearchResponse,
  ItemSearch,
  SearchResponse,
} from "./item.models";

export default class ItemAdapter {
  getItem(meliItem: IMeliItemResponse): IItem {
    const item: IItem = {
      id: meliItem.id,
      title: meliItem.title,
      price: {
        currency: meliItem.currency_id,
        amount: meliItem.price,
        decimals: 0,
      },
      condition: meliItem.condition,
      free_shipping: meliItem.shipping?.free_shipping,
      picture: meliItem.pictures[0]?.url,
      sold_quantity: meliItem.sold_quantity,
      description: meliItem.description.plain_text,
    };

    return item;
  }

  getItemList(meliItem: IMeliSearchItemResponse): ISearchResponse {
    debugger;
    const categories =
      meliItem.available_filters
        .find((filter) => filter.id === "category")
        ?.values.map((v) => v.name) || [];

    const items = meliItem.results.map<IItemSearch>((itemResult) => {
      const item: IItemSearch = {
        id: itemResult.id,
        title: itemResult.title,
        price: {
          currency: itemResult.currency_id,
          amount: itemResult.price,
          decimals: 0,
        },
        condition: itemResult.condition,
        picture: itemResult.thumbnail,
        free_shipping: itemResult.free_shipping,
      };

      return item;
    });

    const itemResponse: ISearchResponse = {
      categories,
      items,
    };

    return itemResponse;
  }
}
