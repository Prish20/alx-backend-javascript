// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array to store the students
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement("table");

// Add table headers
const headerRow = table.insertRow();
const header1 = document.createElement("th");
const header2 = document.createElement("th");
header1.innerHTML = "First Name";
header2.innerHTML = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

// Apply some basic styling for better visibility (optional)
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.querySelectorAll("th, td").forEach(cell => {
    const htmlCell = cell as HTMLElement;  // Cast cell to HTMLElement
    htmlCell.style.border = "1px solid black";
    htmlCell.style.padding = "8px";
});

// Append the table to the document body
document.body.appendChild(table);
