module.exports = function (sequelize, DataTypes) {
    var WorkOrder = sequelize.define("WorkOrder", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        machine: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        section: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    WorkOrder.associate = function (models) {
        WorkOrder.belongsTo(models.Machine, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return WorkOrder;
}