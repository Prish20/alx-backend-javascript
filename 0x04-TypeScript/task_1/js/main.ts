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

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Expected output: J. Doe
