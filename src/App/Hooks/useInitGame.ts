import { useEffect } from "react";
import { useDispatch } from "react-redux";
import InitialGameCoordinates from "../Templates/InitialGameCoordinates/InitialGameCoordinates";

export default function useInitGame(){
    const dispatch = useDispatch()

    useEffect(()=>{
        InitialGameCoordinates.forEach(position=>{
            dispatch({
                type:'initPieceIntoPosition',
                payload: position
            })
        })
    },[])
}