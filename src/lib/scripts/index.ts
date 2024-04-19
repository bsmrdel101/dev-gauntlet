import { api } from "$lib/scripts/config/api";
import { writable } from "svelte/store";

let initialized = false;
export const users = writable([]);


export const initApp = async () => {
  if (initialized) return;

  const res = await api.get('/api/users');
  users.set(res);

  initialized = true;
};
