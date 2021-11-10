import BasePiece from "./BasePiece/BasePiece"
import TypePlayer from "./BasePiece/Interfaces/TypePlayerInterface"
import PieceInterface from "./Interfaces/PieceInterface"

export default class Bishop extends BasePiece implements PieceInterface{
    protected piece = 'chess-bishop'

    public coordinates = {
        row   : 1,
        column: 'A'
    }

    public constructor(typePlayer:TypePlayer){
       super(typePlayer) 
    }
}