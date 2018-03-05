//datatypes needs change with field property

module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
  	
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Login;
};
