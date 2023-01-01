import { defaultURL } from "/src/js/api/constants.js";
import { authFetch } from "/src/js/listings/authHeader.js";
import { loadUser } from "/src/js/storage/load.js";

const action = "/profiles";
const method = "PUT";

export async function changeAvatar(profile) {
  const user = loadUser("userProfile");
  const userName = user.name;
  const changeAvatarURL = `${defaultURL}${action}/${userName}/media`;

  if (!user) {
    throw new Error("Please log in");
  }

  const response = await authFetch(changeAvatarURL, {
    method,
    body: JSON.stringify(profile),
  });

  location.href = "/pages/updateAvatar.html";
  return await response.json();
}