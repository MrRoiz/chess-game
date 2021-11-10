import { groupBy } from 'lodash'
import { useEffect } from 'react'
import { useSelector } from "react-redux"
import useInitGame from '../../App/Hooks/useInitGame'
import Pawn from '../../App/Pieces/Pawn'
import MainStateInterface from "../../Store/State/MainStateInterface"
import Tile from "../Tile/Tile"
import { Coordinates } from '../Tile/TilePropsInterface'

export default function Board(){
    const tiles = useSelector((state:MainStateInterface)=>state.tiles)

    useInitGame()

    const renderTiles = ()=>{
        const organizedTiles = Object.values(groupBy(tiles,'row')).reverse()
        
        return organizedTiles.map((rowTiles,rowTilesIndex)=>{
            return rowTiles.map((tile, tileIndex)=>{
                const isBlack = (rowTilesIndex + tileIndex) % 2 != 0
                const isWhite = !isBlack
                const coord:Coordinates = {
                    row : tile.row,
                    column : tile.column
                }

                return (
                    <Tile 
                        key={`${rowTilesIndex}${tileIndex}`} 
                        isBlack={isBlack} 
                        isWhite={isWhite}
                        coord={coord}
                    />
                )
            })
        })
    }

    return (
        <div className='board'>
            {renderTiles()}
        </div>
    )
}