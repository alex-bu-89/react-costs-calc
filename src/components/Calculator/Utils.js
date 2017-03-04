export let getProductsByCategories = (categories, products) => {
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

export default {
  getProductsByCategories
}
