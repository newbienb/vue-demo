export const cartProducts = state => {
    return {
        isLoading: false
    }
  // return state.cart.added.map(({ id, quantity }) => {
  //   const product = state.products.all.find(p => p.id === id)
  //   return {
  //     title: product.title,
  //     price: product.price,
  //     quantity
  //   }
  // })
}