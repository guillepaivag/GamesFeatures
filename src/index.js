if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}

// Requerimientos
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const gamesRoutes = require('./routes/games')
const generalRoutes = require('./routes/general')
const cors = require('cors')
require('./dataBase/dbGames')

// Inicializaciones
const app = express()

// configuraciones
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('public', path.join(__dirname, 'public'))
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Rutas
app.use('/games', gamesRoutes)
app.use('/', generalRoutes)

// Archivos estaticos
app.use(express.static(app.get('public')))

// Servidor
app.listen(app.get('port'), () => {
    console.log('localhost:' + app.get('port'))
})