import './HomeScreen.css';
import {Link} from "react-router-dom";

function clickMe()
{
    return (
        <Link to="./login22222.html"></Link>
    );
}

function HomeScreen()
{
    return (
        <div className="Home">

            <button className="login">Login</button>

            <div className="Header"><h1>Healthify</h1></div>

            <div className="Box">
                At Healthify, we aspire to help better people’s mental health for free and at the comfort of people’s
                homes.
                
                <button className="sign-up" onClick={clickMe}>Sign Up Now!</button>
            </div>

        </div>
    );
}

export default HomeScreen;