export default function decorate(block) {
    const rows = Array.from(block.children);
   
    rows.forEach((row) => {
      row.classList.add('s-rep-entry');
   
      const columns = Array.from(row.children);
   
      if (columns.length >= 2) {
        const imageCol = columns[0];
        const textCol = columns[1];
   
        imageCol.classList.add('s-rep-image');
        const img = imageCol.querySelector('img');
        if (img) {
          img.classList.add('s-rep-avatar');
        }
   
        textCol.classList.add('s-rep-text');
        const [nameTitle, comment] = textCol.querySelectorAll('p');
        if (nameTitle) nameTitle.classList.add('s-rep-name');
        if (comment) comment.classList.add('s-rep-comment');
      }
    });
   
    block.classList.add('s-rep-block');
  }