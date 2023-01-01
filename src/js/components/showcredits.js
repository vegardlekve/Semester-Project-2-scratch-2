import { loadUser } from "/src/js/storage/load.js";
import { authCheck } from "/src/js/api/auth/authcheck.js";

const credit = document.querySelector("#credits");
const creditAmount = loadUser("userProfile");
console.log(creditAmount);

export const showCredits = () => {
    if (authCheck()) {
        credit.innerHTML = `Credits: $${creditAmount.credits}`;
    }
};