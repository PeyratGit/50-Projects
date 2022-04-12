const button = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

button.addEventListener('click', () => {
  if(search.classList.contains("active")) {
    search.classList.remove("active");
  } else {
    search.classList.add("active");
    input.focus();
  }
})
