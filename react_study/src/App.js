import React from 'react'

function App() {
  
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const handleChange = (event) => {
    //event 사용했을 때 이것은 꼭 해주어야함
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
  //컴포넌트
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
  //컴포넌트로 만들어서 return안에 넣어줌
  return (
    <>
      <ID />
      <PW />
      <Login />
    </>
  );
}
//다른 곳에서 import해주기 위해서는 꼭 해줘야함
export default App;
