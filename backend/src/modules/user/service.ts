import { ICreateUser, IUpdateUser } from "./interface";
import { IUser, User } from "./schema";

export default new class UserService{
    async findOneEmail(email:string):Promise<IUser | null>{
        return await User.findOne({email})
    }

    async findById(id:string):Promise<IUser | null>{
        return await User.findById(id)
    }

    async findByPhoneNumber(phone_number:string):Promise<IUser | null>{
        return await User.findOne({phone_number});
    }

    async createUser(body:ICreateUser):Promise<IUser>{
        return await User.create({...body})
    }
    
    async updateUser(user:IUser , body:IUpdateUser):Promise<any>{
        return await User.updateOne({id:user.id},{...body})
    }
}