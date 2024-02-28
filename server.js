async function init() {
  try {
    const express = require('express');
    const routes = require('./routes');
    // import sequelize connection
    const syncTables = require('./config/sync.js');

    await syncTables();

    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(routes);

    // sync sequelize models to the database, then turn on the server
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
}


init();