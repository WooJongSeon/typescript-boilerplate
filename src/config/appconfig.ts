
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
};

const winiston = {
  logpath: 'partner/logs/',
};
export {
  app, dbConfig, winiston
};
