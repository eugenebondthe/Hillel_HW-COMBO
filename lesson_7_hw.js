/*
1. Написать функцию, которая превращает строку в массив слов,
    сортирует его по алфавитному порядку и возвращает (в массиве не должно быть пробелов как элементов)
 */

const str = "Это произвольный текст для создания массива слов ";
function stringToArray(str) {
  let words = str.split(" ");

  words = words.filter((word) => word.trim() !== "");

  words.sort((a, b) => a.localeCompare(b));

  return words;
}

console.log(stringToArray(str)); // выводит [ 'для', 'произвольный', 'массива', 'слов', 'создание', 'текст', 'это' ] <- ошибка в задаче с предполагаемым выводом. Это не алфавитный порядок!

/*
2. Написать функцию, которая удаляет из массива дублирующиеся элементы и возвращает массив оригинальных элементов,
отсортированных по росту
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
  const newArray = [];

  arr.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  newArray.sort((a, b) => a - b);

  return newArray;
}

console.log(removeDuplicatesAndSort(initialArray)); // выводит [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
/*
3. Написать функцию, которая вернет массив четных чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
  const evensArr = [];

  arr.forEach((x) => {
    if (x % 2 === 0) {
      evensArr.push(x);
    }
  });

  return evensArr;
}

console.log(arrayOfEvens(initialArray2)); // выводит [ 2, 6, 12 ]

/*
4. Написать функцию, которая сформирует массив из последовательности чисел, формируя его из увеличивающего аргумента
каждый последующий элемент последовательности на самого себя. Максимальное значение массива не должно превышать число 30.
 */
function createArray(element) {
  const result = [];
  let currentValue = element;

  while (currentValue <= 30) {
    result.push(currentValue);
    currentValue += element;
  }

  return result;
}

console.log(createArray(5)); // выведет [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // выведет [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]
