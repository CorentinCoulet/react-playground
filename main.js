function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
            <button onClick={props.onToggleLogin}>
                {isLoggedIn ? "Se déconnecter" : "Se connecter"}
            </button>
        </div>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} onToggleLogin={toggleLogin} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
