import { Router } from 'express';
import studentController from '../controllers/studentController';

const routes = Router();

routes.get('/', studentController.getAllStudents);
routes.get('/:id', studentController.getSingleStudent);
routes.post('/student', studentController.createStudent);
routes.delete('/:id', studentController.deleteStudent);

export default routes;