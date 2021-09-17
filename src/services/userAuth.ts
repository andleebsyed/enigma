import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
import { CATEGORYDATA, QUIZCATEGORIES } from "../types/data.types";
import {
  DuplicateError,
  ServerError,
  SignInResponse,
  SignUpResponse,
  UserCredentials,
  UserData,
} from "../types/services.types";

export function setupAuthHeaderForServiceCalls(token: string | null) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}

export async function UserSignUp(
  userData: UserData
): Promise<SignUpResponse | ServerError | DuplicateError> {
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
    const response = await axios.post<SignInResponse>(
      BASE_URL + "/user/signin",
      userDetails
    );
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

export async function QuizData(): Promise<CATEGORYDATA[] | ServerError> {
  try {
    const response = await axios.get<QUIZCATEGORIES>(BASE_URL + "/quizdata");
    return response.data.quizCategories;
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

export function setupUserAuthorizationHandler(navigate: Function) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        localStorage.clear();
        navigate("/unauthorized", { replace: true });
      }
      return Promise.reject(error);
    }
  );
}

export async function GuestAccess() {
  try {
    const response = await axios.post<SignInResponse>(BASE_URL + "/user/guest");
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
