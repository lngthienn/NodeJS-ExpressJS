import Course from '../models/Course.js';

function CourseController() {
    return {
        // [GET] /courses/:slug
        search(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                .then((course) => {
                    if (!course) {
                        return res.status(404).send('Course not found');
                    }

                    res.render('courses/show', { course: course.toObject() });
                })
                .catch(next);
        },
    };
}

export default CourseController;
