export const addItemToCart = (cartItems, newCartItem) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === newCartItem.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      else return cartItem;
    });
  }
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existing.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
