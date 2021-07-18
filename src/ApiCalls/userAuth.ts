import axios from "axios";
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
export async function UserSignUp(userData: UserData) {
  try {
    const userDetails = {
      userDetails: {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      },
    };

    const response = await axios.post(BASE_URL + "/user/signup", userDetails);
    return response.data;
  } catch (error) {
    console.log("Error occurred while SIgning User Up:: ", error.message);
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
