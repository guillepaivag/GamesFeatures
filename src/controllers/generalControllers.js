const generalControllers = {}

generalControllers.viewIndex = (req, res) => {

    res.status(200).render('index', {
        
    })
}

module.exports = generalControllers