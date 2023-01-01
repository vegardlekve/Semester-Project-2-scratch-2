import { defaultURL } from "/src/js/api/constants.js";
import { authFetch } from "/src/js/listings/authHeader.js";
import { renderedAll } from "/src/js/rendered/renderedListings.js";
// import { searchListings } from "../globals/searchListings.mjs";

const action = "/listings";
const method = "GET";

export async function allListings() {
  const url = `https://nf-api.onrender.com/api/v1/auction/listings?_bids=true&_active=true&${sort}`;

  try {
    const response = await authFetch(url, method);
    const json = await response.json();

    if (response.status === 200) {
      renderedAll(json);
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};