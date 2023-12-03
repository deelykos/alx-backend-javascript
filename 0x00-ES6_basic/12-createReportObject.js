export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDeparments: (employeesList) => Object.keys(employeesList).length,
  };
}
