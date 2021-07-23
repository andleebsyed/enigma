import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
import { SingleLeaderboardEntry } from "../pages/Leaderboard/Leaderboard";
import { ServerError, setupAuthHeaderForServiceCalls } from "./userAuth";
type QuizPerformanceData = {
  currentQuestion: number;
  totalQuestions: number | null;
  score: number;
  quizName: string;
};
export async function SaveToLeaderboard(quizPerformance: QuizPerformanceData) {
  try {
    setupAuthHeaderForServiceCalls(localStorage.getItem("token"));

    const userPerformanceData = {
      userData: {
        name: localStorage.getItem("username"),
        quizName: quizPerformance.quizName,
        score: quizPerformance.score,
      },
    };
    console.log({ userPerformanceData });
    const response = await axios.post(
      BASE_URL + "/leaderboard",
      userPerformanceData
    );
    console.log({ response });
    if (response.status === 401) {
      console.log({ response });
      return { authorized: false };
    } else {
      return { authorized: true };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    console.log("error occured ", error);
    return {
      status: false,
      message: "something went wrong",
      errorDetail: error?.message,
    };
  }
}

export async function FetchFromLeaderboard() {
  setupAuthHeaderForServiceCalls(localStorage.getItem("token"));
  const response = await axios.get(BASE_URL + "/leaderboard");

  console.log("response ", response);
  const ourLeaderboard = response.data.data
    .sort(
      (a: SingleLeaderboardEntry, b: SingleLeaderboardEntry) =>
        b.score - a.score
    )
    .slice(0, 5);
  return ourLeaderboard;
}
