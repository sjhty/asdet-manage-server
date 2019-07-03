/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561962052718_471';

  // add your middleware config here
  config.middleware = [];

  //db
  config.sequelize = {
    username: 'root',
    password: '12345678',
    dialect: 'mysql',
    host: '49.234.12.142',
    port: 3306,
    database: 'asdet_data_test',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
