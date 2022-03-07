interface IArea {
  countryCode: string;
  ensignUrl: string | null;
  id: number;
  name: string;
}

interface ICurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string | null;
}

export interface ILeague {
  area: IArea;
  code: string;
  currentSeason: ICurrentSeason;
  emblemUrl: string | null;
  id: number;
  lastUpdated: string;
  name: string;
  numberOfAvailableSeasons: number;
  plan: string;
}
