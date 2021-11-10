import MainState,{Tile} from './MainStateInterface'

const generateTiles = ():Tile[]=>{
    const columnsAndRows = 8
    let generatedTiles:Tile[] = []

    for(let column = 1; column <= columnsAndRows; column++){
        for(let row = 1; row <= columnsAndRows; row++){
            generatedTiles.push({
                column : String.fromCharCode(64+column),
                row : row,
                isFocused : false,
                piece : null
            })
        }
    }

    return generatedTiles
    
}

const state:MainState = {
    tiles : generateTiles(),
}

export default state