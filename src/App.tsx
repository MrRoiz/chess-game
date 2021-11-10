import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";

export default function App(){
    return (
        <div id='app' className='is-flex is-flex-direction-column'>
            <Header/>
            <Main/>
        </div>
    );
}