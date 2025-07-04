import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const router = express.Router();
const courseController = CourseController();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.search);

export default router;
