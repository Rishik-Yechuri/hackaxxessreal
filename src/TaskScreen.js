import './TaskScreen.css';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
function App() {
    return (
        <div className="App">
            <div id="topDiv">
                <span id="tasksText">Tasks</span>
                <button id="backButton" onClick="goBack()">←</button>
                <span id="brandName">Your Brand</span>
            </div>
            <div id="otherStuff">
                <div id="taskGroup"></div>
            </div>
        </div>


    );
}

export default App;
