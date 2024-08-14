// DirectorInterface with the required methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface with the required methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create an employee (either a Director or a Teacher)
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type guard function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Type guard function to check if an employee is a Teacher
function isTeacher(employee: Director | Teacher): employee is Teacher {
    return (employee as Teacher).workTeacherTasks !== undefined;
}

// Example usage
const employee1 = createEmployee(200);
console.log(employee1 instanceof Teacher ? "Teacher" : "Director");
console.log(employee1.workFromHome());
console.log(employee1.getCoffeeBreak());
if (isTeacher(employee1)) {
    console.log(employee1.workTeacherTasks()); // Logs "Getting to work"
} else if (isDirector(employee1)) {
    console.log(employee1.workDirectorTasks()); // Should not reach here in this case
}

const employee2 = createEmployee(1000);
console.log(employee2 instanceof Teacher ? "Teacher" : "Director");
console.log(employee2.workFromHome());
console.log(employee2.getCoffeeBreak());
if (isTeacher(employee2)) {
    console.log(employee2.workTeacherTasks()); // Should not reach here in this case
} else if (isDirector(employee2)) {
    console.log(employee2.workDirectorTasks()); // Logs "Getting to director tasks"
}

const employee3 = createEmployee('$500');
console.log(employee3 instanceof Teacher ? "Teacher" : "Director");
console.log(employee3.workFromHome());
console.log(employee3.getCoffeeBreak());
if (isTeacher(employee3)) {
    console.log(employee3.workTeacherTasks()); // Should not reach here in this case
} else if (isDirector(employee3)) {
    console.log(employee3.workDirectorTasks()); // Logs "Getting to director tasks"
}
