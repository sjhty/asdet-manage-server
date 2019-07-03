const Service = require('egg').Service;

class CategoryService extends Service {
    async list({ offset = 0, limit = 20 }) {
        return this.ctx.model.Category.findAndCountAll({
          offset,
          limit,
        });
    }

    async create(category) {
        const { ctx } = this;
        return ctx.model.Category.create(category);
    }
}

module.exports = CategoryService;