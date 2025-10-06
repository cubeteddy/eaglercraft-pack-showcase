const search = document.querySelector("#search");

search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".texture-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "" : "none";
  });
});
