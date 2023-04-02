import logo from './logo.svg';
import './App.css';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import TaskScreen from "./TaskScreen";
import HomeScreen from './HomeScreen';
// TODO: Add SDKs for Firebase products that you want to use
function App() {
    // Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCSFimHN-gPyo_aL_o-xJtpm7ZBTr14D9I",
        authDomain: "axxesshack.firebaseapp.com",
        projectId: "axxesshack",
        storageBucket: "axxesshack.appspot.com",
        messagingSenderId: "1050331285826",
        appId: "1:1050331285826:web:07588ff14898456a38e0db",
        measurementId: "G-SB2TRZP032"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return (
        <div className="App">
            <HomeScreen/>
        </div>
    );
}

export default App;
