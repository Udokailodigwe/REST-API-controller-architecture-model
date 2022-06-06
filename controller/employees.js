import { v4 as uuidv4 } from 'uuid';

let employees = [];


/*...CRUD OPERATION...*/

/*get all employees endpoint*/
export const getEmployees = (req, res) => {
    res.send(employees);
}

/*post and create a new employee endpoint*/
export const createEmployees = (req, res) => {
    const newEmployee = req.body;
    employees.push({ ...newEmployee, id: uuidv4() });

    res.send(`Employee with the username ${newEmployee.Name} has been added to the database`);
}

/*get a single employee by id*/
export const getEmployee = (req, res) => {
    const { id } = req.params;
    const singleEmployee = employees.find((employee) => employee.id === id);

    res.send(singleEmployee);
}

/*delete a single employee  by id*/
export const deleteEmployee = (req, res) => {
    const { id } = req.params;
    employees = employees.filter((employee) => employee.id !== id);

    res.send(`Employee with the user id ${id} has been successfully deleted from database`);
}

/*update  a single employee detail by id*/
export const updateEmployee = (req, res) => {
    const { id } = req.params;
    const { Name, Surname, Age } = req.body;

    const updateEmployeeDetails = employees.find((employee) => employee.id === id);

    if (Name) updateEmployeeDetails.Name = Name;
    if (Surname) updateEmployeeDetails.Surname = Surname;
    if (Age) updateEmployeeDetails.Age = Age;


    res.send(`Employee detail with an ${id} wad updated successful.`);
}