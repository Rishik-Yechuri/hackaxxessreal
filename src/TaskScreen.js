import './TaskScreen.css';
import CardContainer from './CardContainer';

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { NewTasks } from './NewTasks.js';

import {useState} from "react";
import DialogBox from "./DialogBox";

// TODO: Add SDKs for Firebase products that you want to use
function TaskScreen() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [groupNum, setGroupNum] = useState(false);

    const openDialog = (groupNum) => {
        setIsDialogOpen(true);
        setGroupNum(groupNum);
    };
    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    var data;// = ['Do 5 mins of deep breathing exercises', 'Task 2', 'Task 3'];
    data = NewTasks(JSON.parse(localStorage.getItem('averages')) || []);
   // alert('data:' + JSON.stringify(data));
    return (
        <div className="App2">
            <DialogBox isOpen={isDialogOpen} closeDialog={closeDialog} groupNum={groupNum} /* other props */ />
            <div id="topDiv">
                <div id="leftSide">
                    <button id="backButton" onClick="goBack()">←</button>
                    <span id="tasksText">Tasks</span>
                </div>
                <span id="brandName">Healthify</span>
            </div>
            <div id="otherStuff">

                <CardContainer data={data}  openDialog={openDialog} />
            </div>
        </div>
    )
}

export default TaskScreen;
