// Existing interfaces from previous tasks
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

// Interface describing the constructor of the class
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the StudentClass
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Expected output: John
console.log(student.workOnHomework()); // Expected output: Currently working