
const SortLib = {
  filter(arr) {
    let clean = [], undefs = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) undefs.push(undefined);
      else clean.push(arr[i]);
    }
    if (undefs.length > 0) {
      console.warn(`Виявлено ${undefs.length} undefined-елементів (перенесені в кінець)`);
    }
    return { clean, undefs };
  },

  // Метод обміну (бульбашка)
  bubble(arr, asc = true) {
    let { clean, undefs } = this.filter(arr);
    let a = [...clean], c = 0, s = 0;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - 1; j++) {
        c++;
        if (asc ? a[j] > a[j + 1] : a[j] < a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          s++;
        }
      }
    }
    console.log(`Обміну: порівнянь: ${c}, обмінів: ${s}`);
    return [...a, ...undefs];
  },

  // Метод мінімальних елементів (вибір)
  selection(arr, asc = true) {
    let { clean, undefs } = this.filter(arr);
    let a = [...clean], c = 0, s = 0;
    for (let i = 0; i < a.length; i++) {
      let idx = i;
      for (let j = i + 1; j < a.length; j++) {
        c++;
        if (asc ? a[j] < a[idx] : a[j] > a[idx]) idx = j;
      }
      if (idx !== i) {
        [a[i], a[idx]] = [a[idx], a[i]];
        s++;
      }
    }
    console.log(`Мінімальних: порівнянь: ${c}, обмінів: ${s}`);
    return [...a, ...undefs];
  },

  // Метод вставок
  insertion(arr, asc = true) {
    let { clean, undefs } = this.filter(arr);
    let a = [...clean], c = 0, s = 0;
    for (let i = 1; i < a.length; i++) {
      let cur = a[i], j = i - 1;
      while (j >= 0) {
        c++;
        if (asc ? a[j] > cur : a[j] < cur) {
          a[j + 1] = a[j];
          s++;
          j--;
        } else break;
      }
      a[j + 1] = cur;
    }
    console.log(`Вставок: порівнянь: ${c}, переміщень: ${s}`);
    return [...a, ...undefs];
  },

  // Метод Шелла
  shell(arr, asc = true) {
    let { clean, undefs } = this.filter(arr);
    let a = [...clean], c = 0, s = 0;
    for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < a.length; i++) {
        let cur = a[i], j = i;
        while (j >= gap) {
          c++;
          if (asc ? a[j - gap] > cur : a[j - gap] < cur) {
            a[j] = a[j - gap];
            s++;
            j -= gap;
          } else break;
        }
        a[j] = cur;
      }
    }
    console.log(`Шелла: порівнянь: ${c}, переміщень: ${s}`);
    return [...a, ...undefs];
  },

  // Метод Хоара
  quick(arr, asc = true) {
    let { clean, undefs } = this.filter(arr);
    let c = 0, s = 0;
    function run(items) {
      if (items.length <= 1) return items;
      let pivot = items[0], left = [], right = [], mid = [];
      for (let val of items) {
        c++;
        if (asc ? val < pivot : val > pivot) left.push(val);
        else if (asc ? val > pivot : val < pivot) right.push(val);
        else mid.push(val);
      }
      s += left.length + right.length;
      return [...run(left), ...mid, ...run(right)];
    }
    let res = run(clean);
    console.log(`Хоара: порівнянь: ${c}, переміщень: ${s}`);
    return [...res, ...undefs];
  }
};


const normalArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200));

const sparseArray = [...normalArray];
sparseArray[10] = undefined;
sparseArray[50] = undefined;
sparseArray[104] = 999;

console.log("=== ТЕСТ 1: НЕРОЗРІДЖЕНИЙ МАСИВ (за зростанням) ===");
SortLib.bubble(normalArray, true);
SortLib.selection(normalArray, true);
SortLib.insertion(normalArray, true);
SortLib.shell(normalArray, true);
SortLib.quick(normalArray, true);

console.log("\n=== ТЕСТ 2: РОЗРІДЖЕНИЙ МАСИВ (за спаданням) ===");
SortLib.bubble(sparseArray, false);
SortLib.selection(sparseArray, false);
SortLib.insertion(sparseArray, false);
SortLib.shell(sparseArray, false);
SortLib.quick(sparseArray, false);