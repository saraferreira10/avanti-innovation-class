const form = document.getElementById("form");

const span = document.createElement("span");
form.appendChild(span);

const input = form.elements["search"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const search = formData.get("search");

  if (search.trim() === "") {
    span.textContent = "";
    return;
  }

  span.textContent = `Você buscou por: '${search}'`;
  span.style.fontSize = "14px"
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    span.textContent = "";
  }
});


const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
