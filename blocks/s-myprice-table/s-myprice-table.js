export default function decorate(block) {
  block.classList.add('s-myprice-table');

  const rows = Array.from(block.children);

  // Extract the first row as title
  const titleRow = rows[0];
  if (titleRow && titleRow.children.length > 0) {
    const titleText = titleRow.children[0].textContent.trim();
    const titleElement = document.createElement('h3');
    titleElement.className = 's-myprice-title';
    titleElement.textContent = titleText;

    block.parentElement.insertBefore(titleElement, block);
    block.removeChild(titleRow);
  }

  const remainingRows = Array.from(block.children);
  const lastIndex = remainingRows.length - 1;
  const secondLastIndex = lastIndex - 1;

  remainingRows.forEach((row, rowIndex) => {
    row.classList.add('s-myprice-row');
    const columns = Array.from(row.children);

    columns.forEach((col) => {
      col.classList.add('s-myprice-col');

      if (rowIndex === 0) {
        col.classList.add('s-myprice-header');
      } else if (rowIndex === lastIndex) {
        col.classList.add('s-myprice-signup');

        const button = col.querySelector('button');
        if (button) {
          const container = document.createElement('div');
          container.className = 's-myprice-action-container';
          button.classList.add('s-myprice-action-button');
          button.addEventListener('click', () => {
            container.classList.add('clicked');
          });

          col.replaceChild(container, button);
          container.appendChild(button);
        }
      } else if (rowIndex === secondLastIndex) {
        col.classList.add('s-myprice-special');

        // Apply special styling to the first child
        const firstChild = col.firstElementChild;
        if (firstChild) {
          firstChild.classList.add('s-myprice-special-title');
        }
      } else {
        col.classList.add('s-myprice-feature');
      }
    });
  });

  // Hover effect for entire column
  const allRows = block.querySelectorAll('.s-myprice-row');
  allRows.forEach((row) => {
    const columns = row.querySelectorAll('.s-myprice-col');
    columns.forEach((col, colIndex) => {
      col.addEventListener('mouseenter', () => {
        allRows.forEach(r => {
          const cell = r.children[colIndex];
          if (cell) cell.classList.add('s-myprice-col-hover');
        });
      });
      col.addEventListener('mouseleave', () => {
        allRows.forEach(r => {
          const cell = r.children[colIndex];
          if (cell) cell.classList.remove('s-myprice-col-hover');
        });
      });
    });
  });
}
