
/* eslint-disable @typescript-eslint/no-unused-vars */

import { userApi } from "@api/userAPI"
import { useQuery } from "react-query"




export const useUser= ()=>{
   return useQuery(['me'], userApi.getProfile,{
      staleTime:6000
   })
}



