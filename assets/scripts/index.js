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
  span.style.fontSize = "14px";
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    span.textContent = "";
  }
});

function clickBtn(button) {
  let quantityValue = 1;

  button.style.backgroundColor = "white";
  button.style.padding = "0";

  const buttonMinus = document.createElement("button");
  buttonMinus.textContent = "-";

  buttonMinus.style.backgroundColor = "transparent";
  buttonMinus.style.border = "none";

  buttonMinus.style.paddingLeft = "1rem";
  buttonMinus.style.paddingRight = "1rem";

  const buttonMore = document.createElement("button");
  buttonMore.textContent = "+";

  buttonMore.style.backgroundColor = "transparent";
  buttonMore.style.border = "none";

  buttonMore.style.paddingLeft = "1rem";
  buttonMore.style.paddingRight = "1rem";


  const quantity = document.createElement("p");
  quantity.innerHTML = quantityValue;
  quantity.style.color = "black";
  quantity.style.paddingTop = "13px"

  buttonMinus.addEventListener("click", (e) => {
    e.stopPropagation();
    if (quantityValue - 1 === 0) {
      button.style.backgroundColor = "#005cff";
      button.innerHTML = "Comprar";
      button.style.padding = "0.375rem 0.75rem";
    } else {
      quantityValue--;
      quantity.textContent = quantityValue;
    }
  });

  buttonMore.addEventListener("click", (e) => {
    e.stopPropagation();
    if (quantityValue <= 9) {
      quantityValue++;
      quantity.textContent = quantityValue;
    }
  });

  button.innerHTML = "";

  button.appendChild(buttonMinus);
  button.appendChild(quantity);
  button.appendChild(buttonMore);
}

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
