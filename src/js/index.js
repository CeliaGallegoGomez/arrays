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
  if (numbers[0] >= numbers[1] && numbers[0] >= numbers[2]) {
    mas = numbers[0];
  } else if (numbers[1] >= numbers[0] && numbers[1] >= numbers[2]) {
    mas = numbers[1];
  } else {
    max = number[2];
  }

  if (numbers[0] <= numbers[1] && numbers[0] <= numbers[2]) {
    min = numbers[0];
  } else if (numbers[1] <= numbers[0] && numbers[1] <= numbers[2]) {
    min = numbers[1];
  } else {
    min = number[2];
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
  }
  console.log(numsContent);
};
aleatoryNumbers([2, 6, 8, 9, 3]);
