import { Random} from 'mockjs'

interface IUserProps{
    id:string,
    isLogin?:boolean,
    name?:string,
    password?:string
}
const user: Array<IUserProps> = [];

for (let i = 0; i < 10; i++){
    user.push({
        id: Random.id(),
        isLogin: Random.boolean(),
        name: Random.name(),
        password:Random.id()
    })
}




export default {
    // 查询
    getUserList: () => {
        return {
            data: user,
            status:200
        }
    }
}
