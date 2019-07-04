'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Users = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type:STRING(20), allowNull: false },
      password: { type:STRING(30), allowNull: false },
      id_card: { type:STRING(30)},//身份证
      level: { type:INTEGER, allowNull: false },//1.顾客，2.课长，3.部长，4.理事，5，社长
      mobile: { type:STRING(30) },
      email: { type:STRING(30) },
      birthday: { type:STRING(30) },
      icon_url: { type:STRING(100) },
      balance: { type:INTEGER },//积分
      created_at: { type:STRING(30) }
  },{
    timestamps: false,
    tableName: 'users'
  });

  return Users;
};