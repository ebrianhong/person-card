import './Person.css';

const Person = ({ person }) => {
  console.log(person)
  const { first, last } = person.name;
  const openPersonCard = (e) => {

  }
  return (
    <div id="person-card" onClick={(e) => openPersonCard(e)}>
      <p>name: {first} {last}</p>
      <p>gender: {person.gender}</p>
      <p>email: {person.email}</p>
    </div>
  )
}

export default Person;