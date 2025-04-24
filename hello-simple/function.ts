function jeephello(name:string, lastname:string = "None"): string //กำหนดสิ่งที่ต้องการ return
{
    // console.info("jeep hello");    // logเพื่อนดูการทำงานภายใน
    return "hello" + " " + name + " " + lastname;
}

function sumall(a:number, b:number,...rest:number[]){
    return a+b+rest.reduce((a,b) => a+b,0);  
}   // เริ่มที่ 0 เริ่มจาก a+b และ + ต่อไปเรื่อยๆ  มันถูกเรียกว่า parameter

console.log(jeephello("jeep"));

console.log(sumall(1,2,3,4,5));

function add({w,e}:{w: number, e: number}){
    return w+e;
}
console.log(add({w:6,e:10}))

