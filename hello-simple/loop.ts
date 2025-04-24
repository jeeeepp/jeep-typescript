for (let i = 0; i < 5; i++) {
    console.log ("Run:", i);
}

console.log("for of ทำงานโดนการเข้าถึง collection ของเรา")


// เอา food ใส่ item print ออกมาทีละอัน

let foods = ["apple", "banana", "orange"];
for(let item in foods){
    console.log(foods[item]);
}

do {
    console.log("do while login ทำครั้งเดียวถ้าไม่ผ่านก็ให้อยู่หน้า login เรื่อยๆ")
}while(true);
