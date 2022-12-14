/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IResponse {
  data?: any;
  message: string;
  status: number;
  success: boolean;
  [key: string]: any;
}


export interface ICloudinaryUpload {
  asset_id: string;
  bytes: number;
  created_at: string;
  format: string;
  height: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  url: string;
  version_id: string;
  width: number;
}