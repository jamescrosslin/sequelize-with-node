const { Sequelize, Model } = require("sequelize");

const sequelize = new Sequelize({ dialect: "sqlite", storage: "movies.db" });

class Movie extends Model {}
Movie.init();
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database successful.");
  } catch (err) {
    console.error("Error connecting to the database: ", err);
  }
})();
