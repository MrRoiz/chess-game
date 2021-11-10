import Bishop from "../../Pieces/Bishop"
import King from "../../Pieces/King"
import Knight from "../../Pieces/Knight"
import Pawn from "../../Pieces/Pawn"
import Queen from "../../Pieces/Queen"
import Rook from "../../Pieces/Rook"
import InitialPositions from "./Interfaces/InitialPositionsInterface"

const opponentPieces:InitialPositions[] = [
    {
        row: 8,
        column: 'D',
        piece : new Queen('opponent')
    },
    {
        row: 8,
        column: 'E',
        piece : new King('opponent')
    },
    {
        row : 8,
        column : 'C',
        piece : new Bishop('opponent')
    },
    {
        row : 8,
        column : 'F',
        piece : new Bishop('opponent')
    },
    {
        row : 8,
        column : 'B',
        piece : new Knight('opponent')
    },
    {
        row : 8,
        column : 'G',
        piece : new Knight('opponent')
    },
    {
        row : 8,
        column : 'A',
        piece : new Rook('opponent')
    },
    {
        row : 8,
        column : 'H',
        piece : new Rook('opponent')
    },
    {
        row : 7,
        column : 'A',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'B',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'C',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'D',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'E',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'F',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'G',
        piece : new Pawn('opponent')
    },
    {
        row : 7,
        column : 'H',
        piece : new Pawn('opponent')
    }
]

export default opponentPieces