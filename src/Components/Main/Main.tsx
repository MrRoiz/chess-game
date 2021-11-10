import Board from "../Board/Board";

export default function Main(){
    return (
        <div className='is-flex is-flex-grow-1 is-justify-content-center is-align-items-center'>
            <div className='is-inline-block'>
                <Board/>
            </div>
        </div>
    )
}