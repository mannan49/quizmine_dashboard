import { apiBaseUrl } from "./settings";
export function addSkill(data) {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/skills/addskill`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
}

export function getAllSkills() {
  const token = window.localStorage.getItem("token");
  return fetch(`${apiBaseUrl}/api/v1/skills/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
