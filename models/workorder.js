module.exports = function (sequelize, DataTypes) {
    var WorkOrder = sequelize.define("WorkOrder", {
        machineID: {
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
        }
    });

    return WorkOrder;
}