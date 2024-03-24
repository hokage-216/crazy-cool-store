const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const syncTables = require('../config/sync');
const seedProductTags = require('./product-tag-seeds');

const seedAll = async () => {
  
  try {
    // Sync Tables
    await syncTables();
    console.log('----- DATABASE SYNCED -----');

    // Add Category seeds
    await seedCategories();
    console.log('----- CATEGORIES SEEDED -----');

    // Add Product seeds
    await seedProducts();
    console.log('----- PRODUCTS SEEDED -----');

    // Add Tag seeds
    await seedTags();
    console.log('----- TAGS SEEDED -----');

    // Add Product Tag seeds
    await seedProductTags();
    console.log('----- PRODUCT TAGS SEEDED -----');

    // Exit process
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit with error code
  }
};

seedAll();

module.exports = seedAll;
