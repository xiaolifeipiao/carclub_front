import Mock from 'mockjs'
import userData from "./data/userData";

// 用户请求
Mock.mock('api/user/login','get',userData.getUserList)


export default Mock