const {Router} = require('express')
const router = Router()
const gamesControllers = require('../controllers/gamesControllers')

// renderiza para la vista 'operaciones'
router.get('/', gamesControllers.viewGamesOperations) 

// vemos los juegos en json
router.get('/view-games', gamesControllers.viewGames)

// agregamos los juegos
router.post('/add-game', gamesControllers.addGame)

// eliminamos los juegos
router.post('/delete-game/:deleteId', gamesControllers.deleteById)

// actualizamos los juegos
router.post('/send-data-update/:updateId', gamesControllers.sendDataForUpdate)
router.post('/update-game/:updateId', gamesControllers.updateGame)

module.exports = router