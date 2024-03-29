const { DataTypes } = require('sequelize');

const User = (sequelize) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        profile_img: {
            type: DataTypes.STRING(255),
        },
        user_type: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    });
};

module.exports = User;
