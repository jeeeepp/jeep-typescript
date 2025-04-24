class Human{
    name: string = ''   // property
    lastname: string = ''
    age: number = 0
    
    sayHello(){
        return "Hello " + this.name + " " + this.lastname;
    }
}
const user1: any = new Human(); //new = init class
user1.name = "jeep test";
user1.lastname = "lastname";  // define property
user1.age = 25;
console.log(user1.sayHello()); // object.method
