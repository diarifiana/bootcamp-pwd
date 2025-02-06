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
class ShootingGame {
    player1: Player
    player2: Player

    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
     getRandomItem() {
        const healthBoost = Math.random() > 0.9 ? 10 : 0;
        const powerBoost = Math.random() > 0.9 ? 10 : 0; 
        return { health: healthBoost, power: powerBoost };
    }

    start() {
        let player1 = this.player1;
        let player2 = this.player2;

        while(player1.health > 0 && player2.health > 0) {
            console.log(player1.showStatus());
            console.log(player2.showStatus());

            const itemPlayer1 = this.getRandomItem();
            const itemPlayer2 = this.getRandomItem();

            player1.damage(player2);
            player2.damage(player1);
        }
        let winner = player1.health <= 0 ? player2 : player1
        console.log(`Winner: ${winner}`);  
    }
}

class Player {
    name: string;
    health: number = 100;
    power: number = 10;
    
    constructor(name) { // Insert argument for a new class
        this.name = name;
    }

    damage(enemy: Player) {
        enemy.health -= this.power;
        if (enemy.health < 0) {
            enemy.health = 0;
        }
    }
    useItem() {}

    showStatus() {
        return `Player ${this.name}, Health = ${this.health}, Power = ${this.power})`
    }
}

const player1 = new Player ("diah");
const player2 = new Player ("Alice");
console.log(player1);
console.log(player2);

const game = new ShootingGame (player1,player2);
console.log(game);

// ==========================
// Player Class
// class Player {
//   name: string;
//   health: number;
//   power: number;

//   constructor(name: string) {
//     this.name = name;
//     this.health = 100;
//     this.power = 10;
//   }

//   damage(power: number): void {
//     this.health -= power;
//     if (this.health < 0) {
//       this.health = 0; // Ensure health doesn't go below 0
//     }
//   }

//   useItem(item: { health: number; power: number }): void {
//     this.health += item.health;
//     this.power += item.power;
//   }

//   showStatus(): string {
//     return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
//   }
// }

// // ShootingGame Class
// class ShootingGame {
//   player1: Player;
//   player2: Player;

//   constructor(player1: Player, player2: Player) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }

//   getRandomItem(): { health: number; power: number } {
//     const healthBoost = Math.random() < 0.5 ? 0 : 10; // 50% chance for health boost
//     const powerBoost = Math.random() < 0.5 ? 0 : 10; // 50% chance for power boost
//     return { health: healthBoost, power: powerBoost };
//   }

//   start(): void {
//     let currentPlayer = this.player1;
//     let opponentPlayer = this.player2;

//     while (this.player1.health > 0 && this.player2.health > 0) {
//       // Show status before turn
//       console.log("--- Turn Start ---");
//       console.log(this.player1.showStatus());
//       console.log(this.player2.showStatus());

//       // Apply random items
//       const item1 = this.getRandomItem();
//       const item2 = this.getRandomItem();

//       console.log(`${this.player1.name} got item: Health +${item1.health}, Power +${item1.power}`);
//       this.player1.useItem(item1);
//       console.log(`${this.player2.name} got item: Health +${item2.health}, Power +${item2.power}`);
//       this.player2.useItem(item2);


//       // Player attacks
//       opponentPlayer.damage(currentPlayer.power);

//       // Show status after turn
//       console.log(`${currentPlayer.name} attacks ${opponentPlayer.name}!`);
//       console.log(this.player1.showStatus());
//       console.log(this.player2.showStatus());
//       console.log("--- Turn End ---");

//       // Switch turns
//       const tempPlayer = currentPlayer;
//       currentPlayer = opponentPlayer;
//       opponentPlayer = tempPlayer;
//     }

//     // Determine and show the winner
//     let winner: Player | null = null;
//     if (this.player1.health > 0) {
//       winner = this.player1;
//     } else if (this.player2.health > 0) {
//       winner = this.player2;
//     }

//     if (winner) {
//       console.log(`${winner.name} is the winner!`);
//     } else {
//       console.log("It's a draw!");
//     }
//   }
// }

// // Example usage:
// const playerA = new Player("Player A");
// const playerB = new Player("Player B");
// const game = new ShootingGame(playerA, playerB);
// game.start();

// ==========================
// class Player {
//     name: string;
//     health: number = 100; // Kesehatan awal 100
//     power: number = 10;  // Kekuatan awal 10
  
//     constructor(name: string) {
//       this.name = name;
//     }
  
//     attack(enemy: Player): void {
//       enemy.health -= this.power;
//       if (enemy.health < 0) {
//         enemy.health = 0;
//       }
//     }
  
//     showStatus(): string {
//       return `${this.name}: ${this.health} HP`;
//     }
//   }
  
//   class ShootingGame {
//     player1: Player;
//     player2: Player;
  
//     constructor(player1: Player, player2: Player) {
//       this.player1 = player1;
//       this.player2 = player2;
//     }
  
//     start(): void {
//       let currentPlayer = this.player1;
//       let enemyPlayer = this.player2;
  
//       while (this.player1.health > 0 && this.player2.health > 0) {
//         console.log("Giliran " + currentPlayer.name);
//         console.log(this.player1.showStatus());
//         console.log(this.player2.showStatus());
  
//         currentPlayer.attack(enemyPlayer);
//         console.log(currentPlayer.name + " menyerang!");
  
//         // Tukar pemain
//         [currentPlayer, enemyPlayer] = [enemyPlayer, currentPlayer];
//       }
  
//       // Tentukan pemenang
//       let winner = this.player1.health > 0 ? this.player1 : this.player2;
//       console.log(winner.name + " menang!");
//     }
//   }
  
//   // Mulai permainan
//   const playerA = new Player("A");
//   const playerB = new Player("B");
//   const game = new ShootingGame(playerA, playerB);
//   game.start();