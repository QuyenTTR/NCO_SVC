class SiteController {
    
    helloWorld(req, res) {
        res.send('Hello World');
    }

    index(req, res) {
        res.render('home');
    }

}

export default new SiteController();