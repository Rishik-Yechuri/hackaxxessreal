import './TaskScreen.css';
import CardContainer from './CardContainer';

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {useState} from "react";
import DialogBox from "./DialogBox";

// TODO: Add SDKs for Firebase products that you want to use
function TaskScreen() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };
    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    const data = ['Task 1', 'Task 2', 'Task 3'];

    return (
        <div className="App2">
            <DialogBox isOpen={isDialogOpen} closeDialog={closeDialog} /* other props */ />
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
                <CardContainer data={data}  openDialog={openDialog} />

            </div>
        </div>



    );
}

export default TaskScreen;
