
const app: any = {
  port: process.env.DEV_APP_PORT || 3000,
  appName: process.env.APP_NAME || 'name',
  env: process.env.NODE_ENV || 'development',
};

const dbConfig: any = {
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'woojongseon',
  password: process.env.DB_PASS || '1111',
  username: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
};

const testDBConfig: any = {
  port: 3306,
  database: 'test',
  password: '1111',
  username: 'root',
  host: '127.0.0.1',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
}
const winiston = {
  logpath: 'user/logs/',
};
export {
  app, dbConfig, winiston, testDBConfig
};
