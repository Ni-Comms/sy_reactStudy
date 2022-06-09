import React from 'react'

function App() {
  
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if(event.target.id === "idValue"){
      if (event.target.value.length === 0) {
      setId("");
    } else {
      setId(event.target.value);
    }
    }else if(event.target.id === "pwValue"){
      if (event.target.value.length === 0) {
      setPw("");
      } else {
      setPw(event.target.value);
      }
    }
    
  };

  const ID = () => {
      return <div>
          ID:<input id="idValue" defaultValue={id}  onChange={handleChange}/>
          </div>
  }
  const PW = () => {
      return <div>
          PW:<input id="pwValue" defaultValue={pw}  onChange={handleChange}/>
          </div>
  }
  const Login = () => {
    
      return <div>
          <button disabled={id.length === 0 || pw.length === 0}>Login</button>
          </div>
  }

  return (
    <>
      <ID />
      <PW />
      <Login />
    </>
  );
}

export default App;
