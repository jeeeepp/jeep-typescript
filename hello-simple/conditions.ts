if (true){
    console.log("Always run");
}

let g = 4;
let y = 5;
y > g ? console.log("x มากกว่า g") : console.log("x น้อยกว่า g"); // shorthand

console.log("--- Switch case ---")

let selectMenu : number =2;

switch(selectMenu-1){
    case 1:
        console.log("Menu 1");
        break;
    case 2:
        console.log("Menu 2");
        break;
    case 3:
        console.log("Menu 3");
        break;
}
