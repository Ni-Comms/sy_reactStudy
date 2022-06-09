import React from 'react'

function useLocalStorage(itemName, value = "") {
    const [state, setState] = React.useState(() => {
      console.log("initialize");
      return window.localStorage.getItem(itemName) || value;
    });

    React.useEffect(() => {
      console.log("effect");
      window.localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
  }

function App2() {
  //console.log("render");
  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

  console.log("render");

  React.useEffect(() => {
    console.log("effect");
    window.localStorage.setItem("keyword", keyword);
  }, [keyword]);

  React.useEffect(() => {
    console.log("effect");
    window.localStorage.setItem("result", result);
  }, [result]);

  //window.localStorage.setItem("keyword", keyword);

  function handleChange(event) {
    window.localStorage.setItem("keyword", event.target.value);
    setKeyword(event.target.value);
    setTyping(true);
  }
  function handleClick() {
    setTyping(false);
    setResult(`We find results of ${keyword}`);
  }
  return (
    <>
      <input onChange={handleChange} value={keyword} />
      <button onClick={handleClick}>search</button>
      <p>{typing ? `Looking for ${keyword}...` : result}</p>
    </>
  );
}

export default App2;
