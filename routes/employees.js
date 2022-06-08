import express from 'express';
import { getEmployees, createEmployees, getEmployee, deleteEmployee, updateEmployee } from '../controller/employees.js';

const router = express.Router();

/**
 * GET employees page request 
 * @method GET
 * @param {URL} endpoint - endpoint to get all employees "/"
 */
router.get('/', getEmployees);

/**
 * Employee registeration page request 
 * @method POST
 * @param {URL} endpoint - endpoint to create an employee "/"
 */
router.post('/', createEmployees);

/**
 * GET employee page request 
 * @method GET
 * @param {URL} endpoint - endpoint to get an employee "/"
 */
router.get('/:id', getEmployee);

/**
 * Delete employee page request 
 * @method DELETE
 * @param {URL} endpoint - endpoint to delete an employee "/"
 */
router.delete('/:id', deleteEmployee);

/**
 * Update employee page request 
 * @method UPDATE
 * @param {URL} endpoint - endpoint to update an employee "/"
 */
router.patch('/:id', updateEmployee);

export default router;