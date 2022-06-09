import React from 'react'

function App() {

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
    console.log(`id.length: ${event.target.value.length}`);
  }

  const handlePwChange = (event) => {
    setPw(event.target.value);
    console.log(`pw.length: ${event.target.value.length}`);
  }

  const handleLoginClick = () => {
    alert(`id:${id}, pw:${pw}`);
  }

  //const [pw, setPw] = React.useState("");
  //const [id, setId] = React.useState("");

  // const handleChange = (event) => {
  //   //event 사용했을 때 이것은 꼭 해주어야함
  //   event.preventDefault();
  //   //console.dir(event.target);
  //   if(event.target.id === "idValue"){
  //     if (event.target.value.length === 0) {
  //       setId("");
  //     } else {
  //       setId(event.target.value);
  //     }
  //   }else if(event.target.id === "pwValue"){
  //     if (event.target.value.length === 0) {
  //       setPw("");
  //     } else {
  //       setPw(event.target.value);
  //     }
  //   }
  // };
  //컴포넌트
  const ID = ({handleIdChange}) => {
    
      return <>
          <label>ID:</label>
          <input type="text" id="idValue" defaultValue={id}  onChange={handleIdChange}/>
          </>
  }
  const PW = ({handlePwChange}) => {
    
      return <>
          <label>PW:</label>
          <input type="password" id="pwValue" defaultValue={pw}  onChange={handlePwChange}/>
          </>
  }
  const Login = () => {
      return <>
          <button disabled={id.length ===0 || pw.length === 0} onClick={handleLoginClick}>Login</button>
          </>
  }
  //컴포넌트로 만들어서 return안에 넣어줌
  return (
    <>
      <ID handleIdChange={handleIdChange}/>
      <br/>
      <PW handlePwChange={handlePwChange}/>
      <Login />
    </>
  );
}
//다른 곳에서 import해주기 위해서는 꼭 해줘야함
export default App;
