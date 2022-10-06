let number =[];
for (let a = 1 ; a <= 100; a++) {
     number.push(a)
};

let b3 = number.filter(a => a % 3 == 0);
console.log(b3);

let b5 = number.filter(a => a % 5 == 0);
console.log(b5);