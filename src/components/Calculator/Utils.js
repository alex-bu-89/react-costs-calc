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
   price.products_price += product.price.regular * product.quantity
   price.service_price += product.price.service
  })

  price.total_price = price.products_price + price.service_price

  return price
}

/**
 * Format money
 * @param  {Number} n price
 * @param  {String} c numbers after comma
 * @param  {String} d cent separator
 * @param  {String} t thousand separator
 * @return {String} price
 */
export function formatMoney (n, c = 0, d = ',', t = ' '){
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;

   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

export default {
  getProductsByCategories,
  getProductPrice,
  formatMoney,
}
