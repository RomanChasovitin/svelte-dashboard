export const colors = [
  '#AB64AC',
  '#357AAD',
  '#69A1D2',
  '#F879BF',
  '#00BB7C',
  '#E6E961',
  '#FFB300',
  '#A07100',
  '#F0658F',
  '#CD4F4F'
];

function getColor(idx) {
  const avg = Math.ceil((idx + 1) / colors.length);
  if(avg > 1) {
    return colors[idx - (colors.length * (avg - 1))];
  }
  return colors[idx];
}

export default getColor;