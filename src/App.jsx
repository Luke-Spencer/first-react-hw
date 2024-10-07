// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {data} from './components/Data.jsx'
function App() {
  const people = data;
  let person = null;
  let listItems = [{}]
  // for (person in people) {
  //   // console.log(people[person]);
  //   listItems[person] = '<li {people} : name: {people[name]} surname: {people[surname]} age: {people[age]} />'
  // };
    listItems = people.map((people, i) =>
       <li> key={i} | name={people.name} | surname={people.surname} | age={people.age}</li>
    );

  return (
    <>
    <ul>
      {listItems}
    </ul>
    </>
  )
}

export default App
