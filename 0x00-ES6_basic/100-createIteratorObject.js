// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  return employeeList[Symbol.iterator]();
}
