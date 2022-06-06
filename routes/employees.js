import express from 'express';
import { getEmployees, createEmployees, getEmployee, deleteEmployee, updateEmployee } from '../controller/employees.js';

const router = express.Router();


router.get('/', getEmployees);

router.post('/', createEmployees);

router.get('/:id', getEmployee);

router.delete('/:id', deleteEmployee);

router.patch('/:id', updateEmployee);

export default router;