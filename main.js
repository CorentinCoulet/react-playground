function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}
  
function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
}
function Greeting(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
}

function UserCard({ user }) {
    return (
      <div className="user-card" key={user.id}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Company: {user.company.name}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  }
  
function UserList() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setUsers(data);
          setLoading(false);
        }
      })
      .catch((error) => console.error(error));

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
  
 
ReactDOM.render(
  <UserList />,
  document.querySelector('#app')
);

ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
);