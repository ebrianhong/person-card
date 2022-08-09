import React from 'react'

const Button = ({ peopleList, setPeopleList }) => {
  const fetchRandomPerson = async (e) => {
    e.preventDefault();
    const url = `https://randomuser.me/api/?results=1`;

    const res = await fetch(url);
    const json = await res.json();
    const newList = [...peopleList, json.results[0]]
    setPeopleList(newList);
    localStorage.setItem('peopleList', JSON.stringify(newList));
  }
  return (
    <button style={{margin: "2rem 0"}} onClick={(e) => fetchRandomPerson(e)}>Generate Random Person</button>
  )
}

export default Button