function Clock() {
    const [date, setDate] = React.useState(new Date());
    const [textColor, setTextColor] = React.useState("black");
    const timerID = React.useRef(null);

    React.useEffect(() => {
        startClock();
        return function cleanup() {
            stopClock();
        };
    }, []);

    const startClock = () => {
        timerID.current = setInterval(() => {
            setDate(new Date());
        }, 1000);
    };

    const stopClock = () => {
        clearInterval(timerID.current);
        timerID.current = null;
    };

    const handleRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setTextColor(randomColor);
    };

    const handleResetColor = () => {
        setTextColor("black");
    };

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{ color: textColor }}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={handleRandomColor}>Changer Couleur</button>
            <button onClick={handleResetColor}>Réinitialiser Couleur</button>
            <button onClick={stopClock}>Arrêter Horloge</button>
            <button onClick={() => { startClock(); handleResetColor(); }}>Re-synchroniser Horloge</button>
        </div>
    );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));