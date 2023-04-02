import './HomeScreen.css';


function HomeScreen() {
    return (
        <div className="Home">

            <button className="login">Login</button>

            <div className="Header"><h1>Healthify</h1></div>

            <div className="Box">
                At Healthify, we aspire to help better people’s mental health for free and at the comfort of
                people’s
                homes.


                <button className="sign-up" >Sign Up Now!</button>
            </div>

        </div>
    );

}

export default HomeScreen;