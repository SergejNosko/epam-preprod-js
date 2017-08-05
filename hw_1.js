//task 1
const PI = '3.14';
function circle(littleR, bigR) {
    console.log(`circle area with inner radius ${littleR} and outer radius ${bigR}:  ${PI * (bigR * bigR - littleR * littleR)}`);
}

circle(12, 15);

//task 2
function triangle(a, b, c) {
    return a == b || b == c || c == a;
}

if(triangle(12, 10, 14)) console.log('the triangle is isosceles');
else console.log('the triangle isn\'t isosceles');

//task 3
const peaks = [{x: 2, y: 3}, {x: 2, y: 10}, {x: 7, y: 3}, {x: 7, y: 10}];

function points(peaks) {
    let sideX = peaks[2].x - peaks[0].x;
    let sideY = peaks[1].y - peaks[0].y;
    return (sideX - 1) * (sideY - 1);
}
console.table(peaks);
console.log('Amount of inner point of the rectangle: ', points(peaks));

