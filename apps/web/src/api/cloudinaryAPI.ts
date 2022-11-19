import axios from "axios";
import { ICloudinaryUpload } from "src/types/common.type";


const axiosCloudinary = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/smtanimur",
});

axiosCloudinary.interceptors.response.use(
  (response) => {
    const result = { ...response.data, status: response.status };
    return result;
  },
  ({ response }) => {
    const result = { ...response.data, status: response.status };
    return Promise.reject(result);
  },
);

export const configCloudinaryAPI = {
  uploadImage: (payload: FormData): Promise<ICloudinaryUpload> => {
    const path = `/image/upload`;
    return axiosCloudinary.post(path, payload);
  },
};
