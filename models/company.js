module.exports = function(sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
    });


    Company.associate = function(models) {
        Company.hasMany(models.User);
    }
    return Company;
}