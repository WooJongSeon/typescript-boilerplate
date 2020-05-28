## Typescript boilerplate api
<hr>

## 설명
swagger 문서는 api-docs.yaml에 작성하면 됩니다.

components 안에 도메인 단위로 API, DAL, Controller, Error, 를 만듭니다.

test 폴더 안에 test 를 작성합니다.

config 폴더 안에 데이터베이스 연결과 관련된 내용이 있습니다.

data 폴더 안에 데이터베이스 모델이 있습니다.

utils 에는 로그저장, 요청 핸들러, 스웨거 설정, validation 이 들어있습니다.

validater 는 express-validator를 사용합니다.

로그는 log 폴더에 지속적으로 기록됩니다.

TODO: sinon 모듈 써서 유닛 테스트 작성하기
 - sequelize 모듈 - DAL 부분을 함수를 모킹하고 서비스 단위로 테스트 하기

## 프로젝트 세팅

1. npm install

2. .env 파일 전달 받기

3. local 에 mysql 이 없는 경우 설치

4. npm run start

(mysql table은 없으면 자동으로 생성됩니다.)

5. 테스트 코드를 실행하려면 appconfig.ts를 보고 테스트용 스키마를 만들어야 합니다.
