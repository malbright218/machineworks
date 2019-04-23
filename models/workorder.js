module.exports = function (sequelize, DataTypes) {
    var WorkOrder = sequelize.define("WorkOrder", {
        machineSpec: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        textBody: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        postedBy: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        length: {
            type: DataTypes.TEXT,
            allowNull: false
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