import { defaultURL } from "/src/js/api/constants.js";
import { authFetch } from "/src/js/listings/authHeader.js";

const action = "/listings";
const method = "POST";

export async function createListing(postData) {
  const createListingURL = defaultURL + action;

  try {
    const response = await authFetch(createListingURL, {
      method,
      body: JSON.stringify(postData),
    });

    location.href = "../../../../index.html";
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}