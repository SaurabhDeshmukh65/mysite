export default function decorate(block) {
  const rows = Array.from(block.children);
  block.classList.add('s-banner');

  rows.forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      row.classList.add('s-banner-header');
    } else if (rowIndex === 1) {
      row.classList.add('s-banner-content');
      const columns = Array.from(row.children);
      columns.forEach((col, colIndex) => {
        if (colIndex === 0) {
          col.classList.add('s-banner-title');
        } else if (colIndex === 1) {
          col.classList.add('s-banner-subtitle');
        }
      });
    } else if (rowIndex === 2) {
      row.classList.add('s-banner-image');
    }
  });
}
