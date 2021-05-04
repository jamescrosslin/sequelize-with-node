const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Model {}
  Movie.init(
    //Attributes object
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
        validate: {
          notEmpty: {
            //custom error message
            msg: "Please provide a value for 'title'",
          },
          notNull: {
            msg: "Please provide a value for 'title'",
          },
        },
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false, // disallow null
        validate: {
          notNull: {
            msg: "Please provide a value for 'runtime'",
          },
          min: {
            args: 1,
            msg: 'Please provide a value greater than "0" for "runtime"',
          },
        },
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false, // disallow null
        validate: {
          notNull: {
            msg: "Please provide a value for 'releaseDate'",
          },
          isAfter: "1895-12-27",
        },
      },
      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        allowNull: false, // disallow null
        defaultValue: false, // set default value
      },
    },
    //Model options object
    { sequelize }
  );

  return Movie;
};
