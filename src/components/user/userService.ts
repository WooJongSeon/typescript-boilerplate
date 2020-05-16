import { CreateUser } from './user';
import { NOT_FOUND, OK, CREATED, BAD_REQUEST } from 'http-status-codes';
import UserDAL from './userDAL';
import { sequelize } from '../../data/models';
import { userError, userNotFoundError } from './userErrors';

class UserService {
  public static async create(createPayload: CreateUser) {

    const t = await sequelize.transaction();
    const result = await UserDAL.create(createPayload, t);
    await t.commit();
    return {
      data: result,
      status: CREATED,
    };
  }
  public static async getList(offset: any = 0, limit: any = 10) {
    const { result, page } = await UserDAL.getList(offset, limit);
    const quotationList = JSON.parse(JSON.stringify(result));

    return {
      status: OK,
      data: {
        page,
        quotationList,
      },
    };
  }
  public static async get(id: string) {
    const result = await UserDAL.get(id);

    if (!result) {
      return Promise.reject(userNotFoundError);
    }
    return {
      data: result,
      status: OK,
    }
  }
}
export default UserService;
