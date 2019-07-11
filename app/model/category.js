'use strict';

module.exports = app => {
    const { INTEGER, STRING, DECIMAL, DATE } = app.Sequelize;

    const Category = app.model.define('category', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type:STRING(20), allowNull: false },
        price: { type:DECIMAL(18,2), allowNull: false },//零售价
        vip_price: { type:DECIMAL(18,2), allowNull: false },//课长价
        minister_price: { type:DECIMAL(18,2), allowNull: false },//部长价
        director_price: { type:DECIMAL(18,2), allowNull: false },//理事价
        president_price: { type:DECIMAL(18,2), allowNull: false },//社长价
        created_at: { type:DATE }
    },{
        timestamps: false,
        tableName: 'category'
    });

    return Category;
};