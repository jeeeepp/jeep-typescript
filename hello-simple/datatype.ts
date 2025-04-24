var myName: string = "jeep";
console.log(typeof(myName));

// function void ไม่สามารถ return ค่าได้

var myAge: number = 25;

const myArray: number [] = [1,2,3];
let myArray2: any [] = [1,2,3];
function sayHello()
{
    if(true){

    }
}

console.log("myArray", myArray)
console.log("myArray2", myArray2[0])
console.log(myArray2.pop()) // ลบ element สุดท้าย
console.log(myArray2.pop())
console.log(myArray2.pop())
console.log(myArray2)
console.log("-------")

let employeees: [number, string][] = [[110, "jeep"],[111, "jeep2"]];
console.log(employeees);
employeees.push([112, "jeep3"]);
console.log(employeees);

enum Workstatus { // status code ตัวเลขต่างๆ ที่จะ build ไว้ใช้งาน
    Pending = 0, 
    InProgress = 1, 
    Done = 3
} 

console.log(Workstatus.Done);
