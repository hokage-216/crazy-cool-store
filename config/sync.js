const sequelize = require('./connection.js');

async function syncTables() {
    try {
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Failed to synchronize models:', error);
    }
}

module.exports = syncTables;