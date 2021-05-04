const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Person extends Model {}
  Person.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    { sequelize }
  );
  return Person;
};
