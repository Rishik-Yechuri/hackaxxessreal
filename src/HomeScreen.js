import './HomeScreen.css';


function HomeScreen({toggleComponent}) {
    function buttonClicked(){
        toggleComponent();
    }
    return (
        <div className="Home">


            <div className="Header"><h1>Healthify</h1></div>

            <div className="Box">
                At Healthify, we aspire to help better people’s mental health for free and at the comfort of
                people’s
                homes.


                <button className="sign-up" onClick={buttonClicked} >Next</button>
            </div>

        </div>
    );

}

export default HomeScreen;