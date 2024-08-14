// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // Index signature to allow additional properties
}

// Create a teacher object based on the interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// Expected output:
// {
//   contract: false,
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "Doe",
//   location: "London"
// }
