import { api } from "$lib/scripts/config/api";
import { writable } from "svelte/store";

let initialized = false;
export const userData = writable([]);
export const challengesData = writable([]);


export const initApp = async () => {
  if (initialized) return;

  await api.post('/api/users', { username: 'dev', password: '123' }); // TEMP REQUEST
  const user = await api.get('/api/users');
  const challenges = await api.get('/api/challenges');
  
  userData.set(user);
  challengesData.set(challenges);

  initialized = true;
};
