const Service = require('egg').Service;
const ProductCondition = require('./condition/productsCondition')

class ProductService extends Service {
    /**
     * 获取所有商品和商品分类下的价格
     * @param {*} id id=undefined 查询所有
     */
    async findList(query) {
        const { ctx, app } = this;
        const Op = app.Sequelize.Op;
        const whereObj = ProductCondition.sqlCondition(Op,query);

        let queryObj = {
                include: [{
                    model: this.ctx.model.Category,
                    as: 'category',
                    attributes: ['name', 'price', 'minister_price', 'director_price', 'president_price'],
                    where: whereObj
                }]
            };
        return await ctx.model.Products.findAll(queryObj)
    }

    /**
     * 添加商品
     * @param {*} items 
     */
    async addProduct(items) {
        const { ctx } = this;
        return await ctx.model.Products.create(items);
    }

    /**
     * 修改商品属性
     * @param {*} id 
     * @param {*} item 
     */
    async updateProducts( id, item) {
        const { ctx } = this;
        const products = await ctx.model.Products.findByPk(id);
        let result='';

        if (!products) {
            ctx.status = 404;
        } else {
            result = await products.update(item)
        }

        return result;
    }
}

module.exports = ProductService;