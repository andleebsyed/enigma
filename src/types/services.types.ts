export type SignInResponse = {
  status: boolean;
  allowUser: boolean;
  message: string;
  token: string;
  username: string;
};
export type UserData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type UserCredentials = {
  username: string;
  password: string;
};
export type SignUpResponse = {
  status: boolean;
  message: string;
  token: string;
  username: string;
};
export type DuplicateError = {
  status: boolean;
  code: number;
  message: string;
  errorDetail: string;
  existingField: string;
};
export type ServerError = {
  status: boolean;
  errorDetail: string;
  message: string;
};
