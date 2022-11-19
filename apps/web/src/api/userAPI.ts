/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponse } from "src/types/common.type"
import { ISignUp } from "src/types/user.type"
import { api } from "./axiosClient"



export const userApi ={
   getProfile: async():Promise<any>=>{
    const path = `/api/users/me`
    return api.get(path,{})
   },
   signUp: async (payload:ISignUp):Promise<IResponse>=>{
      const path = `/api/users/register`
      return api.post(path,payload)
   }
}