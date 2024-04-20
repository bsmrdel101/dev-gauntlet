import { api } from "$lib/scripts/config/api";
import { writable } from "svelte/store";

let initialized = false;
export const usersData = writable([]);
export const challengesData = writable([]);


export const initApp = async () => {
  if (initialized) return;

  await api.post('/api/users', { username: 'dev', password: '123' });
  const users = await api.get('/api/users');
  const challenges = await api.get('/api/challenges');
  console.log(users);
  
  usersData.set(users);
  challengesData.set(challenges);

  initialized = true;
};
