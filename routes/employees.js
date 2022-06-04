import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();
const employees = [];


/*...CRUD OPERATION...*/

/*get all employees endpoint*/
router.get('/', (req, res) => {
    res.send(employees);
});

/*post and create a new user endpoint*/
router.post('/', (req, res) => {
    const newEmployee = req.body;
    employees.push({ ...newEmployee, id: uuidv4() });

    res.send(`Employee with the username ${newEmployee.Name} has been added to the database`);
});


export default router;