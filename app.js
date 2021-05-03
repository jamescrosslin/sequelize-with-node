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
    const movieData = [
      ["Toy Story", 420, "1946-03-23", true],
      ["Jaws", 69, "2034-09-14", false],
      ["LORD of the Rings", 42069, "1969-04-20"],
    ];
    const movies = await Promise.all(
      movieData.map(([title, runtime, releaseDate, isAvailableOnVHS]) =>
        Movie.create({ title, runtime, releaseDate, isAvailableOnVHS })
      )
    );
    console.log(movies.map((movie) => movie.toJSON()));
  } catch (err) {
    console.error("Error connecting to the database: ", err);
  }
})();
