class Person{
    name: string = "";
    constructor(name: string){
        this.name = name;
    }
    sayHi(){
        console.log(`hi ${this.name}`);
    }
}
const person = new Person("jeep");
person.sayHi();



class Emp extends Person{   // emp จะมีทุกอย่างที่ person มี
    salary:number = 0;  // เพิ่ม property คือตัวแปรใน class
    constructor(name: string, salary: number){
        super(name);  // เรียกใช้งาน constructor ของ Person class แม่
        this.salary = salary; // ให้ค่าให้กำหนด object , เข้าถึง property
        // เข้าถึง property ด้วย this
    }
    sayHi2(){    // เพิ่ม method คือฟังก์ชั่นที่อยู่ใน class
        super.sayHi();
        console.log(`salary ${this.salary}`);
    }
}

const person2 = new Emp("jeepEmp",100000);
person2.sayHi2();
