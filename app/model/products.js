'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Products = app.model.define('products', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type:STRING(200), allowNull: false },
    category_id: { type:INTEGER, allowNull: false },//分类ID
    img_url: { type:STRING(200)},//商品图片地址
    color: { type:STRING(50) },//商品颜色
    style: { type:STRING(30) },//商品型号
    size: { type:STRING(30) },//商品尺寸
    stock: { type:STRING(30), allowNull: false },//商品库存
    created_at: { type:DATE }
  },{
    timestamps: false,
    tableName: 'products'
  });

  return Products;
};