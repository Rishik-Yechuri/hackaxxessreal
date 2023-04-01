import './TaskScreen.css';
import CardsContainer from './CardContainer';

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
function TaskScreen() {
    const data = ['Task 1', 'Task 2', 'Task 3'];

    return (
        <div className="App2">
            <div id="topDiv">
                <div id="leftSide">
                    <button id="backButton" onClick="goBack()">←</button>
                    <span id="tasksText">Tasks</span>
                </div>
                <span id="brandName">Healthify</span>
            </div>
            <div id="otherStuff">
{/*
                <div id="taskGroup"></div>
*/}
                <CardsContainer data={data} />

            </div>
        </div>



    );
}

export default TaskScreen;
