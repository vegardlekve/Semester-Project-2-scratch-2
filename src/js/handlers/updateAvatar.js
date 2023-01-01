import { saveUser } from "/src/js/storage/save.js";
import { changeAvatar } from "/src/js/profile/changeAvatar.js";

export async function setChangeAvatarListener() {
  const form = document.querySelector("#avatarForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      saveUser("avatar", form.avatar.value);

      changeAvatar(avatar);
    });
  }
}