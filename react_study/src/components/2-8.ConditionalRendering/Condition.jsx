import React from 'react'

function UserGreeting(props){
    return <h1>{props.name && `${props.name},`} Welcome It's {props.count ?  `It's ${props.count} times` : null}</h1> //0은 false로 나옴 Boolean으로 감싸거나 이렇게 처리
}

function GuestGreeting(props){  
    return <h1>Pleas sign up.</h1>
}

function Greeting(props){
    // if(props.isLoggedIn){
    //     <UserGreeting name="Jimmy" count={0}/>
    // }
    // return <GuestGreeting/>
    return props.isLoggedIn ? <UserGreeting  name="timmy" count={0} /> : <GuestGreeting/>
}
export default function Condition() {
    const isLoggedIn = true;
  return (
    <div><Greeting isLoggedIn={isLoggedIn}/></div>
  )
}
