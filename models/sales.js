
module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define("Sales", {
    // The email cannot be null, and must be a proper email before creation
    email2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password2: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 
  
  return Sales;
};
