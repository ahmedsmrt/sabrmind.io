
// const div = document.querySelector('#container');
// const h1 = div.getElementsByTagName('h1');

for (let i = 0; i < 101; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
    }
    else if(((i % 3) == 0)) {
        console.log(`Fizz`);
    }else if (((i % 5) == 0) && !((i % 3) == 0)) {
        console.log(`Buzz`)
    }
    else {
        console.log(i);
    }
}
