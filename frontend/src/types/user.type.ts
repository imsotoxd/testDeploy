
export interface LoginTypeResponseData {
  message: string;
  token: string;
  user: BasicUserInfo
}

export interface BasicUserInfo {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}