interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

// Create two instances of the Student interface
  const student1: Student = {
    firstName: "Deelykos",
    lastName: "Lykos",
    age: 22,
    location: "Nigeria",
  };

  const student2: Student = {
    firstName: "Jane",
    lastName: "Jannet",
    age: 35,
    location: "Namibia",
  };

  // Store the students in an array
  const studentsList: Student[] = [student1, student2];

  // Render table using Vanilla JavaScript
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  const body = document.body
  // Loop through the students array and append rows to the table
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    // Populate the cells with student information
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);

    // Append the table to the body
    body.appendChild(table);
  });