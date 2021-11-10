import BasePiece from "../../App/Pieces/BasePiece/BasePiece";

export interface Tile{
    column:string,
    row:number,
    isFocused:boolean,
    piece:BasePiece|null
}

export default interface MainState{
    tiles:Tile[]
}