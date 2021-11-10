import {AnyAction} from 'redux'
import MainState from "../State/MainState"
import MainStateInterface from "../State/MainStateInterface"

export default function MainReducer(state = MainState, {type,payload}:AnyAction):MainStateInterface{
    switch(type){
        case 'setAsFocused':
            return {
                ...state,
                tiles : state.tiles.map(tile=>{
                    if(tile.column == payload.column && tile.row == payload.row){
                        tile.isFocused = true
                    }else{
                        tile.isFocused = false
                    }

                    return tile
                })
            }
        case 'initPieceIntoPosition':
            return {
                ...state,
                tiles : state.tiles.map(tile=>{
                    if(tile.column == payload.column && tile.row == payload.row){
                        tile.piece = payload.piece
                    }

                    return tile
                })
            }
        default:
            return state
    }
}