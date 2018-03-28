'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reminder = sequelize.define('Reminder', {
    next: DataTypes.DATE,
    repeat: DataTypes.BIGINT,
  });

  Reminder.associate = function (models) {
    models.Reminder.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Reminder.belongsTo(models.Task, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reminder;
};
