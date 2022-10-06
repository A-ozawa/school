// オブジェクトの生成
let taro = {        // 「taro」オブジェクト
    name: 'taro',
    height: 175.0,
    weight: 72,
    blood_type: 'A',

    introduct() {       // 追加したメソッド
        return this.name + 'です。身長は' + this.height + "cmです。";
    }
};

console.log(taro);