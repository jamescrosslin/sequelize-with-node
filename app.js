const { Sequelize, Model } = require("sequelize");

const sequelize = new Sequelize({ dialect: "sqlite", storage: "movies.db" });

class Movie extends Model {}
Movie.init({ title: Sequelize.STRING }, { sequelize });
(async () => {
  //creates or updates table based on Movie model
  //await Movie.sync();
  //will synchronize all tables based on models - follows CREATE TABLE IF NOT EXISTS statement rules
  await sequelize.sync({ force: true }); //force: true  - follow DROP TABLE IF EXISTS which completely deletes the table
  try {
    const movie = await Movie.create({ title: "Toy Story" });
    console.log(movie.toJSON());
  } catch (err) {
    console.error("Error connecting to the database: ", err);
  }
})();
