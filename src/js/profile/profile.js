import { defaultURL } from "/src/js/api/constants.js";
import { authFetch } from "/src/js/listings/authHeader.js";
import { loadUser } from "/src/js/storage/load.js";

// const user = loadUser("userProfile");
// const profileName = user.name;


// const action = "/profiles";
// const method = "GET";

// const url = `${defaultURL}${action}/${profileName}`;
// const title = document.querySelector("title");
// const container = document.querySelector("#profile-container");

// export async function createProfile() {
//   try {
//     const response = await authFetch(url, method);
//     const profileHTML = await response.json();

//     container.innerHTML = "";
//     title.innerHTML = `Auctus Bazaar - ${profileHTML.name}`;

//     const avatar = profileHTML.avatar
   
//     container.innerHTML = `
//       <div class="profile-card card text-center m-5 justify-content-center">
//         ${avatar}
//         <h2>${profileHTML.name}</h2>
//         <div class="edit-avatar">
//             <a class="btn btn-primary" type="button" id="change" href="/pages/updateAvatar.html">Change Avatar</a>
//         </div>

//         </div>`;

//   } catch (error) {
//     console.log(error);
//   }
// }
// createProfile();
