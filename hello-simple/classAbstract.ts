abstract class Character { // class ที่ไม่สามารถสร้าง objตรงๆ ได้ 
    public name: string;    
    public damage: number;
    public speed: number;

    constructor(name: string, damage: number, speed: number) {  // ใช้รับค่า
        this.name = name;
        this.damage = damage;
        this.speed = speed;
    }
}

class Hero extends Character {
    constructor(name: string, damage: number, speed: number){
        super(name, damage, speed);  // ใช้เรียก constructor class แม่
    
    }
    public damagePerSec(): number {
        return this.damage * this.speed
    }
}
const hero = new Hero("jeep", 100, 10);
console.log(hero.damagePerSec());

