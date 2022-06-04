import express from 'express';
import bodyParser from 'body-parser'; // for taking incoming request bodies
import morgan from 'morgan';
import employeesRoutes from './routes/employees.js'; // usersRoute coming from default export users file

const app = express(); //initialize express application
const PORT = 5000;

/*initialize middleware*/
app.use(morgan('common')); //log requests using morgan common format.
app.use(bodyParser.json());

/*encapsulate the route to get all employees within express(app.use)*/
app.use('/employees', employeesRoutes);

/*...CRUD OPERATION...*/

/*get homepage endpoint*/
app.get('/', (req, res) => {
    res.send('Hello and welcome to my index page');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

