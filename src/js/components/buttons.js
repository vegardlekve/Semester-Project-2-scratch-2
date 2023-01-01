import { authCheck } from "/src/js/api/auth/authcheck.js";

const logout = document.querySelector("#logoutBtn")
const loginBtn = document.querySelector("#loginBtn")
const registerBtn = document.querySelector("#registerBtn")
const addBtn = document.querySelector("#addBtn")

export const authBtn = () => {
    if (authCheck()) {
        logout.classList.remove("d-none"),
        addBtn.classList.remove("d-none"),
        loginBtn.classList.add("d-none"),
        registerBtn.classList.add("d-none");
    }
};