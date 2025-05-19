function countMultiples(arr) {
  const result = {};

  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  arr.forEach((num) => {
    for (i = 1; i <= 9; i++) {
        if(num%i===0){
            result[i]+=1
        }
    }
  });
  console.log(result);
}

countMultiples([1,2,3,4,7,24,35,67,36])
