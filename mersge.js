class CArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.gaps = [5, 3, 1];
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    this.length = this.dataStore.length;
    for (let i = 0; i < numElements; ++i) {
      this.dataStore[i] = 0;
    }
  }
}

function mergeSort(arr = this.dataStore) {
  if (arr.length < 2) {
    return;
  }
  let step = 1;
  let left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (let i = 0; i < rightArr.length - 1; ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (let i = 0; i < leftArr.length - 1; ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value
  let m = 0;
  let n = 0;
  for (let k=startLeft; k<stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      pasos++;
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
      pasos++;
    }
  }
}
function setData() {
  for (let i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * 10000 + 1);
  }
}
function clear() {
  for (let i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(element) {
  this.dataStore[this.pos++] = element;
}

let pasos = 0;

let nums = new CArray(10000);

for (let i = 0; i < 10; i++) {
  nums.setData();
  let start = new Date().getTime();
  nums.mergeSort();
  let finish = new Date().getTime();
  let elapsed = finish - start;
  console.log();
  console.log("time: " + elapsed + " ms");
  console.log("Pasos: " + pasos * 2);
  nums.clear();
  pasos = 0;
}

function generaAleatorios(){
        return Math.floor(Math.random()*10000+1)
}
let v=[];
for(let i = 0; i < 10000; i++)v[i]=generaAleatorios()
console.time('Tiempo');                                                                                               
v.sort(); 
console.timeEnd('Tiempo');
//Jessica Judith Rojas Torres
//Yahan Kevin Ruiz Gonzalez
