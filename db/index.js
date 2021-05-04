const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  // logging: false, //disable logging
  // global options - will apply to all models
  // define: {
  //   freezeTableName: true,
  //   timestamps: false,
  // },
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require("./models/movie.js")(sequelize);
db.models.Person = require("./models/person.js")(sequelize);

module.exports = db;
