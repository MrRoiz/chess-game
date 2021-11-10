export interface Coordinates{
    row:number
    column:string
}

export default interface TileProps{
    isBlack:boolean
    isWhite:boolean,
    coord:Coordinates
}