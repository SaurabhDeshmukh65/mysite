document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll("table tr");
 
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length === 2) {
      const skillName = cells[0].textContent.trim();
      const skillValue = parseInt(cells[1].textContent.trim());
 
      if (!isNaN(skillValue)) {
        // Clear number text and insert progress bar
        cells[1].textContent = "";
        const barContainer = document.createElement("div");
        barContainer.className = "skill-bar";
 
        const barFill = document.createElement("div");
        barFill.className = "skill-bar-fill";
        barFill.style.width = "0";
 
        barContainer.appendChild(barFill);
        cells[1].appendChild(barContainer);
 
        // Animate bar after delay
        setTimeout(() => {
          barFill.style.width = skillValue + "%";
        }, 300);
      }
    }
  });
});
 