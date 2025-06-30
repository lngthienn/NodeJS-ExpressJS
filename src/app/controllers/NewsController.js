function NewsController() {
    return {
        // [GET] /news
        index(req, res) {
            res.render('news');
        },

        // [GET] /news/:slug
        show(req, res) {
            res.send('New content');
        },
    };
}

export default NewsController;
