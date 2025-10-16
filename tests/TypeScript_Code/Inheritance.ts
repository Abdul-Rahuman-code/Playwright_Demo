export {}; // ✅ Prevents variable redeclaration issues across files

// Base class
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, I am ${this.name}`);
  }
}

// Derived class (Student inherits from Person)
class Student extends Person {
  grade: number;

  constructor(name: string, grade: number) {
    super(name); // Call the parent constructor
    this.grade = grade;
  }

  study(): void {
    console.log(`${this.name} is studying in grade ${this.grade}`);
  }
}

// Create object
const student1 = new Student("Abdul Rahuman", 10);
student1.greet();  // ✅ Hello, I am Abhinay
student1.study();  // ✅ Abhinay is studying in grade 10
