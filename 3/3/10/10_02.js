//オブジェクトの生成
let taro = {
    name : 'taro',
    height: 175.0,
    weight: 72,
    blood_type: 'A'
};
let jiro = {
    name : 'jiro',
    height: 178.0,
    weight: 76,
    blood_type: 'B'
};
let saburo = {
    name : 'saburo',
    height: 165.0,
    weight: 68,
    blood_type: 'O'
};

let brother = [taro,jiro,saburo];

brother.forEach(e => {
    console.log(e.name + ':' + e.height + 'cm');
});