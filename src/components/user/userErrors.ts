import { BAD_REQUEST, NOT_FOUND } from 'http-status-codes';

export const userError = {
  status: BAD_REQUEST,
  api: 'create user',
  message: 'custom error'
}

export const userNotFoundError = {
  status: NOT_FOUND,
  api: 'get user',
  message: 'user not found'
}
