import { heroes } from "../data/heroes";

export const getHeroesByNames = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return [];
  return heroes.filter((heroes) => heroes.superhero.toLowerCase().includes(name));
};
