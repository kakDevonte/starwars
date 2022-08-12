import { getIdInUrl } from './getIdInUrl';

export const getListIds = (array: string[]): string[] => {
  const listIds: string[] = [];

  array.forEach((item) => {
    listIds.push(getIdInUrl(item));
  });

  return listIds;
};
