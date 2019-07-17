const Controller = require('egg').Controller;

class CategoryController extends Controller {
    async addOrUpdateCategory() {
        const { ctx } = this;
        const item = ctx.request.body;
        if (item.id) {
            ctx.body = ctx.helper.resData(await ctx.service.category.updateCategory(item.id, item));
        } else {
            ctx.body = ctx.helper.resData(await ctx.service.category.create(item));
        }
    }

    async findCategory() {
        const { ctx } = this;
        const result = await ctx.service.category.list();
        ctx.body = ctx.helper.resData(result);
    }
}

module.exports = CategoryController;