const password = document.querySelector(".password-input");
const eyeClose = document.querySelector("#eye-close");
const eyeOpen = document.querySelector("#eye-open");

const inputOpen = () => {
  password.setAttribute("type", "text");
  eyeClose.style.display = "block";
  eyeOpen.style.display = "none";
};

const inputClose = () => {
  password.setAttribute("type", "password");
  eyeClose.style.display = "none";
  eyeOpen.style.display = "block";
};


