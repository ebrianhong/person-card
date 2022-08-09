import './App.css';
import { useState, useEffect } from 'react';
import Person from './Person';
import Button from './Button';
import PersonCard from './PersonCard';

function App() {
  const defaultPeopleList = localStorage.getItem('peopleList') ? JSON.parse(localStorage.getItem('peopleList')) : [];
  
  const [peopleList, setPeopleList] = useState(defaultPeopleList);
  const [showPersonCard, setShowPersonCard] = useState(false);

  // useEffect(() => {
  //   fetchRandomPerson();
  // }, [])

  return (
    <div className="App">
      <Button 
        peopleList={peopleList} 
        setPeopleList={setPeopleList}   
      />
      <div id="card-container">
        {peopleList 
          ? peopleList.map((person) => {
            return <Person key={person.id.value} person={person} />
          })
          : 'loading'
        }

      </div>
      <PersonCard 
        peopleList={peopleList} 
        showPersonCard={showPersonCard}
        setShowPersonCard={setShowPersonCard}
      />
    </div>
  );
}

export default App;
