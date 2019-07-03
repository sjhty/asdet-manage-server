'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async addUser() {
        const { ctx } = this;
        const result = await ctx.service.users.create(ctx.request.body);
        ctx.body = ctx.helper.resData(result);
    }

    async findUser() {
        const { ctx } = this;
        const result = await ctx.service.users.find(ctx.request.body);
        ctx.body = ctx.helper.resData(result);
    }
}

module.exports = UserController;