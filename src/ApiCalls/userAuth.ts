import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
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
type ServerError = {
  status: boolean;
  errorDetail: string;
  errorMessage: string;
};
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
    // console.log("response data is ", response.data);
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
      errorMessage: "something went wrong",
      errorDetail: error?.message,
    };
  }
}

export async function UserSignIn(userCredentials: UserCredentials) {
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
    console.log("Error occurred while SIgning User In:: ", error.message);
  }
}
