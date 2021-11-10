import { Coordinates } from "../../Components/Tile/TilePropsInterface";

export function setAsFocused(coord:Coordinates){
    return {
        type : 'setAsFocused',
        payload: coord
    }
}