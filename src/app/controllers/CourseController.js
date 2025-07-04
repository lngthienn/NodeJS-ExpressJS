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

        // [GET] /courses/create
        create(req, res, next) {
            res.render('courses/create');
        },

        // [POST] /courses/store
        store(req, res, next) {
            const formData = req.body;
            formData.image = ` https://img.youtube.com/vi/${req.body.videoId}/0.jpg`;
            const course = new Course(formData);
            course
                .save()
                .then(() => res.redirect(`/`))
                .catch((error) => {});
        },
    };
}

export default CourseController;
