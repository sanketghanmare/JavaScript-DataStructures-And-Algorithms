class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        let xDistance = point1.x - point2.x;
        let yDistance = point1.y - point2.y;
        return `The Distance between the two points in the circle => ${Math.hypot(xDistance,yDistance)}`;
    }
}

const p1 = new Point(10,10);
const p2 = new Point(15,15);

console.log(Point.distance(p1,p2))
