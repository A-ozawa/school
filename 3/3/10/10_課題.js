let apple = {             //”りんご”オブジェクト
    color : 'red',
    weight : 200,
    size : 10,
};

let orange = {            //”みかん”オブジェクト
    color : 'orange',
    weight : 300,
    size : 15,
};

let grape = {              //"ぶどう"オブジェクト
    color : 'purple',
    weight : 400,
    size : 20,
};

//３つのオブジェクトを配列に格納

let fruit = [apple, orange ,grape];

let amount_weight = 0;
fruit.forEach(e => { 
    amount_weight += e.weight
    
});
console.log(amount_weight);