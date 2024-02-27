function people() {
  class Employee {
    constructor(name, age, tasks) {
      if (this.constructor === Employee) {
        throw new Error('Cannot instantiate abstract class');
      }
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = tasks;
      this._currentTask = 0;
    }

    work() {
      let task = this.tasks.shift().replace('{name}', this.name);
      console.log(task);
      this.tasks.push(task);
    }

    _calculateSalary() {
      return this.salary;
    }

    collectSalary() {
      console.log(`${this.name} received ${this._calculateSalary()} this month.`)
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age, ['{name} is working on a simple task.']);

    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age, [
        '{name} is working on a complicated task.',
        '{name} is taking time off work.',
        '{name} is supervising junior workers.'
      ])
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age, [
        '{name} scheduled a meeting.',
        '{name} is preparing a quarterly report.'
      ]);
      this.dividend = 0;
    }

    _calculateSalary() {
      return this.salary + this.dividend;
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager
  }
}

const classes = people();
const junior = new classes.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 5811; junior.collectSalary();
const senior = new classes.Senior('Alex', 31);
senior.work(); senior.work();
senior.work();
senior.work();
senior.salary = 12050;
senior.collectSalary();
const manager = new classes.Manager('Tom', 55);
manager.salary = 15000; manager.collectSalary(); manager.dividend = 2500; manager.collectSalary();