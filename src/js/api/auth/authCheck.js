import * as storage from "/src/js/storage/index.js"

export function authCheck() {
    const allGood = storage.loadUser("token");

    if (allGood && allGood.length > 0) {
        return true
    } else {
        return false;
    }
}