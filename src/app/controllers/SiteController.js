import Course from '../models/Course.js';

function SiteController() {
    return {
        // [GET] /
        async index(req, res) {
            try {
                const coursesRaw = await Course.find({});
                const courses = coursesRaw.map((course) => course.toObject());
                res.render('home', { courses });
            } catch (err) {
                res.status(400).json({ error: 'Error!' });
            }

            // res.render('home');
        },

        // [GET] /search
        search(req, res) {
            res.render('search');
        },
    };
}

export default SiteController;
