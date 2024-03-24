const sequelize = require('./connection.js');

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

const syncTables = async () => {
    try {
        await sequelize.sync({ force: true });
        await testConnection();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Failed to synchronize models:', error);
    }
}

module.exports = syncTables;