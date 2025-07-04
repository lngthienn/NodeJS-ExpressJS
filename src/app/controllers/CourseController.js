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

        // [GET] /courses/:id/edit
        edit(req, res, next) {
            Course.findById(req.params.id)
                .lean()
                .then((course) => res.render('courses/edit', { course }))
                .catch(next);
        },

        // [PUT] /courses/:id
        update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
        },
    };
}

export default CourseController;
