class ArrayList {
  constructor(Elementos) {
    this.array = [];
    for (let i = 0; i < Elementos; ++i) {
      this.array[i] = 0;
    }
    this.Elementos = Elementos;
  }
  toString() {
    return array.join();
  }
  insert(item) {
    array.push(item);
  }
  setData() {
    for (let i = 0; i < this.Elementos; ++i) {
      this.array[i] = Math.floor(Math.random() * this.Elementos + 1);
    }
  }
  clear() {
    for (let i = 0; i < this.array.length; ++i) {
      this.array[i] = 0;
    }
  }
  swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }
  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
  }
  quick(array, left, right) {
    let index;
    if (array.length > 1) {
      index = this.partition(array, left, right);
      if (left < index - 1) {
        this.quick(array, left, index - 1);
      }
      if (index < right) {
        this.quick(array, index, right);
      }
    }
  }
  partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        this.swap(array, i, j);
        pasos++;
        i++;
        j--;
      }
    }
    return i;
  }
}

const quick = new ArrayList(10000);
let pasos = 0;
for (let i = 0; i < 10; i++) {
  quick.setData();
  let start = new Date().getTime();
  quick.quickSort();
  let finish = new Date().getTime();
  let elapsed = finish - start;
  console.log();
  console.log("time: " + elapsed + " ms");
  console.log("Pasos: " + pasos * 2);
  quick.clear();
  pasos = 0;
}
