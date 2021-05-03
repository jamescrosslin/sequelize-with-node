const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Model {}
  Movie.init(
    {
      title: { type: Sequelize.STRING },
      runtime: { type: Sequelize.INTEGER },
      releaseDate: { type: Sequelize.DATEONLY },
      isAvailableOnVHS: { type: Sequelize.BOOLEAN },
    },
    { sequelize }
  );

  return Movie;
};
