import { defaultURL } from "../constants.js";
import * as storage from "../../storage/index.js";

const feedback = document.querySelector("#loginFeedback")

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = defaultURL + action;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const { accessToken, ...user } = await response.json();

    console.log(response);

    if (response.status === 200) {
      storage.saveUser("token", accessToken);
      storage.saveUser("userProfile", user);
      location.href = "./index.html";
    }

    if (response.status !== 200) {
      feedback.innerHTML = `<p>Wrong email or password</p>`
    }
  } catch (error) {
    console.log(error);
  }
}

login();