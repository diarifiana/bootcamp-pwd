/* Create a class to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties : 
■ Score
● Highest ● Lowest ● Average
■ Age
● Highest ● Lowest ● Average */

class Student {
    name: string;
    email: string;
    age: number; // Age is now a number (year)
    score: number;
  
    constructor(name: string, email: string, age: number, score: number) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.score = score;
    }
  }
  
  interface StudentDataSummary {
    score: {
      highest: number;
      lowest: number;
      average: number;
    };
    age: {
      highest: number;
      lowest: number;
      average: number;
    };
  }
  
  class StudentDataCalculator {
    students: Student[];
  
    constructor(students: Student[]) {
      this.students = students;
    }
  
    calculateSummary(): StudentDataSummary {
      if (this.students.length === 0) {
        return {
          score: { highest: 0, lowest: 0, average: 0 },
          age: { highest: 0, lowest: 0, average: 0 },
        };
      }
  
      const scores = this.students.map(student => student.score);
      const ages = this.students.map(student => student.age);
  
      const highestScore = Math.max(...scores);
      const lowestScore = Math.min(...scores);
      const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  
      const highestAge = Math.max(...ages);
      const lowestAge = Math.min(...ages);
      const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
  
      return {
        score: {
          highest: highestScore,
          lowest: lowestScore,
          average: averageScore,
        },
        age: {
          highest: highestAge,
          lowest: lowestAge,
          average: averageAge,
        },
      };
    }
  }
  
  // Example Usage:
  const students: Student[] = [
    new Student("Alice", "alice@example.com", 2002, 95),
    new Student("Bob", "bob@example.com", 2001, 80),
    new Student("Charlie", "charlie@example.com", 2003, 90),
  ];
  
  const calculator = new StudentDataCalculator(students);
  const summary = calculator.calculateSummary();
  console.log(summary);
  
  const emptyCalculator = new StudentDataCalculator([]);
  const emptySummary = emptyCalculator.calculateSummary();
  console.log(emptySummary);

/* Create a program to create transaction
● Product Class
○ Properties 
■ Name
■ Price
● Transaction Class
○ Properties 
■ Total
■ Product
● All product data
● Qty
○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data */

class Product {
    name: string;
    price: number;
    
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  interface ProductInCart {
    product: Product;
    quantity: number;
  }
  
  interface TransactionData {
    total: number;
    products: { name: string; price: number; quantity: number }[];
  }
  
  class Transaction {
    total: number = 0;
    products: ProductInCart[] = [];
  
    add_to_cart(product: Product, quantity: number): void {
      this.products.push({ product, quantity });
      this.total += product.price * quantity;
    }
  
    show_total(): void {
      console.log(`Current Total: ${this.total}`);
    }
  
    checkout(): TransactionData {
      const transaction_data: TransactionData = {
        total: this.total,
        products: this.products.map(item => ({
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
        })),
      };
      return transaction_data;
    }
  }
  
  // Example Usage
  const product1: Product = new Product("Laptop", 1000);
  const product2: Product = new Product("Mouse", 50);
  
  const transaction: Transaction = new Transaction();
  transaction.add_to_cart(product1, 1);
  transaction.add_to_cart(product2, 2);
  
  transaction.show_total();
  
  const checkout_data: TransactionData = transaction.checkout();
  console.log(checkout_data);

  // Discussion
  class Product1 {
    constructor (public name: string, public price:number) {
    }
  }

interface Cart {
  product: Product1;
  qty: number;
}

  class Transaction1 {
    private cart: Cart[] = [];
    private total: number = 0;

    addToCart(product: Product1, qty: number) {
      const existingProduct = this.cart.find((item) => item.product.name === product.name);

      if(existingProduct) {
        existingProduct.qty += qty;
      } else {
        this.cart.push({product, qty})
      }

      this.total = product.price * qty;
    }

    showCart() {
      return this.cart;
    }

    showTotal() {
      return this.total;
    }

    checkout(userMoney: number) {
      if(userMoney < this.total) {
        return "Uang Kurang"; 
      } 

      // return "Pembayaran berhasil";
      return {
        total: this.total,
        message: "Transaksi Berhasil",
        kembalian: userMoney - this.total,
      }
    }
  }

  const kaos = new Product("Kaos", 20000);
  const jaket = new Product("Jaket", 30000);

  const transaction1 = new Transaction1();
  transaction1.addToCart(kaos, 2);
  console.log(transaction1.showCart());
  console.log(transaction1.showTotal());
  console.log(transaction1.checkout(50000))
  
// ● Create a function to check if two objects are equal ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

// Declare function
function checkObject({a: object1}, {a: object2}) {
  return object1 === object2;
}

console.log(checkObject({ a: 2 },{ a: 1 }))

// Suggestion
const checkObjectEqual = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  console.log(keys1);
  console.log(keys2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) { // For of used to loop for value in array
      if (obj1[key] !== obj2[key]) {
        return false;
      }
  }

  return true;
}

console.log(checkObjectEqual({a: 1, b:2, c: 3}, {a: 1, c:3, b:2}));

// Create a function to get the intersection of two objects ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output:{ a: 1 }
 
function intersection({a: value1, b: value2}, {a: value3, c: value4}) {
  if (value1 === value3 || value1 === value4) {
    return {a: value1};
  } else if (value2 === value3 || value2 === value4) {
    return {a: value2};
  }
}

console.log(intersection({ a: 1, b: 2 },{ a: 1, c: 3 }));

// Suggestion
const intersection1 = (obj1: any, obj2: any) => {
    const duplicate = {}

    for (const key in obj1) { // For in used to loop the keys
      if (obj1[key] == obj2[key]) {
        duplicate[key] = obj1[key];
      }
    }

    return duplicate;
}

console.log(intersection1({ a: 1, b: 2 },{ a: 1, c: 3 }));

// Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [{ name: ‘Student 1’, email : ‘student1@mail.com’ }, { name: ‘Student 2’, email : ‘student2@mail.com’ }]
// Array2 → [{ name: ‘Student 1’, email : ‘student1@mail.com’ }, { name: ‘Student 3’, email : ‘student3@mail.com’ }]
// ● Result :
// ArrayResult → [] { name: ‘Student 1’, email : ‘student1@mail.com’ }, { name: ‘Student 2’, email : ‘student2@mail.com’ }, { name: ‘Student 3’, email : ‘student3@mail.com’ }

function mergeAndRemoveDupe(array1: Array[], array2: Array[]) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i].name !== array1[0].name && array2[i].name !== array1[1].name) {
      array1.push(array2[i])
    }
  }  
    return array1;
}

interface Array {
  name: string;
  email: string;
}

const array1: Array[] = [{ name: "Student 1", email : "student1@mail.com" }, { name: "Student 2", email : "student2@mail.com" }]
const array2: Array[] = [{ name: "Student 1", email : "student1@mail.com" }, { name: "Student 3", email : "student3@mail.com" }]
console.log(mergeAndRemoveDupe(array1, array2));

// Suggestion
interface StudentA {
  name: string;
  email: string
}

const combineArray = (arr1: StudentA[], arr2: StudentA[]) => {
  const mergeArr = [...arr1,...arr2];
  const temp: StudentA[] = [];

  for (let i = 0; i < mergeArr.length; i++) {
    const existStudent = temp.find((student) => student.email === mergeArr[i].email);
    
    if(!existStudent) {
      temp.push(mergeArr[i]);
    }
  }

  return temp;
}

const inp1 = [{ name: "Student 1", email: "student1@mail.com" }, { name: "Student 2", email: "student2@mail.com" }];
const inp2 = [{ name: "Student 1", email: "student1@mail.com" }, { name: "Student 3", email: "student3@mail.com" }];

console.log(combineArray(inp1, inp2))

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

function switchValueProperty(array1: {}[], array2: {}) {
  array1.unshift(array2)
  array1.pop()
  return array1
}

console.log(switchValueProperty([{name: "David", age:20}],{David: "name", 20: "age"}));

// Suggestion
const switchKeyToValue = (data: any[]) => {
  const result = [];

  data.forEach((item) => {
    const temp = {};

    for (const key in item) {
      temp[item[key]] = key;
    }

    result.push(temp);
  })

  return result;
}

console.log(switchKeyToValue([{name: "David", age:20}]))

// Create a function to find a factorial number using recursion 
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120


function factorial(num: number) {
  // let a = 1;
  // let result = a *= num
  // result *= num-1
  // result *= num-2
  // result *= num-3
  // return result;

    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
}

console.log(factorial(5));

// Suggestion
const factorial1 = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };

  } else {
    const next1 = factorial1(n-1);

    return {
      steps: [n, ...next1.steps],
      total: n * next1.total,
    };
  }
};

console.log(factorial1(5));

/* 
Proses Eksekusi Rekursi:
    1. factorial(5) dipanggil, tetapi untuk menghitung total, ia harus menunggu 
       factorial(4).
    2. factorial(4) dipanggil, tetapi ia harus menunggu factorial(3).
    3. factorial(3) dipanggil, tetapi ia harus menunggu factorial(2).
    4. factorial(2) dipanggil, tetapi ia harus menunggu factorial(1).
    5. Base case tercapai di factorial(1), sehingga dikembalikan 
       { steps: [1], total: 1 }.
    6. Sekarang factorial(2) bisa lanjut dengan hasil dari factorial(1), 
       menghitung { steps: [2, 1], total: 2 * 1 }, lalu mengembalikan hasilnya.
    7. factorial(3) lanjut dengan hasil dari factorial(2), menghitung 
       { steps: [3, 2, 1], total: 3 * 2 }, lalu mengembalikan hasilnya.
    8. factorial(4) lanjut dengan hasil dari factorial(3), menghitung 
       { steps: [4, 3, 2, 1], total: 4 * 6 }, lalu mengembalikan hasilnya.
    9. factorial(5) akhirnya mendapatkan hasil dari factorial(4), menghitung 
       { steps: [5, 4, 3, 2, 1], total: 5 * 24 }, lalu mengembalikan hasil akhir.

Kesimpulan:
    - Setiap pemanggilan rekursi harus menunggu hasil dari pemanggilan berikutnya 
      sebelum ia bisa melanjutkan perhitungannya.
    - Karena itu, kode dalam return pada else baru dieksekusi setelah pemanggilan 
      rekursif selesai dan mulai kembali ke atas dari base case.
    - Itulah sebabnya console.log(next) mencetak hasil dari rekursi terdalam ke luar, 
      bukan sebaliknya.
*/
