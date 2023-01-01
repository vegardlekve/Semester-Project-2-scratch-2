import { defaultURL } from "../constants.js";

const feedback = document.querySelector("#registerFeedback")

const action = "/auth/register"
const method = "post"

export async function register(profile) {
const registerURL = defaultURL + action;
const body = JSON.stringify(profile);

  try {
      const response = await fetch(registerURL, {
      headers: {
          "Content-type": "application/json"
      },
      method,
      body
    });
  
    const result = await response.json()
    console.log(result);

    if (response.status === 201) {
      feedback.innerHTML = `<p class="text-success">SUCCESS! You can now sign in</p>`
    }

    if (response.status !== 201) {
        feedback.innerHTML = `<p>Oops, something went wrong!</p>`
    }
  } catch (error) {
    console.log(error);
  }
};