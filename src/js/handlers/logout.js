import { removeUser } from "/src/js/storage/index.js";


export function logOut() {
 const signOut = document.querySelector("#logoutBtn");

  if (signOut) {
    signOut.onclick = function () {
      removeUser("token");
      removeUser("userProfile");
      location.href = "./index.html";
    };
  }
};