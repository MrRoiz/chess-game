import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pawn from "../../App/Pieces/Pawn";
import { setAsFocused } from "../../Store/ActionMakers/Maker";
import MainStateInterface from "../../Store/State/MainStateInterface";
import TileProps from "./TilePropsInterface";
import { renderClasses } from "./Utils";

export default function Tile({isBlack,isWhite,coord}:TileProps){
    const [isHovered, setIsHovered] = useState(false)
    const dispatch = useDispatch()

    const tile = useSelector((state:MainStateInterface)=>{
        return state.tiles.find(tile=>tile.column == coord.column && tile.row == coord.row)
    })

    return (
        <div 
            className={renderClasses(isBlack,isWhite,isHovered,tile?.isFocused ?? false)} 
            onMouseOver={()=>setIsHovered(true)}
            onMouseOut={()=>setIsHovered(false)}
            onClick={()=>dispatch(setAsFocused(coord))}
        >
            {tile?.piece && tile.piece.getPiece()}
        </div>
    )
}