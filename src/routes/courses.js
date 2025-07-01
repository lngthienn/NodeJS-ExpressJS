import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const router = express.Router();
const courseController = CourseController();

router.get('/:slug', courseController.search);

export default router;
