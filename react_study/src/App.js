import React from 'react'

function App() {
  const [message, setMessage] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(phoneNumber);
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value.startsWith(0)) {
      //alert("Phone Number is vaild");
      setMessage("Phone Number is vaild");
      setPhoneNumber(event.target.value);
    } else if (event.target.value.length === 0) {
      setPhoneNumber("");
      setMessage("");
    } else {
      setPhoneNumber("");
      setMessage("Phone Number should starts with 0");
      //alert("Phone Number should starts with 0");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">Phone Number: </label>
      <br />
      <input
        id="phone"
        name="phone"
        onChange={handleChange}
        value={phoneNumber}
      />
      <br />
      <p>{message}</p>
      <br />
      <button
        type="submit"
        disabled={
          !phoneNumber.length === 0 || message !== "Phone Number is vaild"
        }
      >
        Submit
      </button>
      <p>{phoneNumber}</p>
    </form>
  );
}

export default App;
