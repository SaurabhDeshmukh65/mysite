document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".eds-table tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td, th");

    cells.forEach((cell) => {
      if (cell.textContent.trim() === "Sign Up") {
        const button = document.createElement("button");
        button.className = "eds-signup-btn";
        button.textContent = "Sign Up";
        cell.textContent = "";
        cell.appendChild(button);
      }
    });
  });
});
