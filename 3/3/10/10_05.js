let car = {
    distance_per: 60.0,

    distance(t) {
        return this.distance_per * t;
    }
};

console.log('走行距離:' + car.distance(2) + 'km');