function App(props) {
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);

    return(
        <React.Fragment>
        {
            users.map((u) =>(
                <UserCard key={u.id} user={u}/>
            ))
        }
        {/* <NameForm />
        <EssayForm />
        <FlavorForm /> */}
        <MainForm />
        </React.Fragment>
    )
}

function UserCard({user}) {
    

    return (
        <ul className="user-card">
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.company.name}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    )
}

// function NameForm() {
//   const [value, setValue] = React.useState('');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert('Le nom a été soumis : ' + value);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nom :
//         <input type="text" value={value} onChange={handleChange} />
//       </label>
//       <input type="submit" value="Envoyer" />
//     </form>
//   );
// }

// function EssayForm() {
//   const [value, setValue] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert('Un essai a été envoyé : ' + value);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Essay:
//         <textarea value={value} onChange={handleChange} />
//       </label>
//       <input type="submit" value="Envoyer" />
//     </form>
//   );
// }

// function FlavorForm() {
//   const [value, setValue] = React.useState('coconut');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert('Votre parfum favori est : ' + value);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Choisissez votre parfum favori :
//         <select value={value} onChange={handleChange}>
//           <option value="grapefruit">Pamplemousse</option>
//           <option value="lime">Citron vert</option>
//           <option value="coconut">Noix de coco</option>
//           <option value="mango">Mangue</option>
//         </select>
//       </label>
//       <input type="submit" value="Envoyer" />
//     </form>
//   );
// }

function MainForm() {
  const [name, setName] = React.useState('');
  const [essay, setEssay] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');
  const [flavor, setFlavor] = React.useState('coconut');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEssayChange = (event) => {
    setEssay(event.target.value);
  };

  const handleFlavorChange = (event) => {
    setFlavor(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Le nom a été soumis : ' + name);
    alert('Un essai a été envoyé : ' + essay);
    alert('Votre parfum favori est : ' + flavor);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Essay:
        <textarea value={essay} onChange={handleEssayChange} />
      </label>
      <label>
        Choisissez votre parfum favori :
        <select value={flavor} onChange={handleFlavorChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'))