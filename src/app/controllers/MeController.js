import Course from '../models/Course.js';

function MeController() {
    return {
        // [GET] /me/stored/courses
        storedCourses(req, res, next) {
            Course.find({})
                .lean()
                .then((courses) => res.render('me/stored-courses', { courses }))
                .catch(next);
        },
    };
}

export default MeController;
