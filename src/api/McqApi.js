import { apiBaseUrl } from "./settings";
export function addMcq(data) {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/mcqs/addmcq`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
}

export function getAllMcqs() {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/mcqs/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
export function getSingleMcq(mcqId) {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/mcqs/${mcqId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

export function updateMcq(data) {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/mcqs/updateMcq/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
}

export function deleteMcq(mcqId) {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/mcqs/deleteMcq/${mcqId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
}
