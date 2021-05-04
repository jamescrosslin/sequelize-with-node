const {
  models: { Movie, Person },
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
    const personData = [["Tom", "Hanks"]];
    const data = await Promise.all([
      ...movieData.map(([title, runtime, releaseDate, isAvailableOnVHS]) =>
        Movie.create({ title, runtime, releaseDate, isAvailableOnVHS })
      ),
      ...personData.map(([firstName, lastName]) =>
        Person.create({ firstName, lastName })
      ),
    ]);
    console.log(data.map((movie) => movie.toJSON()));
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      const errors = err.errors.map((error) => error.message);
      return console.error("Validation errors: ", errors);
    }
    throw err;
  }
})();
