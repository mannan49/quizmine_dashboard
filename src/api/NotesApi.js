import { apiBaseUrl } from "./settings";
export function addNotes(data) {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/notes/addNotes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
}

export function getAllNotes() {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/notes/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
