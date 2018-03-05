//datatypes needs change with field property

module.exports = function(sequelize, DataTypes) {
  var Main = sequelize.define("Main", {
    chat_subject : {type: DataTypes.STRING, default: "casual"},
   	user_count : {type:DataTypes.INTEGER,allowNull: false },
    message_count: {type:DataTypes.INTEGER, allowNull: false}
  });
  return Main;
};

