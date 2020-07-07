import { Router } from 'express';
import UserController from './Controller';
import { ReqType, setReqTypeList, setReqTypeOne } from './Middleware';

const router = Router();

/**
 * @api {get} /user/:id 유저 1명 조회
 * @apiName GetOneUser
 * @apiGroup User
 *
 * @apiParam {String}
 *
 * @apiSuccess {Object} 유저 상세
 */
router.get('/:id',
  setReqTypeOne,
  UserController.get);

/**
 * @api {get} /user 유저 목록 요청
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {Object} 유저 목록
 */
router.get('/',
  setReqTypeList,
  UserController.get);

/**
 * @api {post} /user 유저 가입
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiParam {Object}
 *
 * @apiSuccess {Object} 생성한 유저 상세
 */
router.post('/',
  setReqTypeOne,
  UserController.post);

/**
 * @api {post} /user/bulk 유저 여러명 생성
 * @apiName PostBulkUser
 * @apiGroup User
 *
 * @apiParam {Object}
 *
 * @apiSuccess {Object} 생성한 유저 목록
 */
router.post('/bulk',
  setReqTypeList,
  UserController.post);

/**
 * @api {put}
 * @apiName UpdateOneUser
 * @apiGroup User
 *
 * @apiParam {String}
 *
 * @apiSuccess {Object} 업데이트 유저 상세
 */
router.put('/:id',
  setReqTypeOne,
  UserController.put);

/**
 * @api {put}
 * @apiName UpdateManyUser
 * @apiGroup User
 *
 * @apiParam {Object}
 *
 * @apiSuccess {Object} 업데이트 유저 목록
 */
router.put('/',
  setReqTypeList,
  UserController.put);

/**
 * @api {delete}
 * @apiName DeleteOneUser
 * @apiGroup User
 *
 * @apiParam {Object}
 *
 * @apiSuccess {Object}
 */
router.delete('/:id',
  setReqTypeOne,
  UserController.delete);

/**
 * @api {delete}
 * @apiName DeleteManyUser
 * @apiGroup User
 *
 * @apiParam {Object}
 *
 * @apiSuccess {Object} 삭제 목록
 */
router.delete('/',
  setReqTypeList,
  UserController.delete);

/**
 * @api {patch}
 * @apiName PatchOneUser
 * @apiGroup User
 *
 * @apiParam {String}
 *
 * @apiSuccess {Object} 업데이트 유저 상세
 */
router.patch('/:id',
  setReqTypeOne,
  UserController.patch);

/**
 * @api {patch}
 * @apiName PatchManyUser
 * @apiGroup User
 *
 * @apiParam {Object} 유저
 *
 * @apiSuccess {Object} 업데이트 유저목록
 */
router.patch('/',
  setReqTypeList,
  UserController.patch);


export default router;
