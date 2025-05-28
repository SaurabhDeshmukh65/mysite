export default function decorate(block) {
    block.classList.add('s-quarter-block');
  
    const columns = Array.from(block.children);
    columns.forEach((col) => {
      col.classList.add('s-quarter-col');
  
      const [number, label] = col.children;
      if (number) number.classList.add('s-quarter-number');
      if (label) label.classList.add('s-quarter-label');
    });
  }

  
// export default function decorate(block) {
//   block.classList.add('s-quarter-block');
 
//   const columns = Array.from(block.children);
 
//   columns.forEach((col, index) => {
//     col.classList.add('s-quarter-col');
 
//     // Check if it's the last column
//     const isLast = index === columns.length - 1;
//     const [number, label] = col.children;
 
//     if (isLast) {
//       col.classList.add('s-quarter-button'); //Add class for button styling
//     } else {
//       if (number) number.classList.add('s-quarter-number');
//       if (label) label.classList.add('s-quarter-label');
//     }
//   });
// }