const Controller = require('egg').Controller;

class CategoryController extends Controller {
    async addCategory() {
        const { ctx } = this;
        const result = await ctx.service.category.create(ctx.request.body);
        ctx.body = ctx.helper.resData(result);
    }

    async findCategory() {
        const { ctx } = this;
        const result = await ctx.service.category.find(ctx.request.body);
        ctx.body = ctx.helper.resData(result);
    }
}

module.exports = CategoryController;