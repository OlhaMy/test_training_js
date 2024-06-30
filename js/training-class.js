// !==========================
// Задача 1: Створення простого класу
// Умова: Створи клас Rectangle, який приймає два параметри width і height. Додай метод getArea, який повертає площу прямокутника.

// class Rectangle {
//   width;
//   height;

//   constructor(params){
//  this.width = params.width;
//  this.height = params.height;
//   }

//   getArea(){
// return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle ({width:4, height: 7});
// console.log(rectangle.getArea());
// !========================================
// Задача 2: Успадкування
// Умова: Створи клас Animal, який має метод speak, що виводить "Animal speaks". Створи клас Dog, який успадковує клас Animal і перевизначає метод speak, щоб він виводив "Dog barks".

// class Animal {
//   speak() {
//     return "Animal speaks";
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return "Dog barks";
//   }
// }

// const dog = new Dog();

// console.log(dog.speak());

// !=========================================

// Задача 3: Приватні властивості
// Умова: Створи клас BankAccount, який має приватну властивість balance. Додай методи deposit (для поповнення балансу) і withdraw (для зняття коштів), а також метод getBalance, що повертає поточний баланс.

// class BankAccount{
//   #balance
//   constructor(params) {
//     this.#balance = params.balance;
//   }
//   deposit(amount){
// return this.#balance += amount;
//   }
//   withdraw(amount){
//     if (amount <= this.#balance){
//       return this.#balance -= amount;
//     } else{
//       return "There are not enough funds in your account account";
//     }
//   }
//   getBalance(){
//     return this.#balance;
//   }
// }
// const account = new BankAccount({balance: 5000});

// console.log(account.getBalance());
// console.log(account.withdraw(6000));

// !==========================================

// Задача 4: Статичні методи
// Умова: Створи клас MathUtils з статичним методом square, який приймає число і повертає його квадрат.

// class MathUtils{

// static square(number){
//   return  number * number;
// };
// }
// const calc = MathUtils.square(5);

// console.log(calc);

// !==========================================
// Задача 5: Геттери і сеттери
// Умова: Створи клас Person, який має приватну властивість name. Додай геттер і сеттер для цієї властивості. Геттер повинен повертати значення name, а сеттер повинен дозволяти змінювати значення name.

// class Person{
//   #name;

//   constructor(name){
//     this.#name = name;
//   }

//   get name(){
//     return this.#name;
//   }
//   set name(newName) {
//     this.#name = newName;
//   }
// }

// const person = new Person('Angela');

// console.log(person.name);

// !==========================================

// Задача 6: Робота з масивом
// Умова: Створи клас Team, який має властивість members (масив). Додай метод addMember, який приймає ім'я члена команди і додає його до масиву. Додай метод getMembers, який повертає масив усіх членів команди.

// class Team {
//   members;

//   constructor(members){
//     this.members = members;
//   }
//   getMembers(){
//     return this.members;
//   }

//   addMember(name){
// return this.members.push(name);
//   }


// }
// const team = new Team (["Loe", "Martin", "Jost"]);

// console.log(team.getMembers());
// !==========================================
// Задача 7: Створення лічильника
// Умова: Створи клас Counter, який має приватну властивість count. Додай методи increment і decrement, які збільшують і зменшують значення count відповідно, та метод getCount, який повертає поточне значення count.


// class Counter{
//   #count;

//   constructor(initialCount){
//     this.#count = initialCount;
//   }

//   increment() {
//   this.#count++;
//   }
//   decrement() {
//   this.#count--;
//   }
//   getCount(){
//     return this.#count;
//   }
// }

// const counter = new Counter(45);

// console.log(counter.decrement());
// console.log(counter.getCount());

// console.log(counter.increment());

// !==========================================
// Задача 8: Статичні властивості
// Умова: Створи клас Car, який має статичну властивість totalCars. Додай конструктор, який збільшує totalCars на 1 кожного разу, коли створюється новий об'єкт цього класу.

// class Car{
//   static totalCars = 0;

//   constructor (){
//    Car.totalCars += 1;
//     }
//   }
// const car1 = new Car();
// const car2 = new Car()
// const car3 = new Car();

// console.log(Car.totalCars);
// !===========================================
// Задача 9: Валідатор електронної пошти
// Умова: Створи клас EmailValidator, який має статичний метод validate, що приймає рядок і повертає true, якщо рядок є валідною електронною поштою, і false в іншому випадку.



// !===========================================

// Задача 10: Робота з рядками
// Умова: Створи клас StringFormatter, який має метод capitalize, що приймає рядок і повертає його з першою великою літерою, і метод camelCase, що перетворює рядок в camelCase стиль.

class  StringFormatter{
  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  camelCase(str) {
    // Розділяємо рядок на слова, використовуючи пробіл як розділювач
    const words = str.split(' ');

    // Приводимо перше слово до нижнього регістру, а інші слова робимо з великої літери
    const camelCased = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return this.capitalize(word);
    });

    // Об'єднуємо слова в один рядок
    return camelCased.join('');
  }
}

const formatter = new StringFormatter();

console.log(formatter.capitalize("hello world")); 

