import { PATH } from "./path";
import {  FaHome, FaUser } from "react-icons/fa";
import { BsBookmarkFill, BsSearch} from "react-icons/bs";
import { useUser } from "@Hooks/useUser";


 export const useNavLink= ()=>{
   const {data:user}=useUser()
   const NavLink =[
    {
      name:'Home',
      path:PATH.home,
      Icon:<FaHome/>
    },
    {
      name:'Search',
      path:PATH.search,
      Icon:<BsSearch/>
    },
    {
      name:'BookMarks',
      path:PATH.bookmark,
      Icon:<BsBookmarkFill/>
    },
    {
      name:'Profile',
      path:`/profile/${user?.username}`,
      Icon:<FaUser/>
    }
  ]
  return {
    NavLink
  }
 }


export const defaultUserAvatar = "/images/default-avatar.png";