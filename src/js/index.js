import { setLoginFormListener } from "/src/js/handlers/login.js";
import { setRegisterFormListener } from "/src/js/handlers/register.js";
import { authBtn } from "/src/js/components/buttons.js";
import { logOut } from "/src/js/handlers/logout.js";
import { showCredits } from "/src/js/components/showcredits.js";
import { allListings } from "/src/js/listings/allListings.js";
// import { createProfile } from "/src/js/profile/profile.js";
import { setChangeAvatarListener } from "/src/js/handlers/updateAvatar.js"
import { setCreateListingListener } from "/src/js/listings/newListing.js"

setRegisterFormListener();
setLoginFormListener();
authBtn();
logOut();
showCredits();
allListings();
// createProfile();
setChangeAvatarListener();
setCreateListingListener();