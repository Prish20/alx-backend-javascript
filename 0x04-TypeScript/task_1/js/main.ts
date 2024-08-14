// Teacher interface from the previous task
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a director object based on the Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Expected output:
// {
//   firstName: "John",
//   lastName: "Doe",
//   location: "London",
//   fullTimeEmployee: true,
//   numberOfReports: 17
// }
