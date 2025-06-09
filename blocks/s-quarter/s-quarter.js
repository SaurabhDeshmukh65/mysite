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