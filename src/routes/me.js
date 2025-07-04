import express from 'express';
import CourseController from '../app/controllers/MeController.js';

const router = express.Router();
const meController = CourseController();

router.get('/stored/courses', meController.storedCourses);

export default router;
