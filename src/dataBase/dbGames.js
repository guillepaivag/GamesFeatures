const mongoose = require('mongoose')

const mongodb_uri = process.env.MONGO_URI

console.log(mongodb_uri)

mongoose.connect(mongodb_uri, {
    useNewUrlParser: true
}).then((db) => {
    console.log('Base de datos conectada!')
}).catch((err) => {
    console.log('¡¡¡Error!!!: ' + err)
})