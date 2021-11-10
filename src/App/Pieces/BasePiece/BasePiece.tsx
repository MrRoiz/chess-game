import TypePlayer from "./Interfaces/TypePlayerInterface"

export default abstract class BasePiece{
    /**
     * Home makes reference to the main player
     */
    protected isHome:boolean = false
    protected isOpponent:boolean = false

    /**
     * By default pawn is setted, it needs to be overwritten on child class
     */
    protected piece = 'chess-pawn'

    private size = '2x'

    public constructor(typePlayer:TypePlayer){
        if(typePlayer == 'home') this.isHome = true
        else this.isOpponent = true
    }

    private renderClasses():string{
        const typePieceClass = this.isHome ? 'piece-is-home' : 'piece-is-opponent';
        let classes = `fa ${typePieceClass} fa-${this.piece} fa-${this.size}`

        return classes
    }

    public getPiece(){
        return <i className={this.renderClasses()}/>
    }
}