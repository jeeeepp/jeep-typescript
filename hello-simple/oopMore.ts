class Point{
    p: number = 0;
    o: number = 0;
    constructor(p: number, o: number)
    {
        this.o= o;
        this.p= p;
        console.log("hello")

    }
}

const point = new Point(10,20);
console.log(`${point.o} -- ${point.p}`);

class getterSetter{
    _x: number = 0;
    get x(): number{
        this.x = this._x +1;
        return this._x;

    }
    set x(value: number){
        this._x = value;
        console.log("value", value);
        console.log("this._x", this._x);
    }
}
const p = new getterSetter();
p.x= 10;
console.log(p._x)
console.log(p.x);
