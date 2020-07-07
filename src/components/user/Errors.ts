import { BAD_REQUEST, NOT_FOUND } from 'http-status-codes';

export const writeCustomError = {
  status: BAD_REQUEST,
  api: 'create user',
  message: 'custom error'
}
