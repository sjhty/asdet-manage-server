'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 category 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DECIMAL } = Sequelize;
    await queryInterface.createTable('category', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type:STRING(20), allowNull: false },
      price: { type:DECIMAL(18,2), allowNull: false },//零售价
      vip_price: { type:DECIMAL(18,2), allowNull: false },//课长价
      minister_price: { type:DECIMAL(18,2), allowNull: false },//部长价
      director_price: { type:DECIMAL(18,2), allowNull: false },//理事价
      president_price: { type:DECIMAL(18,2), allowNull: false },//社长价
      created_at: { type:STRING(30) }
    })
  },

  // 在执行数据库降级时调用的函数，删除 category 表
  down: async queryInterface => {
    await queryInterface.dropTable('category');
  },
};
