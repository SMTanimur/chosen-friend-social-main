/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from "./axiosClient";



export const authAPI = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signIn:async (payload:object): Promise<any> => {
    const path = `/api/auth/login`;
    return await api.post(path, payload);
  },
  signUp:async (payload: object): Promise<any> => {
    const path = `/api/auth/sign-up`;
    return await api.post(path, payload);
  },
 
};
