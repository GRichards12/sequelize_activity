const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    rating: {
        type: DataTypes.INTEGER,
    }
});

// const User = sequelize.define("User", {
//     User:{
//         type:DataTypes.STRING,
//     }
// })

module.exports = Movie;