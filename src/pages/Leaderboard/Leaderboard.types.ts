export type SingleLeaderboardEntry = {
  _id: string;
  name: string;
  quizName: string;
  score: number;
  __v: number;
};
export type LeaderboardData = SingleLeaderboardEntry[];
