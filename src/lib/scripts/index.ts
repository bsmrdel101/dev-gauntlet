import { api } from "$lib/scripts/config/api";
import { writable } from "svelte/store";

let initialized = false;
export const usersData = writable([]);
export const challengesData = writable([]);


export const initApp = async () => {
  if (initialized) return;

  const users = await api.get('/api/users');
  const challenges = await api.get('/api/challenges');
  usersData.set(users);
  challengesData.set(challenges);

  initialized = true;
};
