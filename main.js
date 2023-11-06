//const helloWorld = React.createElement('h1', {}, 'Hello world!');
const lastName = 'jovy';
const firstName = 'julien';
const elementLastName = <span className="redText">{lastName.toUpperCase()}</span>;
const elementFirstName = <span>{capitalizeFirstLetter(firstName)}</span>;
const rootElement = (
    <div>
        {elementLastName}, {elementFirstName}
    </div>
);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

ReactDOM.render(rootElement, document.getElementById('app'));
