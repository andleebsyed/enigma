import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
import {
  DuplicateError,
  ServerError,
  SignInResponse,
  SignUpResponse,
  UserCredentials,
  UserData,
} from "../types/services.types";

export function setupAuthHeaderForServiceCalls(token: string | null) {
  console.log("token applier running");
  if (token) {
    console.log("token found and applied");
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  console.log("token not found and not applied");
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

export async function QuizData() {
  try {
    const response = await axios.get(BASE_URL + "/quizdata");
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
  console.log("401 tackled");
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        console.log("error handler ran successsfully");
        localStorage.clear();
        navigate("/unauthorized", { replace: true });
        // navigate("/access", { replace: true });
      }
      return Promise.reject(error);
    }
  );
}
