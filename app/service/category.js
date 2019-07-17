const Service = require('egg').Service;

class CategoryService extends Service {
    async list() {
        const { ctx } = this;
        return ctx.model.Category.findAndCountAll();
    }

    async create(category) {
        const { ctx } = this;
        return ctx.model.Category.create(category);
    }

    /**
     * 修改分类
     * @param {*} id 
     * @param {*} item 
     */
    async updateCategory( id, item) {
        const { ctx } = this;
        const category = await ctx.model.Category.findByPk(id);
        let result='';

        if (!category) {
            ctx.status = 404;
        } else {
            result = await category.update(item)
        }

        return result;
    }
}

module.exports = CategoryService;