const DBGames = require('../models/db_games')
const path = require('path')

const gamesControllers = {}

gamesControllers.viewGamesOperations = (req, res) => {
    res.status(200).render(path.join(__dirname, '..', 'views', 'gameOperations.ejs'), {
        title: 'Agregar datos',
        data: new DBGames(),
        typeOperation: 'save',
        route: '/games/add-game'
    })
}

gamesControllers.viewGames = async (req, res) => {
    const games = await DBGames.find()
    // res.status(200).json(games)
    res.status(200).render(path.join(__dirname, '..', 'views', 'gamesView.ejs'), {
        data: games
    })
}

gamesControllers.addGame = (req, res) => {
    const {
        title,
        os, processor, graphic, memory, storage, DirectX,
        name, price, siteWeb
    } = req.body

    const requirements = {
        OS: os,
        Processor: processor,
        Graphics: graphic,
        Memory: memory,
        Storage: storage,
        DirectX: DirectX
    }
    const vendor = {
        Name: name,
        Price: price,
        SiteWeb: siteWeb
    }

    const newGame = new DBGames({
        title,
        requirements,
        vendor
    })
    newGame.save()

    res.status(200).render('gameOperated', {
        theme: 'Juego añadido',
        data: newGame
    })
}

gamesControllers.deleteById = async (req, res) => {
    console.log(req.params.deleteId)
    const gameDelete = await DBGames.findByIdAndDelete(req.params.deleteId)
    res.status(200).render('gameOperated', {
        theme: 'Juego eliminado',
        data: gameDelete
    })
}

gamesControllers.sendDataForUpdate = async (req, res) => {
    const gameForUpdate = await DBGames.findById(req.params.updateId)
    res.status(200).render('gameOperations', {
        title: 'Editar datos',
        data: gameForUpdate,
        typeOperation: 'edit',
        route: '/games/update-game/' + req.params.updateId
    })
}

gamesControllers.updateGame = async (req, res) => {
    const {
        title,
        os, processor, graphic, memory, storage, DirectX,
        name, price, siteWeb
    } = req.body

    const requirements = {
        OS: os,
        Processor: processor,
        Graphics: graphic,
        Memory: memory,
        Storage: storage,
        DirectX: DirectX
    }
    const vendor = {
        Name: name,
        Price: price,
        SiteWeb: siteWeb
    }


    const gameUpdated = await DBGames.updateOne({ '_id': req.params.updateId }, {
        title: title,
        requirements: requirements,
        vendor: vendor
    })

    res.status(200).render('gameOperated', {
        theme: 'Juego actualizado',
        data: {
            title: title,
            requirements: requirements,
            vendor: vendor
        }
    })
}

module.exports = gamesControllers