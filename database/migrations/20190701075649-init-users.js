'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('users', {
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
    })
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
