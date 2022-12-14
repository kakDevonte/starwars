export type PlanetsState = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetType[];
  currPlanet: PlanetType | null;
};

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  url: string;
};
