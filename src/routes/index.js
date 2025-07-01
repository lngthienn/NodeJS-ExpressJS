import newsRouter from './news.js';
import coursesRouter from './courses.js';
import siteRouter from './site.js';

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

export default route;
