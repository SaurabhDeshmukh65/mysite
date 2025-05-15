export default function decorate(block) {
  const rows = Array.from(block.children);

  rows.forEach((row, rowIndex) => {
    const columns = Array.from(row.children);
    columns.forEach((col, colIndex) => {
      if (rowIndex === 0) {
        if (colIndex === 0) {
          col.classList.add('s-banner-title');
          col.querySelector('h1').classList.add('s-banner-title-text');
        } else if (colIndex === 1) {
          col.classList.add('s-banner-subtitle');
          col.querySelector('p').classList.add('s-banner-subtitle-text');
        }
      } else if (rowIndex === 1) {
        col.classList.add('s-banner-image');
        const pic = col.querySelector('picture');
        if (pic) {
          pic.classList.add('s-banner-image-content');
        }
      }
    });
  });
}
