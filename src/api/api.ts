import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const starAPI = {
  getPlanets(page: number) {
    return instance.get(`planets/?page=${page}`);
  },
};
