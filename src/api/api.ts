import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const starAPI = {
  getPlanets(page: number) {
    return instance.get(`planets/?page=${page}`);
  },
  getPlanetById(id: number) {
    return instance.get(`planets/${id}`);
  },
  getPeople(page: number) {
    return instance.get(`people/?page=${page}`);
  },
  getPeopleById(id: number) {
    return instance.get(`people/${id}`);
  },
};
