// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const numbers =[1,2,3,4,5];

const randomNumber=3;

console.log (numbers[randomNumber]);

const theOperations = numbers=> {
    const sum =numbers[0]+numbers[1]+numbers[2];
    const media =(numbers[0]+numbers[1]+numbers[2]) /2;
    console.log(`la suma de todos los números es ${sum}`)
    console.log(`la media de todos los números es ${media}`)
}

theOperations([6,7,8])

