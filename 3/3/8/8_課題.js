function add(p1,p2) {
    let p = (p1 * p2) /2;
    return p;
}

console.log(add(10,20));

let p = (function(p1, p2) {
    var p =( p1 * p2) /2;
    return p;
})(10, 20);

console.log(p);