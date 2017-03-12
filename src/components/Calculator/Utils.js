/**
 * Get products sorting by categories
 * @param  {array} categories
 * @param  {array} products
 * @return {array} products with categories
 */
export function getProductsByCategories(categories, products) {

  let result = []

  categories.forEach( (category) => {
    let newCategory = {}

    newCategory.products = products.filter( (product, i) => {
      if (product.category.id === category) {
        newCategory.id = product.category.id
        newCategory.title = product.category.title

        return product
      }
    })
    result.push(newCategory)
  })

  return result
}

/**
 * Calculate product price
 * @param  {array} products array of products
 * @return {obj} obj with prices
 */
export function getProductPrice(products) {

  let price = {
   products_price: 0,
   service_price: 0,
   total_price: 0
  }

  _.map(products, (product) => {
   price.products_price += product.price.total
   price.service_price += product.price.service
  })

  price.total_price = price.products_price + price.service_price

  return price
}

export default {
  getProductsByCategories,
  getProductPrice
}
