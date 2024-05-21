// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const numbers = [1, 2, 3, 4, 5];

const randomNumber = 3;

console.log(numbers[randomNumber]);

const theOperations = (numbers) => {
  let max;
  let min;
  const sum = numbers[0] + numbers[1] + numbers[2];
  console.log(`la suma de todos los números es ${sum}`);
  const media = sum / numbers.length;
  console.log(`la media de todos los números es ${media}`);
  if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
    mas = numbers[0];
  } else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
    mas = numbers[1];
  } else {
    max = numbers[2];
  }

  if (numbers[0] < numbers[1] && numbers[0] < numbers[2]) {
    min = numbers[0];
  } else if (numbers[1] < numbers[0] && numbers[1] < numbers[2]) {
    min = numbers[1];
  } else {
    min = numbers[2];
  }
  console.log(`el número menor es ${min} y el número mayor es ${max}`);
};

theOperations([6, 7, 8]);

const aleatoryNumbers = (nums) => {
  const random = Math.floor(Math.random() * 11);
  const numsContent = nums.includes(random);

  if (nums.includes(random)) {
    console.log(
      `El número ${random} está en el array en la posición ${nums.indexOf(
        random
      )}`
    );
  } else {
    console.log(`El número ${random} no está en el array`);
  }
  console.log(numsContent);
};
aleatoryNumbers([2, 6, 8, 9, 3]);

const blankArray = (array) => {
  const randomNumbA = Math.floor(Math.random() * 101);
  const randomNumbB = Math.floor(Math.random() * 101);
  const randomNumbC = Math.floor(Math.random() * 101);
  array.push(randomNumbA, randomNumbB, randomNumbC);
  console.log(array);
};
blankArray([]);

const newNumbers = (numbers) => {
  const even = [];
  const odd = [];
  const randomNew = Math.floor(Math.random() * 11);
  if ((numbers[0] * randomNew) % 2 === 0) {
    even.push(numbers[0] * randomNew);
  } else {
    odd.push(numbers[0] * randomNew);
  }
  if ((numbers[1] * randomNew) % 2 === 0) {
    even.push(numbers[1] * randomNew);
  } else {
    odd.push(numbers[1] * randomNew);
  }
  if ((numbers[2] * randomNew) % 2 === 0) {
    even.push(numbers[2] * randomNew);
  } else {
    odd.push(numbers[2] * randomNew);
  }
  if ((numbers[3] * randomNew) % 2 === 0) {
    even.push(numbers[3] * randomNew);
  } else {
    odd.push(numbers[3] * randomNew);
  }
  if ((numbers[4] * randomNew) % 2 === 0) {
    even.push(numbers[4] * randomNew);
  } else {
    odd.push(numbers[4] * randomNew);
  }

  console.log(`${even} son pares`);
  console.log(`${odd} son impares`);
};

newNumbers([3, 6, 9, 2, 4]);

const trheeWords = (words) => {
  const upperLetters = [];
  const wordA = words[0];
  const wordB = words[1];
  const wordC = words[2];
  const firstLetterA = wordA.charAt(0);
  const lastLetterA = wordA.charAt(wordA.length - 1);
  const firstLetterB = wordB.charAt(0);
  const lastLetterB = wordB.charAt(wordB.length - 1);
  const firstLetterC = wordC.charAt(0);
  const lastLetterC = wordC.charAt(wordC.length - 1);
  const uwu = upperLetters.push(
    firstLetterA.toUpperCase() +
      lastLetterA.toUpperCase() +
      firstLetterB.toUpperCase() +
      lastLetterB.toUpperCase() +
      firstLetterC.toUpperCase() +
      lastLetterC.toUpperCase()
  );
  console.log(upperLetters);
};

trheeWords(["dulce", "hogar", "ñam"]);
