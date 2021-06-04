
class Shape{
    constructor (sides = {}) {
        this.sides= sides;
    }
    
    perimeter = () => (this.sides.length > 0) ? this.sides.reduce(function(accumulator, currentValue){return accumulator + currentValue}): this.sides.length = 0; 
}

console.log(new Shape([5, 15]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape{
    constructor(length=0,width=0){
        super([length,width,length,width]);
        this.length = length;
        this.width = width; 
    }
    area(){
        return this.length * this.width;
    }
}

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0


class Triangle extends Shape{
    constructor(sideA=0, sideB=0, sideC=0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area(){
    this.s= (this.sideA + this.sideB + this.sideC)/2;
    this.total= (this.s*(this.s - this.sideA)*(this.s-this.sideB)*(this.s-this.sideC));
    return Math.sqrt(this.total);
    }
}
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0


// Array of sides arrays

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];  

for (array in data){
        switch (data[array].length) {
            case 2:
                if (data[array][0] == data[array][1]){
                    let n = new Rectangle(data[array][0],data[array][1]).perimeter();
                    let m = new Rectangle(data[array][0],data[array][1]).area();
                    let sides = (data[array][0]+","+data[array][1]);
                    console.log(`Square with sides ${sides} has perimeter of ${n} and area of ${m}`);
                    
                }
                else{
                    let p = new Rectangle(data[array][0],data[array][1]).perimeter();
                    let a = new Rectangle(data[array][0],data[array][1]).area();
                    let sides = (data[array][0]+","+data[array][1]);
                    console.log(`Rectangle with sides ${sides} has perimeter of ${p} and area ${a}`);
                }    
            break;
            case 3:
                    let p = new Triangle(data[array][0],data[array][1],data[array][2]).perimeter();
                    let a = new Triangle(data[array][0],data[array][1],data[array][2]).area();
                    let sides = (data[array][0]+","+data[array][1]+","+data[array][2]);
                    console.log(`Triangle with sides ${sides} has perimeter of ${p} and area of ${a}`);
            break;
            default:
                    console.log(`Shape with ${data[array].length} sides unsupported`);
            break;
        };
    };
