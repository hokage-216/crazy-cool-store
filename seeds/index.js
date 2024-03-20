const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const seedAll = async () => {
  try {
    // Add Category seeds
    const categoryData = await seedCategories();
    console.log(categoryData);
    console.log('----- CATEGORIES SEEDED -----');

    // Add Product seeds
    const productData = await seedProducts();
    console.log(productData);
    console.log('----- PRODUCTS SEEDED -----');

    // Add Tag seeds
    const tagData = await seedTags();
    console.log(tagData);
    console.log('----- TAGS SEEDED -----');

    // Add Product Tag seeds
    const productTagData = await seedProductTags();
    console.log(productTagData);
    console.log('----- PRODUCT TAGS SEEDED -----');

    // Exit process
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit with error code
  }
};

module.exports = seedAll;
