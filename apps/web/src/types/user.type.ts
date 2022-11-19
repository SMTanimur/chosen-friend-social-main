/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IUser {
  _id: string;
  email: string;
  fullName:string
  username:string
  followers:[]
  posts:[]
  following:[]
  likes:[]
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ISignUp {
  email:string,
  fullName:string
  username:string
  confirm_password:string
  password:string
}