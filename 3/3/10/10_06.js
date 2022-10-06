let car = {                    // carオブジェクト
    distance_per: 60.0,        // プロパティ 1時間辺りの走行距離

    distance(t) {              // メソッド 走行距離を計算する関数
        return this.distance_per * t;
    }
};

let bicycle = {               //bicycleオブジェクト
    distance_per: 15.0,       //プロパティ１時間あたりの走行距離

    distance(time) {          //メソッド　走行距離を計算する関数
        return this.distance_per * time;
    }
};

console.log('走行距離:' + car.distance(2) + 'km');
console.log('走行距離:' + bicycle.distance(2) + 'km');

