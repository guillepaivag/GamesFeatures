import GameService from './gameServices'

const gs = new GameService()

class uiGames {

    // constructor(){}

    async addGame(game){
        await gs.postGame(game)
    }
}

export default uiGames