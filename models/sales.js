
module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define("Sales", {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    state: {
      type: DataTypes.STRING
    },
    city:DataTypes.STRING,
    date:DataTypes.STRING,
    zipcode:DataTypes.STRING
    
  });
 
  Sales.associate = function(models) {
    Sales.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }
    });
  }

  return Sales;
};
