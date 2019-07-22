'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //users
  router.post('/api/users/add',controller.users.addUser);
  router.post('/api/users/find',controller.users.findUser);
  //category
  router.post('/api/category/add',controller.category.addOrUpdateCategory);
  router.post('/api/category/find',controller.category.findCategory);
  //products
  router.post('/api/products/add',controller.products.addOrUpdateProduct);

  //upload
  router.post('/api/upload', controller.upload.upload);
};
