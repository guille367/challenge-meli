import {
  IItem,
  IItemSearch,
  IMeliItemResponse,
  IMeliSearchItemResponse,
  ItemSearch,
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

  getItemList(meliItem: IMeliSearchItemResponse): IItemSearch {
    const itemResponse: IItemSearch = new ItemSearch();

    return itemResponse;
  }
}
