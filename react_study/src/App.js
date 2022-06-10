import React from 'react'

function App() {

  const [data, setData] = React.useState(null);
  const [error, setError] =  React.useState(null);
  
  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json')
    .then(function (response){
      return response.json();
    })
    .then(function (myJson){
      console.log(JSON.stringify(myJson));
      setData(myJson.data);
    })
    .catch((error)=>{
      //alert(error);
      setError(error.message);
    });
  },[]);

  if(error != null){
    return <p>{error}</p>;
  }

  if(data==null) { 
    return <p>Loading...</p>
  };

  return (
    <div>
      <p>people</p>
      {data.people.map((person)=>(
        <>
          <span>name: {person.name}</span>
          <span>age: {person.age}</span>
        </>
      ))}
    </div>
  );
}
//다른 곳에서 import해주기 위해서는 꼭 해줘야함
export default App;
