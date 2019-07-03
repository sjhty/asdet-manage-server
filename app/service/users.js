const Service = require('egg').Service;

class UserService extends Service {
    async list({ offset = 0, limit = 10 }) {
        return this.ctx.model.Users.findAndCountAll({
          offset,
          limit,
          //order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
        });
    }

    async find(user) {
        const whereObj = {
            name: user.name,
            password: user.password
        }
        const result = await this.ctx.model.Users.findOne({where:whereObj});
        return result;
    }

    async create(user) {
        const { ctx } = this;
        return ctx.model.Users.create(user);
    }

    async update({ id, updates }) {
        const user = await this.ctx.model.Users.findByPk(id);
        if (!user) {
          this.ctx.throw(404, 'user not found');
        }
        return user.update(updates);
    }
    
    async del(id) {
        const user = await this.ctx.model.Users.findByPk(id);
        if (!user) {
            this.ctx.throw(404, 'user not found');
        }
        return user.destroy();
    }
}

module.exports = UserService;