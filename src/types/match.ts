interface IArea {
  name: symbol;
  code: string;
  ensignUrl: string;
}

interface IReferee {
  id: number;
  name: string;
  nationality: string;
  role: string;
}

interface IScore {
  duration: string;
  extraTime: { homeTeam: null | number; awayTeam: null | number };
  fullTime: { homeTeam: number; awayTeam: number };
  halfTime: { homeTeam: number; awayTeam: number };
  penalties: { homeTeam: null | number; awayTeam: null | number };
  winner: string;
}

interface ISeason {
  currentMatchday: number;
  endDate: string;
  id: number;
  startDate: string;
  winner: null;
}

export interface IMatch {
  awayTeam: { id: number; name: string };
  competition: { id: number; name: string; area: IArea };
  group: null | string;
  homeTeam: { id: number; name: string };
  id: number;
  lastUpdated: string;
  matchday: number;
  odds: { msg: string };
  referees: IReferee[];
  score: IScore;
  season: ISeason;
  stage: string;
  status: string;
  utcDate: string;
}
