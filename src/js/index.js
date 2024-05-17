// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const numbers =[1,2,3,4,5];

const randomNumber=3;

console.log (numbers[randomNumber]);

const theOperations = numbers=> {

    let mas;
    let menos;
    const sum =numbers[0]+numbers[1]+numbers[2];
    const media =(numbers[0]+numbers[1]+numbers[2]) /3;
    if (numbers[0]>= numbers [1] && numbers [0]>=numbers[2]){
        mas =numbers [0]
    } else if (numbers[1]>= numbers [0] && numbers [1]>=numbers[2]) {
        mas =numbers[1]
    } else {
        mas=number [2]
    }

    if (numbers[0]<= numbers [1] && numbers [0]<=numbers[2]){
        menos =numbers [0]
    } else if (numbers[1]<= numbers [0] && numbers [1]<=numbers[2]) {
        menos =numbers[1]
    } else {
        menos=number [2]
    }

    console.log(`la suma de todos los números es ${sum}`)
    console.log(`la media de todos los números es ${media}`)
    console.log (`el número menor es ${menos} y el número mayor es ${mas}`)
}

theOperations([6,7,8])

const aleatoryNumbers=numnumbers => {
    const random =Math.floor(Math.random()*11);

    if (numbers.includes (random)) {
        console.log(`El número ${random} está en el array en la posición ${numbers.indexOf(random)}`)
    }
    consoole.log (random);
} ;
randomNumbers([2,6,8,9,3])

