function generateSeries(a){
  const series=[]
  for(let i=1;i<=2*a-1;i=i+2){
    series.push(i)
  }
  console.log(series);
}

generateSeries(4)