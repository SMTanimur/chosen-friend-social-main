

import { ChangeEvent } from "react";
import UserAvatar from "./UserAvatar";
import {GrGallery}from 'react-icons/gr'

interface UserChangeAvatarProps {
  avatar: string;
  handleChangeAvatar: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const UserChangeAvatar = ({ avatar, handleChangeAvatar }: UserChangeAvatarProps) => {
  return (
    <div className='flex flex-col items-center gap-y-4 w-full ]'>
      <div className='relative  mx-auto '>
        <div className="flex  items-center w-full h-auto ">
        {
          avatar ? <UserAvatar urlAvatar={avatar} className="  "/> :""
        }
        </div>
        <span className="text-[2rem]"><GrGallery className="text-blue-400"/></span>
        <input
          type='file'
          className='absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer'
          onChange={handleChangeAvatar}
        />
      </div>
    </div>
  );
};

export default UserChangeAvatar;
