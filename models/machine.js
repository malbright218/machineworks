module.exports = function(sequelize, DataTypes) {
    var Machine = sequelize.define("Machine", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        serial: {
            type: DataTypes.STRING,
        }
    })

    Machine.associate = function(models) {
        Machine.hasMany(models.WorkOrder);
    }


   

    return Machine;
}