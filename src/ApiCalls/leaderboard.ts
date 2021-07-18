import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
import { ServerError } from "./userAuth";
type QuizPerformanceData = {
  currentQuestion: number;
  totalQuestions: number | null;
  score: number;
  quizName: string;
};
export async function SaveToLeaderboard(quizPerformance: QuizPerformanceData) {
  try {
    const userPerformanceData = {
      userData: {
        name: localStorage.getItem("username"),
        quizName: quizPerformance.quizName,
        score: quizPerformance.score,
      },
    };
    const response = await axios.post(
      BASE_URL + "/leaderboard",
      userPerformanceData
    );
    if (response.data.status) {
      console.log("user saved to leaderboard");
    }
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
