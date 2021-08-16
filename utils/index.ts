type MLItem = {
  [key: string]: any;
};

type Item = {
  [key: string]: any;
};

const parseMLProductToItem = (item: MLItem): Item => ({
  id: item.id,
  title: item.title,
  price: {
    currrency: item.currency_id || item.prices?.presentation?.display_currency,
    amount: parseInt(item.price, 10),
    decimals: parseInt(item.price.toString().split('.')[1]) || 0,
  },
  picture: item.thumbnail,
  free_shipping: item.shipping.free_shipping,
  condition: item.condition,
  state_name: item.address?.state_name,
  sold_quantity: item.sold_quantity,
});

const displayPrice = (price) => {
  const number =
    price.amount +
    price.decimals / Math.pow(10, price.decimals.toString().length);
  return number;
};

export { parseMLProductToItem, displayPrice };
