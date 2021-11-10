import Bishop from "../../Pieces/Bishop"
import King from "../../Pieces/King"
import Knight from "../../Pieces/Knight"
import Pawn from "../../Pieces/Pawn"
import Queen from "../../Pieces/Queen"
import Rook from "../../Pieces/Rook"
import InitialPositions from "./Interfaces/InitialPositionsInterface"

const homePieces:InitialPositions[] = [
    {
        row: 1,
        column: 'D',
        piece : new Queen('home')
    },
    {
        row: 1,
        column: 'E',
        piece : new King('home')
    },
    {
        row : 1,
        column : 'C',
        piece : new Bishop('home')
    },
    {
        row : 1,
        column : 'F',
        piece : new Bishop('home')
    },
    {
        row : 1,
        column : 'B',
        piece : new Knight('home')
    },
    {
        row : 1,
        column : 'G',
        piece : new Knight('home')
    },
    {
        row : 1,
        column : 'A',
        piece : new Rook('home')
    },
    {
        row : 1,
        column : 'H',
        piece : new Rook('home')
    },
    {
        row : 2,
        column : 'A',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'B',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'C',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'D',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'E',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'F',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'G',
        piece : new Pawn('home')
    },
    {
        row : 2,
        column : 'H',
        piece : new Pawn('home')
    }
]

export default homePieces