const { Schema, model } = require('mongoose')

const game = new Schema({
    title: {
        type: String,
        required: true
    },
    requirements: {
        OS: String,
        Processor: String,
        Graphics: String,
        Memory: String,
        Storage: String,
        DirectX: String
    },
    vendor: {
        Name: String,
        Price: Number,
        SiteWeb: String
    }
})

module.exports = model('Game', game)