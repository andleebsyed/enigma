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

export type SaveToLeaderboardResponse = {
  message: string;
  status: boolean;
};

export type Unauthorized = {
  authorized: boolean;
};
export type DataFromLeaderboard = {
  name: string;
  quizName: string;
  score: number;
  __v: number;
  _id: string;
};

export type FetchFromLeaderboardResponse = {
  data: DataFromLeaderboard[];
  message: string;
  status: boolean;
};
