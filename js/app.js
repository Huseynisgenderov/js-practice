let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
window.onclick = (e) => {
  if (!e.target.closest(".profile")) {
    subMenu.classList.remove("open-menu");
  }
};

//-------------------
var typed = new Typed(".auto-type", {
  strings: ["Coding", "Sleeping", "Eating"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
//--------------------
const accordion = document.querySelectorAll(".contentBx");
accordion.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.closest(".active")) {
      item.classList.remove("active");
    } else {
      accordion.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});
//-------------------
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content-info");
all_content[0].classList.add("active");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});
//-------------------
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const succes = document.querySelector("#succes");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    succes.innerText = "Success!";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  succes.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
