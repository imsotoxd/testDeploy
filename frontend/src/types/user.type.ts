export interface LoginTypeResponseData {
  message: string;
  token: string;
  user: BasicUserInfo;
}

export interface BasicUserInfo {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  nameCompany: string;
  businessArea: string;
}
