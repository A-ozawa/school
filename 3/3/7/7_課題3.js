var fruit = {apple:'りんご',strawberry:'いちご',grape:'ぶどう',lemon:'れもん'};

for (key in fruit) {
    console.log(fruit[key]);
}

let values = Object.values(fruit);
console.log(values);