const button = document.querySelector(".neon-button");
button.addEventListener("click", function (e) {
  const pulse = document.createElement("div");
  pulse.classList.add("click-pulse");
  this.appendChild(pulse);
  setTimeout(() => pulse.remove(), 500);
});

