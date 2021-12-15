import axios, { AxiosError } from "axios";
import { BASE_URL } from "../ApiUrls/ApiUrls";
import { SingleLeaderboardEntry } from "../pages/Leaderboard/Leaderboard.types";
import {
  DataFromLeaderboard,
  FetchFromLeaderboardResponse,
  SaveToLeaderboardResponse,
  ServerError,
  Unauthorized,
} from "../types/services.types";
import { setupAuthHeaderForServiceCalls } from "./userAuth";
export async function SaveToLeaderboard(
  score: number
): Promise<ServerError | Unauthorized> {
  try {
    setupAuthHeaderForServiceCalls(localStorage.getItem("token"));

    const userPerformanceData = {
      userData: {
        name: localStorage.getItem("username"),
        quizName: localStorage.getItem("quizName"),
        score: score,
      },
    };
    const response = await axios.post<SaveToLeaderboardResponse>(
      BASE_URL + "/leaderboard",
      userPerformanceData
    );
    if (response.status === 401) {
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

export async function FetchFromLeaderboard(): Promise<DataFromLeaderboard[]> {
  setupAuthHeaderForServiceCalls(localStorage.getItem("token"));
  const response = await axios.get<FetchFromLeaderboardResponse>(
    BASE_URL + "/leaderboard"
  );
  const ourLeaderboard = response.data.data
    .sort(
      (a: SingleLeaderboardEntry, b: SingleLeaderboardEntry) =>
        b.score - a.score
    )
    .slice(0, 5);
  return ourLeaderboard;
}
