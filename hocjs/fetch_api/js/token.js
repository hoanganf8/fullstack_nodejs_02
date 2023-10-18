import { client } from "./client.js";
client.setUrl("https://api.escuelajs.co/api/v1");

export const requestRefresh = (refreshToken) => {
  return client.post("/auth/refresh-token", {
    refreshToken,
  });
};
