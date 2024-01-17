//#region 1
//? Subclass (derived class)

// The derived class has access to all public properties of the parent class. In JavaScript, derived classes are declared with an extends clause, which indicates the class it extends from.

//! It is a language requirement to call super() before accessing this. The super() call calls the parent class's constructor to initialize "this".

class Animal {
  constructor(type, name, color) {
    this.type = type; //from now on, the 1st argument(type) becomes the property of animal.
    this.name = name;
    this.color = color;
  }
}

const dog = new Animal("sheppard", "snoopy", "black");

//console.log(dog);

class Cat extends Animal {
  constructor(type, name, color, origin) {
    // We should define here properties that we want to pass as argument (Which properties i want in my object to manipulate)
    super(type, name); // We should mention here properties that we want to take reference from parent class (In which properties i want to refer to parent class)
    //! The super keyword is used to access properties on an object literal or class's [[Prototype]]
    //! // super() gets ALL: what's in parent's constructor, whether it's passed as argument or not
    //super(type, name, color) - in this case we refer to parent`s constructor parameters

    //super(); //! - other way, to write it, but here we declaring parameters in body of subclass but not referring to parent`s class 
    //this.type = type;
    //this.name = name;
    //this.color = color;

    // After the parent class is done with modifying this, the derived class can do its own logic.
    this.origin = origin;
    this.color = `orange-${color}`;
  }
}

// Algorithm :
// 1. Which properties that i want to pass as argument when creating instance (operate) => put in constructor;
// 2. In which properties i want to refer to parent class => put in "super" keyword
// 3. Ensure that all parameters declared and their value are readable

const cat = new Cat("cheshire", "katty", "white", "UK");

//console.log(cat);

//#endregion

//#region 2

// Task from livecoding

// ? 1.create a class `List`

// 1-1. constructor accepts following arguments:
// - tasks (default as empty array)
// - delegated (default as empty array)

class List {
  constructor(tasks = [], delegated = []) {
    this.tasks = tasks;
    this.delegated = delegated;
  }
  //- addToList(): accepts a task object as input, add it to tasks array if it's not delegated. otherwise, add it to delegated array.
  addToList(object) {
    if (object.delegate) { // if object has truthy value for prop-ty "delegate" (so its already delegated)
      this.delegated.push(object); // then push "delegated" array
    } else {
      this.tasks.push(object); // else push it in "tasks" array
    }
  }
  // - showTaskList(): sort the tasks array and display tasks from urgent to non-urgent order
  showTaskList() {
    this.tasks = this.tasks.sort((a, b) => b.isUrgent - a.isUrgent); // descending order
    // all object.IsUrgent = true will be first, and object.IsUrgent = false last (In our example for list1.tasks array : true , false, false, false
    return this.tasks;
  }
  

  //- showDelegatedList(): display the delegated tasks with the name of person in charge
  showDelegatedList() {
    this.delegated = this.delegated.map( (item) => `${item.delegate} responsible for ${item.title}`); // with .map method we creating new array elements of which will be string with person in charge and name of task
    return this.delegated;
  }

  //-removeTask(): accepts a task object as input, and remove it from the tasks array. returns a remaining list of tasks. *if the task object is not urgent and there are other urgent tasks to do, simply returns a message "please do the urgent tasks, first." 

  removeTask(task) {
    if (task.isUrgent) { // if object.isUrgent value truthy (in our case = true)
      let hasUrgentTasks = false; // declaring flag variable
      for (const t of this.tasks) { // iterate through "tasks" array
        if (t.isUrgent) { // if in "tasks" array there is element with "isUrgent" prop-ty = true
          hasUrgentTasks = true; // then flag change to "true"
        }
      }

      if (hasUrgentTasks) {
        return "Please do the urgent tasks first."; // if flag = "true" then print string
      }
    }

    this.tasks = this.tasks.filter((t) => t !== task); // else create array that will not include this task
    return this.tasks;
  }
}

const list1 = new List();

//console.log(list1);

// ? 2. create a class `Task`
// 2-1. constructor accepts an object as arguments with following properties:
// - title: string, the task description
// - isUrgent: boolean, default false
// * e.g. const task1 = new Task({title: "company announcement"})

class Task {
  constructor({ title, isUrgent = false }) {
    this.title = title;
    this.isUrgent = isUrgent;
  }
}

const task1 = new Task({ title: "company announcement" });
const task2 = new Task({ title: "meeting" });
const task3 = new Task({ title: "review" });

//console.log(task1);
//console.log(task2);
//console.log(task3);

// ? 3. create a class `UrgentTask`
// - extends from the class `Task`
// - isUrgent: true

class UrgentTask extends Task {
  constructor({ title }) {
    super({ title, isUrgent: true });
  }
}

const urgentTask1 = new UrgentTask({ title: "watering flowers" });

//console.log(urgentTask1);

// ? 4. create a class `UrgentToDelegate`
// - extends from the class `UrgentTask`
// - comes with an extra argument `delegate` : string
//  e.g. const urgentDelegate = new UrgentToDelegate({title: "watering plants"}, "John")

class UrgentToDelegate extends UrgentTask {
  constructor({ title }, delegate) {
    super({ title });
    this.delegate = delegate;
  }
}

const urgentToDelegate1 = new UrgentToDelegate(
  { title: "make coffee" },
  "John"
);
const urgentToDelegate2 = new UrgentToDelegate({ title: "smoking" }, "Bob");

//console.log(urgentToDelegate1);
//console.log(urgentToDelegate2);


list1.addToList(task1);
list1.addToList(task2);
list1.addToList(task3);
list1.addToList(urgentTask1);
list1.addToList(urgentToDelegate1);
list1.addToList(urgentToDelegate2);
console.log(list1);

//console.log(list1.showTaskList());
//console.log(list1.showDelegatedList());
console.log(list1.removeTask(task1));

//#endregion

//#region 3

// Task from Link 

class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.taxId = taxId;
      this.salary = salary;
  }
  generatePaySlip(){
      return `Employee ID : ${this.id} \nName:${this.firstName} ${this.lastName} \nTax ID: ${this.taxId} \nPay: ${this.salary/12}`
  }
}

const employee1 = new Employee(555, "Jack", "Sparrow", 54321, 12000);

console.log(employee1.generatePaySlip());

//Task 2

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary, managedEmployees = []){ // for "managedEmployees" we have default value "[]"
      super(id, firstName, lastName, taxId, salary);
      this.managedEmployees = managedEmployees;
  }

  addManagedEmployee(employee) {
      this.managedEmployees.push(employee);
      return this.managedEmployees
  }
  removeManagedEmployee(employee){
      this.managedEmployees = this.managedEmployees.filter(item => item !== employee)
      return this.managedEmployees
  }
}

const manager1 = new Manager(5234, "Vlad", "Bakumenko", 1234, 60000)
console.log(manager1.addManagedEmployee("John"));
console.log(manager1.addManagedEmployee("Nancy"));
console.log(manager1);
console.log(manager1.removeManagedEmployee("John"));
console.log(manager1);

//#endregion