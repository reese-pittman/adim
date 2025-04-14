// src/api/api.js
const BASE_URL = "https://example.com/api";

export const getBackgoundImgs = async () => {
  const response = await fetch(`${BASE_URL}/data`);
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data;
};

export const postData = async (payload) => {
  const response = await fetch(`${BASE_URL}/data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Failed to post data");
  return response.json();
};
