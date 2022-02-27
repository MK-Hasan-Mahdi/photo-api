// 1.
const myCar = {
    name: 'Range Rover',
    model: 'IU76',
    country: 'Germany',
    year: 2022,
    color: ['Black', 'White', 'Silver', 'Blue'],
    yourCar: {
        name: 'Audi',
        year: 2021,
        fuel: 'Octane',
        isRechargable: true
    },
    longDrive: function () {
        console.log(this.name, 'to Chitagong');
    }
}
myCar.longDrive();
// myCar.name;
myCar.color;
// 2.
let templateVariable = `mycar:${myCar.name} ${myCar.year} ${myCar.color[1]} yourcar:${myCar.yourCar.name}`;
console.log(templateVariable);
// 3.1 
const eightyNineNumber = () => 89;
// console.log(eightyNineNumber());
// 3.2 
const finalNumber = (num) => num / 7;
const numberDey = finalNumber(102);
// console.log(numberDey);
// 3.3
const patchNumber = (num1, num2) => (num1 + num2) / 2;
const resultPatch = patchNumber(2, 9);
// console.log(resultPatch);
// 3.4
const aroPatchNumber = (num1, num2) => {
    let firstAdd = num1 + 7;
    let secondAdd = num2 + 7;
    let outputFirstSecond = firstAdd + secondAdd;
    let outputFirstSecondFinal = outputFirstSecond + outputFirstSecond;
    return outputFirstSecondFinal;
}
const resultAroPatchNumber = aroPatchNumber(2, 3);
// console.log(resultAroPatchNumber);
// 4.
const myArr = [42, 35, 21, 54, 70, 56];
const outputMyArr = myArr.map(x => x / 7);
// console.log(outputMyArr);

let nums = [7, 9, 16, 17, 25, 30, 42, 21, 4];
let smallNums = nums.filter(x => x < 20);
// console.log(smallNums);
// 6. destructuring 
const { name, country, color } = myCar;
// console.log('name:', name);
const { fuel } = myCar.yourCar;
// console.log(fuel);
const [imbalance, balance] = [7, 9, 16, 17, 25, 30, 42, 21, 4];
console.log(balance);