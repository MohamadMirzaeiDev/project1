import { IUser, User } from "./schema";

export default new class Service{
    async findOneEmail(email:string):Promise<IUser | null>{
        return await User.findOne({email})
    }

    async findById(id:string):Promise<IUser | null>{
        return await User.findById(id)
    }


}