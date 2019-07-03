'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/users/add',controller.users.addUser);
  router.post('/api/users/find',controller.users.findUser);
  router.post('/api/category/add',controller.category.addCategory);
  router.post('/api/category/find',controller.category.findCategory);
};
