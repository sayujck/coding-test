function generateSeries(a) {
  const series = [];
  a = a % 2 === 0 ? a - 1 : a;
//   console.log(a);
  for (let i = 1; i <= 2 * a - 1; i = i + 2) {
    series.push(i);
  }
  console.log(series);
}

generateSeries(6);
