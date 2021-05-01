const {
  models: { Movie },
  sequelize,
} = require("./db");

(async () => {
  //creates or updates table based on Movie model
  //await Movie.sync();
  //will synchronize all tables based on models - follows CREATE TABLE IF NOT EXISTS statement rules
  await sequelize.sync({ force: true }); //force: true  - follow DROP TABLE IF EXISTS which completely deletes the table
  try {
    const movieTitles = ["Toy Story", "Jaws", "LORD of the Rings"];
    const movies = await Promise.all(
      movieTitles.map((title) => Movie.create({ title }))
    );
    console.log(movies.map((movie) => movie.toJSON()));
  } catch (err) {
    console.error("Error connecting to the database: ", err);
  }
})();
