/* Exercise - Employee Salary

Specifications:
Create a program to calculate total salary based on employee type
There are two types of employee: full-time & part-time
Salary for full time Employee:
IDR 100,000 / hour
IDR 75,000 / hour if the number of working hours per day is more than 6 hours
Salary for part time Employee:
IDR 50,000 / hour
IDR 30,000 / hour if the number of working hours per day is more than 6 hours

Requirements:
Create Employee as parent class
Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
- Create a method in that class to add working hour per day
- Create a method in that class to calculate total salary
Use inheritance concept
*/

class Employee {
    name: string;
    totalWorkingHour: number;
    
        constructor(
            name: string,
            totalWorkingHour: number,
        ) {
            this.name = name;
            this.totalWorkingHour = totalWorkingHour;
        }
}

class FullTime extends Employee{

    addWorkingHour(addHour: number) {
        return this.totalWorkingHour = this.totalWorkingHour + addHour
    }

    calculateTotalSalary() {
        const baseSalary = 100000;
        const overtimeSalary = 75000;
        let totalSalary;

        if (this.totalWorkingHour < 6) {
            totalSalary = (this.totalWorkingHour * baseSalary)
        } else {
            totalSalary = (((this.totalWorkingHour - 6) * overtimeSalary) + (6 * baseSalary))
        }
        
        return totalSalary;
    }
}

class PartTime extends Employee {

    addWorkingHour(addHour: number) {
        return this.totalWorkingHour = this.totalWorkingHour + addHour
    }

    calculateTotalSalary() {
        const baseSalary = 50000;
        const overtimeSalary = 30000;
        let totalSalary;

        if (this.totalWorkingHour < 6) {
            totalSalary = (this.totalWorkingHour * baseSalary)
        } else {
            totalSalary = (((this.totalWorkingHour - 6) * overtimeSalary) + (6 * baseSalary))
        }
        
        return totalSalary;
    }
}

const diah = new FullTime("Diah", 8);
console.log(diah);
console.log(diah.addWorkingHour(11));
console.log(diah.calculateTotalSalary())

const saf = new PartTime("Saf", 9);
console.log(saf);
console.log(saf.addWorkingHour(5));
console.log(saf.calculateTotalSalary());

// =========== Discussion
class Employee1 {
    name: string;
    gender: "Male" | "Female";
    workingHour: number;

    constructor(name: string, gender: "Male" | "Female") {
        this.name = name
        this.gender = gender
        this.workingHour = 0;
    }

    formatPrice(price: number) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(price);
    }
}
class FullTimeEmployee extends Employee1 {
    hourlyRate: number;
    extraHourlyRate: number;

    constructor(name: string, gender: "Male" | "Female") {
        super(name,gender)
        this.hourlyRate = 100000;
        this.extraHourlyRate = 75000;
    }
    addWorkingHour1(hours: number) {
        this.workingHour += hours;
    }

    calculateSalary1() {
        if (this.workingHour <= 6) {
            return {
                name: this.name,
                gender: this.gender,
                status: "Full Time",
                hours: this.workingHour,
                totalSalary: this.formatPrice(this.workingHour * this.hourlyRate),
            };
        } else {
            const regularHours = 6;
            const extraHours = this.workingHour - regularHours;
       
            return {
                name: this.name,
                gender: this.gender,
                status: "Full time",
                hours: this.workingHour,
                totalSalaryRegular: this.formatPrice(regularHours * this.hourlyRate),
                totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
                total: this.formatPrice(
                    regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
                ),
            };
        }
    }
}
class PartTimeEmployee extends Employee1 {
    hourlyRate: number;
    extraHourlyRate: number;

    constructor(name: string, gender: "Male" | "Female") {
        super(name,gender)
        this.hourlyRate = 50000;
        this.extraHourlyRate = 35000;
    }
    addWorkingHour1(hours: number) {
        this.workingHour += hours;
    }

    calculateSalary1() {
        if (this.workingHour <= 6) {
            return {
                name: this.name,
                gender: this.gender,
                status: "Full Time",
                hours: this.workingHour,
                totalSalary: this.formatPrice(this.workingHour * this.hourlyRate),
            };
        } else {
            const regularHours = 6;
            const extraHours = this.workingHour - regularHours;
       
            return {
                name: this.name,
                gender: this.gender,
                status: "Full time",
                hours: this.workingHour,
                totalSalaryRegular: this.formatPrice(regularHours * this.hourlyRate),
                totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
                total: this.formatPrice(
                    regularHours * this.hourlyRate + extraHours * this.extraHourlyRate
                ),
            };
        }
    }
}

/* Exercise - Shooting Game
● Specifications :
○ Create a shooting game between two player
○ Each player has three properties : name, health and power
○ Each player will take turns to shooting
○ Before shooting, players get a chance to get random items (health +10 or power +10)
○ The game will continue until one of the players has health < 0

● Requirements :
○ Create ShootingGame & Player class

○ ShootingGame class :
■ constructor(player1, player2) → player objects as a parameter
■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 } => {health : 0 , power : 10}
■ start() → start shooting games

○ Player class :
■ Property → name, health (default 100), power (default 10)
■ damage(power) → subtract player health
■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)

○ ShootingGame start() function flow :
■ In every turn :
● Show each player status before shooting
● Get random item for each player before shooting
● Show each player status after shooting
■ Show winner name */
// class ShootingGame {
//     player1: Player
//     player2: Player

//     constructor (player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//     }
//      getRandomItem() {
//         const healthBoost = Math.random() > 0.9 ? 10 : 0;
//         const powerBoost = Math.random() > 0.9 ? 10 : 0; 
//         return { health: healthBoost, power: powerBoost };
//     }

//     start() {
//         let player1 = this.player1;
//         let player2 = this.player2;

//         while(player1.health > 0 && player2.health > 0) {
//             console.log(player1.showStatus());
//             console.log(player2.showStatus());

//             const itemPlayer1 = this.getRandomItem();
//             const itemPlayer2 = this.getRandomItem();

//             player1.damage(player2);
//             player2.damage(player1);
//         }
//         let winner = player1.health <= 0 ? player2 : player1
//         console.log(`Winner: ${winner}`);  
//     }
// }

// class Player {
//     name: string;
//     health: number = 100;
//     power: number = 10;
    
//     constructor(name) { // Insert argument for a new class
//         this.name = name;
//     }

//     damage(enemy: Player) {
//         enemy.health -= this.power;
//         if (enemy.health < 0) {
//             enemy.health = 0;
//         }
//     }
//     useItem() {}

//     showStatus() {
//         return `Player ${this.name}, Health = ${this.health}, Power = ${this.power})`
//     }
// }

// const player1 = new Player ("diah");
// const player2 = new Player ("Alice");
// console.log(player1);
// console.log(player2);

// const game = new ShootingGame (player1,player2);
// console.log(game);

// =========== Discussion
class GamePlayer {
    name: string;
    health: number;
    power: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    damage(power: number) { // Power from enemy player
        this.health -= power;
    }

    useItem(item: {health: number; power: number}) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        return `${this.name} -> health: ${this.health} | power: ${this.power}`;
    }
}

class ShootingGame1 {
    player1: GamePlayer;
    player2: GamePlayer;    

    constructor(player1: GamePlayer, player2: GamePlayer) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return {health, power};
    }

    start() {
        while(this.player1.health > 0 && this.player2.health > 0) {
            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());

            // get random item
            const item1 = this.getRandomItem()
            const item2 = this.getRandomItem()

            // use random item
            this.player1.useItem(item1);
            this.player2.useItem(item2);

            // hit other player
            this.player1.damage(this.player2.power);
            this.player2.damage(this.player1.power);

            console.log(this.player1.showStatus());
            console.log(this.player2.showStatus());
        }

        if (this.player1.health <= 0) {
            return `${this.player2.name} WIN`;
        } else {
            return `${this.player1.name} WIN`;
        }
    }
}

const playerA = new GamePlayer("A");
const playerB = new GamePlayer("B");

const game1 = new ShootingGame1(playerA, playerB);
console.log(game1.start());