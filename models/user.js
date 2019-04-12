module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 30]
            }
        },
        isAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    User.associate = function (models) {
        User.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return User;
}