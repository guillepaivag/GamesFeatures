// import uiGames from './uiGames'

const addGameForm = document.getElementById('addGameForm')
const btnGames = document.getElementById('btnGames')

btnGames.addEventListener('click', (e) => {
    const title = document.getElementById('title').value
    const os = document.getElementById('os').value
    const processor = document.getElementById('processor').value
    const graphic = document.getElementById('graphic').value
    const memory = document.getElementById('memory').value
    const storage = document.getElementById('storage').value
    const DirectX = document.getElementById('DirectX').value
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const siteWeb = document.getElementById('siteWeb').value

    const formData = new FormData()
    
    formData.append('title', title)
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
    console.log(title)
    console.log(requirements)
    console.log(vendor)
    
    formData.append('requirements', requirements)
    formData.append('vendor', vendor)
    console.log(formData)

    // no necesario
    // formData.append('os', os)
    // formData.append('processor', processor)
    // formData.append('graphic', graphic)
    // formData.append('memory', memory)
    // formData.append('storage', storage)
    // formData.append('DirectX', DirectX)
    // formData.append('name', name)
    // formData.append('price', price)
    // formData.append('siteWeb', siteWeb)

    // necesario
    // const ui = new uiGames()
    // ui.addGame(formData)
})