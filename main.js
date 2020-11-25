arrayA = new Array(10);
arrayB = new Array(10);

for (i = 0; i < arrayA.length; i++){
  arrayA[i] = Math.floor(Math.random()*5 - 1);
  
}
for (i = 0; i < arrayB.length; i++){
  // b = Math.random() * 2;
  // arrayB[i] = b.toFixed(4);
  arrayB[i] = Math.floor(Math.random()*5 - 1);
}
console.log('Array A is ');
for (i = 0; i < arrayA.length; i++){
  console.log(arrayA[i]);
}
console.log('Array B is ');
for (i = 0; i < arrayB.length; i++){
  console.log(arrayB[i]);
}
for (i = 0; i < arrayA.length && i < arrayB.length; i++) {
  if (arrayA[i] == arrayB[i]) {
    document.write(arrayA[i], '<br/>');
}
}
