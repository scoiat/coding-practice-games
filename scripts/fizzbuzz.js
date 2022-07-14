function fizzbuzz() {
    let userNumber = Number(prompt("Give me a number"));

    for (let i = 1; i <= userNumber; i++) {            
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }            
    }
}    