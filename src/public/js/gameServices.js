class GameServices {

    constructor(){
        this.URI = '/games' // PRODUCTION
        // this.URI = 'https:localhost:3000/games' // DEVELOPMENT
    }

    async postGame(game){
        const res = await fetch(this.URI + '/add-game', {
            method: 'POST',
            body: game
        })

        const data = await res.json()

        console.log(data)
    }
}

export default GameServices