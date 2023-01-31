const checkbox = document.querySelector("#toggle-animation");
const marquee = document.querySelector(".marquee");
checkbox.addEventListener("change", () => {
  marquee.classList.toggle("enable-animation");
});

console.log(checkbox)