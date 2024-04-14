const numb = Number(prompt('Write a number, please'));

if(numb % 3 == 0 && numb % 5 == 0) {
    console.log('FizzBuzz')
} else if (numb % 5 == 0) {
    console.log('Buzz')
} else if (numb % 3 == 0){
    console.log('Fizz')
}


const year = prompt('Write a year, please');

if (year % 100 === 0){
    if (year % 400 === 0){
        console.log('Цей рік є високосним!')
    } else {
        console.log('Не високосний')
    }
} else if (year % 4 === 0) {
    console.log('Цей рік є високосним!')
} else {
    console.log('Не високосний')
}



const age = +prompt('Write your age, please');

if (age % 10 == 0 || (age % 10 >= 5 && age % 10 <= 9) || (5 <= age && age <= 19))
    {
    console.log(`Вам ${age} років`);
} else if (age % 10 >= 2 && age % 10 <= 4) {
    console.log(`Вам ${age} роки`);
} else {
    console.log(`Вам ${age} рік`);
}





