const {Router} = require('express')
const router = Router()
const generalControllers = require('../controllers/generalControllers')

router.get('/', generalControllers.viewIndex)

module.exports = router