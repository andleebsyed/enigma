import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
type SignInResponse = {
  status: boolean;
  allowUser: boolean;
  message: string;
  token: string;
  username: string;
};
type UserData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type UserCredentials = {
  username: string;
  password: string;
};
export type SignUpResponse = {
  status: boolean;
  message: string;
  token: string;
};
export type duplicateError = {
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
export function AuthHeaderHandler(token: string) {
  axios.interceptors.request.use((req) => {
    req.headers.authorization = token;
    console.log("token added for further requests");
    return req;
  });
}
export function AxiosErrorHandler() {
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 404) {
        throw new Error(`${err.config.url} not found`);
      }
      throw err;
    }
  );
}
export async function UserSignUp(
  userData: UserData
): Promise<SignUpResponse | ServerError | duplicateError> {
  try {
    const userDetails = {
      userDetails: {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      },
    };

    const response = await axios.post<SignUpResponse>(
      BASE_URL + "/user/signup",
      userDetails
    );
    if (response.data.status) {
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }

    return {
      status: false,
      message: "something went wrong",
      errorDetail: error?.message,
    };
  }
}

export async function UserSignIn(
  userCredentials: UserCredentials
): Promise<SignInResponse | ServerError> {
  try {
    const userDetails = {
      userDetails: {
        username: userCredentials.username,
        password: userCredentials.password,
      },
    };
    const response = await axios.post(BASE_URL + "/user/signin", userDetails);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }

    return {
      status: false,
      message: "something went wrong",
      errorDetail: error?.message,
    };
  }
}
