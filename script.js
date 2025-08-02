document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("demoModal");
  const btn = document.getElementById("demoBtn");
  const span = document.querySelector(".close");

  if (!modal || !btn || !span) {
    console.error("Modal elements not found.");
    return;
  }

  btn.onclick = function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
