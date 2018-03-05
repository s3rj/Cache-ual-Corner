//datatypes needs change with field property

module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define("Chat", {

    chat_session_id: {type: DataTypes.INTEGER},
    userName: DataTypes.STRING,
    messages: DataTypes.STRING,
    chat_time:{ type:DataTypes.DATE, allowNull: false},
    message_color: DataTypes.STRING

  });
  return Chat;
};

//references: {model: 'Main',	key: 'id', deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
   	//}},