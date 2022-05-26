"use strict";
//////////////////////////concat

//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = numbers1.concat(numbers2);
console.log(numbers3);

//////////////////////////reverse
//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const numbers = [1, 2, 3];
const reversed = numbers.reverse();
console.log(reversed);

///////////////////////////unshift
// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const numbersUnshift = [1, 2, 3];
numbersUnshift.unshift(4, 5, 6);
console.log(numbersUnshift);

///////////////////////////push
// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const numbersPush = [1, 2, 3];
numbersPush.push(4, 5, 6);
console.log(numbersPush);

///////////////////////////shift
// 5. Дан массив [js;, css, ‘html]. Выведите на экран первый элемент и удалите
//его.

const course = ["js", "css", "html"];
console.log(course);
const shifted = course.shift();
console.log(shifted);

/////////////////////////////pop
//6. Дан массив [js, css, html]. Выведите на экран последний элемент и
//удалите его.

const course1 = ["js", "css", "html"];
console.log(course1);
const poped = course1.pop();
console.log(poped);

///////////////////////////////slice
//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
//элементы [1, 2, 3].

const numbers5 = [1, 2, 3, 4, 5];
const numbersSlice = numbers5.slice(0, 5);
console.log(numbersSlice);

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
//элементы [4, 5].

const numbers6 = [1, 2, 3, 4, 5];
const numbersSlice1 = numbers5.slice(3, 5);
console.log(numbersSlice1);

////////////////////////////////splice
//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив
//в [1, 4, 5].

const numbers7 = [1, 2, 3, 4, 5];
numbers7.splice(1, 2);
console.log(numbers7);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый
// массив элементы [2, 3, 4].

const numbers8 = [1, 2, 3, 4, 5];
const numbers8Splice = numbers8.splice(1, 3);
console.log(numbers8Splice);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a','b', 'c','d';, 4, 5].

const numbers9 = [1, 2, 3, 4, 5];
numbers9.splice(3, 0, "a", "b", "c", "d");
console.log(numbers9);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, a, b, 2, 3, 4, c, 5, e].

const numbers10 = [1, 2, 3, 4, 5];
numbers10.splice(1, 0, "a", "b");
numbers10.splice(6, 0, "c");
numbers10.splice(8, 0, "e");
console.log(numbers10);

//////////////////////////////////sort
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const numbersElem = [3, 4, 1, 2, 7];
numbersElem.sort();
console.log(numbersElem);

// 1. Необходимо создать функцию hasElem, которая параметрами будет
// принимать массив и строку, и возвращать true, если строка есть в
// массиве, и false - если нет

/**
 *
 * @param {array} array
 * @param {string} string
 * @returns {boolean}
 */
const HasElem = function (array, string) {
  return array.includes(string);
};

// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное
// число. Если есть - вернуть true, а если нет - вернуть false.

/**
 *
 * @param {array} array
 * @param {number} numbers
 * @returns {boolean}
 */
const HasNumbers = function (array, numbers) {
  return array.includes(numbers);
};

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа
// подряд. Если есть - вернуть true[2,2,1], а если нет - вернуть false[1,2,1]

/**
 * @param {array} array
 * @returns {boolean}
 */
const TwoSameNumbersNear = function () {
  for (let i = 0; i < ArrayNumbers.length; i++) {
    if (ArrayNumbers[i] === ArrayNumbers[i + 1]) {
      return true;
    }
  }
  return false;
};
const ArrayNumbers = [4, 3, 2, 4, 5, 5, 67, 6];
console.log(TwoSameNumbersNear(ArrayNumbers));

// 4. Функция, которая возвращает массив заполненный 10 случайными
// числами в интервале от 5 до 33. Math.random()

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {array}
 */
const randomNumbers = function (min, max) {
  const arrayRandomNumbers = [];
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    arrayRandomNumbers.push(number);
  }
  return arrayRandomNumbers;
};
console.log(randomNumbers(5, 33));

// 5. Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

/**
 * 
 * @param {array} array 
 * @returns {number}
 */
function findArithmeticNumber(array) {
  if (arr.length === 0) {
    return 0;
  }
  return array.reduce((elem, elem1) => elem + elem1) / array.length;
}
const arr = [12, 15, 20, 25, 59, 79];
console.log(findArithmeticNumber(arr));
