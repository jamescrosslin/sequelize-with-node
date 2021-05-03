const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Model {}
  Movie.init(
    {
      //following id is unnecessary, but this is good for understanding how to implement primaryKey values and autoIncrement
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false, // disallow null
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false, // disallow null
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false, // disallow null
      },
      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        allowNull: false, // disallow null
        defaultValue: false, // set default value
      },
    },
    { sequelize }
  );

  return Movie;
};
